import { Destination } from "./types";

export const DESTINATIONS: Destination[] = [
  {
    slug: "karma-kandara",
    title: "Karma Kandara",
    location: {
      country: "Bali",
      region: "Ungasan"
    },
    thumbnail: "/destinations/kandara_thumb.jpg",
    banner: "https://storage.karmagroup.com/assets/karmagroup.com/2024/04/kc221-alluring-karma-kandara-1.jpg",
    description: "Discover the essence of Karma at Karma Kandara on Bali’s Bukit Peninsula, known globally as ‘Billionaire’s Row’. It’s the ultimate destination for intimate groups or larger gatherings of family and friends, drawn by Bali’s beauty and captivated by the spirit of Karma Kandara."
  },
  {
    slug: "karma-jimbaran",
    title: "Karma Jimbaran",
    location: {
      country: "Bali",
      region: "Jimbaran"
    },
    thumbnail: "/destinations/jimbaran_thumb.jpg",
    banner: "/destinations/jimbaran-fullhd.jpg",
    description: "Set within lush tropical gardens and only a few footsteps away from the fine white sands and calm waters of one of Bali’s most tranquil beaches, Karma Jimbaran offers just the right balance of hideaway and hospitality."
  },
  {
    slug: "karma-fushi",
    title: "Karma Fushi",
    location: {
      country: "Maldives",
      region: "North Male Atoll"
    },
    thumbnail: "https://storage.karmagroup.com/assets/karmagroup.com/2024/09/karma_fushi_gallery_6.jpg",
    banner: "https://storage.karmagroup.com/assets/karmagroup.com/2024/09/karma_fushi_gallery_6.jpg",
    description: "Set sail aboard Karma Fushi, a luxurious liveaboard yacht offering world-class amenities and unforgettable experiences across the Maldives. Cruise through crystal-clear waters, discover pristine beaches, and snorkel vibrant coral reefs in the stunning Baa and Malé Atolls. Whether you’re diving with manta rays or relaxing on deck with a cocktail, Karma Fushi delivers the perfect blend of barefoot luxury, curated adventure, and tropical serenity for every kind of traveller."
  },
  {
    slug: "karma-bavaria",
    title: "Karma Bavaria",
    location: {
      country: "Germany",
      region: "Schliersee"
    },
    thumbnail: "https://images.unsplash.com/photo-1534313314376-a72289b6181e?q=80&w=800&auto=format&fit=crop",
    banner: "https://images.unsplash.com/photo-1534313314376-a72289b6181e?q=80&w=1920&auto=format&fit=crop",
    description: "With its picture-perfect alpine setting, Karma Bavaria offers natural beauty, extraordinary experiences and much-needed breathing space all year round."
  },
  {
    slug: "karma-lake-of-menteith",
    title: "Karma Lake of Menteith",
    location: {
      country: "United Kingdom",
      region: "Stirling"
    },
    thumbnail: "https://storage.karmagroup.com/assets/karmagroup.com/2024/09/klom_header_3.jpg",
    banner: "https://storage.karmagroup.com/assets/karmagroup.com/2024/09/klom_header_3.jpg",
    description: "Karma Lake of Menteith is a stunning lakeside residence in Stirling, accommodating up to 42 guests. With spacious rooms, en-suites, bright conservatories, and a dining room with a wooden deck overlooking tranquil lake waters, the resort blends tranquillity, tradition, and luxury."
  },
  {
    slug: "karma-salford-hall",
    title: "Karma Salford Hall",
    location: {
      country: "United Kingdom",
      region: "The Vale of Evesham"
    },
    thumbnail: "https://storage.karmagroup.com/assets/karmagroup.com/Karma-Salford-Hall-Resort-Page/Gallery/Karma-Salford-Hall-Gallery-01.jpg",
    banner: "https://storage.karmagroup.com/assets/karmagroup.com/2022/11/krama-salford-hall-senior-citizen-banner-02.jpg",
    description: "Welcome to Karma Salford Hall – a historic country retreat dating back 700 years, situated in the Vale of Evesham neighbouring the English Cotswolds, one of the prettiest rural regions anywhere in the British Isles."
  },
  {
    slug: "karma-bayon",
    title: "Karma Bayon",
    location: {
      country: "Cambodia",
      region: "Siem Reap"
    },
    thumbnail: "https://storage.karmagroup.com/assets/karmagroup.com/2024/06/karma-bayon-gallery-section-image-01.jpg",
    banner: "https://storage.karmagroup.com/assets/karmagroup.com/2024/06/karma-bayon-gallery-section-image-04.jpg",
    description: "Karma Bayon, our Cambodia debut, is a tranquil oasis featuring a selection of beautifully appointed rooms, bar and restaurant, a Karma Spa and two pools."
  },
  {
    slug: "karma-minoan",
    title: "Karma Minoan",
    location: {
      country: "Greece",
      region: "Crete"
    },
    thumbnail: "https://storage.karmagroup.com/assets/karmagroup.com/Destinations/Karma-Retreats/Karma-Minoan-Crete/Gallery/Karma-Minoan-Crete-gallery-1.jpg",
    banner: "https://karmagroup.com/wp-content/gallery/fc0d2dca-karma-resort-minoan/80bd6458-karma-minoan-crete-min.jpg",
    description: "The resort’s 23 sea-facing rooms are a study in the iconic Greek island aesthetic. Whitewash walls, Aegean blue interior touches and, of course, unparalleled views of the sea as it’s built into the hill of Vathy, combine to produce spaces that are as relaxing as they are breath taking."
  },
  {
    slug: "karma-borgo-di-colleoli",
    title: "Karma Borgo di Colleoli",
    location: {
      country: "Italy",
      region: "Tuscany"
    },
    thumbnail: "https://storage.karmagroup.com/assets/karmagroup.com/Karma-Borgo-di-Colleoli--Resort-Page/Gallery/gallery-1.jpg",
    banner: "https://storage.karmagroup.com/assets/karmagroup.com/2021/05/7edbfccf-17.af6718c0-karma-tuscany-min.jpg",
    description: "Located in the heart of the Tuscan countryside, equidistant from the splendours of Florence and the historical oddity of Pisa and its leaning tower, Karma Borgo di Colleoli is a sprawling historic manor house which has received a new lease on life as an elegant and luxurious 5-star rated resort. "
  }
];

export function getDestinationBySlug(slug: string) {
  return DESTINATIONS.find((d) => d.slug === slug);
}