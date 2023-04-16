import Link from "next/link";

const Navbar = () => {
  return (
    <div className="">
      <div className="bg-white h-10">
        <div className="flex justify-center">
          <Link href="/" className="p-4 text-xl hover:text-slate-500">
            Home
          </Link>
          <Link href="/contact" className="p-4 text-xl ">
            contact
          </Link>
          <Link href="/about" className="p-4 text-xl">
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
