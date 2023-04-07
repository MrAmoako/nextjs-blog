import React from "react";
import Link from "next/link";

export default function About() {
  return (
    <main className="text-center">
      <h1 className=" text-slate-800 font-bold text-4xl">More about me</h1>
      <Link href="/">Link to Homepage</Link>
    </main>
  );
}
