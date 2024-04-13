import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 bg-white z-10">
      <div className="container mx-auto py-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={"/assets/logo.png"}
            height={50}
            width={50}
            alt="logo"
            className="w-8"
          />
          <span className="text-2xl font-bold text-indigo-900">Portfolio.</span>
        </div>
        <ul className="hidden md:flex space-x-10 text-gray-600 font-bold text-sm uppercase">
          <li className="hover:text-gray-500 transition-colors">home</li>
          <li className="hover:text-gray-500 transition-colors">about</li>
          <li className="hover:text-gray-500 transition-colors">services</li>
          <li className="hover:text-gray-500 transition-colors">projects</li>
          <li className="hover:text-gray-500 transition-colors">contact</li>
        </ul>
        <Image
          src={"/assets/moon.png"}
          width={20}
          height={20}
          alt="mode"
          className="hidden md:block cursor-pointer"
        />
        <div className="space-y-1 md:hidden cursor-pointer">
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
