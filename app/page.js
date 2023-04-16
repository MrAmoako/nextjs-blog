import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Hero from "./hero";
import Footer from "./footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Footer />
    </main>
  );
}
