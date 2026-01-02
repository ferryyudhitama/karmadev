import Link from "next/link";
import Hero from '../src/components/Hero';
import FilterDestination from '../src/components/FilterDestination';
import Image from "next/image";


type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;



  return (
    <main className="bg-black">
      <Hero />

      <section className="relative w-full bg-luxury-black py-24 md:py-32 overflow-hidden flex items-center justify-center">
        
        {/* 
          Left Floating Image 
          Hidden on mobile, appears on larger screens.
          Positioned absolutely to the left edge.
        */}
        <div className="hidden lg:block absolute left-[-110px] top-1/3 -translate-y-1/2 w-[280px] h-[200px] xl:w-[350px] xl:h-[240px] z-0 opacity-90 transition-opacity duration-700 hover:opacity-100">
        <Image
            src="/destinations/bg-1.png"
            alt="Karma Group"
            fill
              className="object-cover  rounded-2xl"
              priority
          />
        </div>

        {/* 
          Right Floating Image 
          Hidden on mobile, appears on larger screens.
          Positioned absolutely to the right edge.
        */}
        <div className="hidden lg:block absolute right-[-110px] top-2/3 -translate-y-1/2 w-[280px] h-[200px] xl:w-[350px] xl:h-[240px] z-0 opacity-90 transition-opacity duration-700 hover:opacity-100">
          <Image
            src="/destinations/bg-2.png"
            alt="Karma Group"
              fill
              className="object-cover rounded-2xl"
              priority
          />
        </div>

        {/* Central Content Container */}
        <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl">
          <div className="flex flex-col items-center text-center space-y-8">
            
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-roxborough text-karma-grey font-normal opacity-95">
              Discover curated Karma Group resorts in the world’s best destinations with Karma Club
            </h2>

            {/* Divider / Decoration (Optional based on typical luxury designs, keeping it minimal here) */}
            
            {/* Descriptive Text */}
            <p className="text-luxury-gray text-sm md:text-base leading-relaxed max-w-2xl font-basis font-light tracking-wide text-karma-grey">
              From the magical island of Bali to the spectacular Bavarian Alps, Tuscany’s Renaissance treasures to Goa & Kerala’s palm fringed shores, the Cerulean shores of Crete to the medieval citadel of Carcassonne, England’s idyllic Cotswolds to Vietnam’s cultural heartlands and the tropical island of Phuket to the wilds of Scotland and the vivid colors of Rajasthan – Karma Club is your gateway to the world’s most desirable destinations, which you’ll experience in style through our collection of global resorts.
            </p>

            {/* Mobile Only Images (Stacked below text for mobile users) */}
            <div className="flex lg:hidden flex-row gap-4 mt-8 w-full overflow-x-auto pb-4 snap-x">
              <div className="min-w-[80%] md:min-w-[50%] snap-center">
                  <img 
                    src="https://picsum.photos/seed/poolside/600/400" 
                    alt="Poolside Resort View" 
                    className="w-full h-48 object-cover rounded-2xl shadow-lg brightness-90"
                  />
              </div>
              <div className="min-w-[80%] md:min-w-[50%] snap-center">
                  <img 
                    src="https://picsum.photos/seed/villa/600/400" 
                    alt="Luxury Villa View" 
                    className="w-full h-48 object-cover rounded-2xl shadow-lg brightness-90"
                  />
              </div>
            </div>

          </div>
        </div>
      </section>

      <FilterDestination />

   

    </main>
  );
}





