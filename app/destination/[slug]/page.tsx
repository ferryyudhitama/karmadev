import { getDestinationBySlug } from "@/app/src/features/destinations/data";
import { notFound } from "next/navigation";
import BannerDestinations from "@/app/src/components/BannerDestinations";
import Accommodation from "@/app/src/components/Accommodation";


type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) notFound();

  return (
    <main className="bg-black">
      <BannerDestinations destination={destination}/>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-4xl pt-20 pb-30">
        <div className="flex flex-col items-center text-center space-y-8">
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-[3rem] leading-[1.1] font-roxborough text-karma-grey font-normal opacity-95">
              {destination.titleContent}
            </h2>
            
            {/* Descriptive Text */}
            <p className="text-luxury-gray text-sm md:text-base leading-relaxed max-w-3xl font-basis font-light tracking-wide text-karma-grey">
                {destination.description}          
            </p>
        </div>
    </div>

    <Accommodation accommodation={destination.accommodation}/>


    </main>
  );
}





