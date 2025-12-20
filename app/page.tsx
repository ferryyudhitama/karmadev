import { div } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="wrapper">
      Home Page <br />
      <Link href="/destination" className="text-green-400">Destination</Link>
    </div>
    
  );
}
