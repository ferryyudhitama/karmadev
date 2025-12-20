// app/destination/[slug]/page.tsx
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  return (
    <main style={{ padding: 24 }}>
      <h1>Destination: {slug}</h1>
    </main>
  );
}





