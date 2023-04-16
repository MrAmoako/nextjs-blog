import { GrTwitter } from "react-icons/Gr";
import { RiFacebookCircleFill } from "react-icons/Ri";
import { GrGithub } from "react-icons/Gr";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-60 bg-slate-800 mt-[-49px]">
      <div className="flex justify-center text-5xl text-white pt-20">
        <Link href="/">
          <GrTwitter />
        </Link>
        <Link href="/">
          <RiFacebookCircleFill />
        </Link>
        <Link href="https://github.com/MrAmoako">
          <GrGithub />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
