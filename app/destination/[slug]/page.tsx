import { getDestinationBySlug } from "@/app/src/features/destinations/data";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const data = getDestinationBySlug(slug);

  if (!data) notFound();

  return (
    <main>
      <h1>Destination: {data.title}</h1>
      <p>Description:{data.description}</p>
    </main>
  );
}





