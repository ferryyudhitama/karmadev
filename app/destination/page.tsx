
import Link from "next/link";
type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;
  return (
    <main style={{ padding: 24 }}>
      Destinations:
      <ul>
        <li><Link href="/destination/karma-kandara/" className="text-green-400">Karma Kandara</Link></li>
        <li><Link href="/destination/karma-jimbaran/" className="text-green-400">Karma Jimbaran</Link></li>
      </ul>
    </main>
  );
}





