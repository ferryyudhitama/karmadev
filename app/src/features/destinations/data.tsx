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
  }
];

export function getDestinationBySlug(slug: string) {
  return DESTINATIONS.find((d) => d.slug === slug);
}