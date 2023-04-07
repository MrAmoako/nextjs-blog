import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Hero from "./hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="h-screen bg-slate-800 mt-[-49px]">
        <h1 className="text-white font-bold text-4xl float-right p-10">
          About me
        </h1>
      </div>
    </main>
  );
}
