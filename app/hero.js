import Link from "next/link";
import "./hero.css";

const Hero = () => {
  return (
    <main className=" h-screen flex justify-center ">
      <div className="pt-44">
        <h6 className="text-slate-800 text-2xl ">Hello</h6>
        <h1 className="text-slate-800 font-bold text-8xl">I'm Jaden</h1>
        <h5 className="text-slate-800 text-2xl ">
          I'am a web developer and designer
        </h5>
        <br></br>
        <Link
          href="/about"
          className="border-slate-800 bg-slate-800 p-3 text-white hover:p-4 hover:bg-slate-700 hover:border-slate-700 transition-transform: duration-200"
        >
          More about me
        </Link>
      </div>
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </main>
  );
};

export default Hero;
