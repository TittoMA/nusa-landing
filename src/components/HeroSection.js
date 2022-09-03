import React from "react";
import nusaMockup from "../assets/images/mockup-kemasan.png";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { HashLink } from "react-router-hash-link";

function HeroSection() {
  return (
    <div className="md:flex md:gap-10 px-[10%] py-16 bg-gradient-to-r from-yellow-200 to-white">
      <div className="flex flex-col justify-center items-start md:basis-3/5 lg:basis-2/5">
        <h1 className="text-yellow-800 mb-4 text-5xl font-extrabold">
          Nusa <br /> Susun Menara Balok
        </h1>
        <h2 className="mb-8 text-lg">
          Permainan Media Pembelajaran Siswa Sekolah Dasar Sebagai Upaya
          Pengenalan Budaya di Indonesia.
        </h2>
        <HashLink
          to="#product"
          className="bg-green-500 opacity-75 px-8 py-4 text-white font-bold rounded-full shadow-lg shadow-green-800/25 group hover:bg-green-300 hover:text-green-900 hover:scale-105 transition-transform"
        >
          <ShoppingBagIcon
            className="h-6 w-6 mr-2 text-white inline
          group-hover:text-green-900"
          />
          Beli Sekarang
        </HashLink>
      </div>

      <div className="mt-16 flex grow justify-center items-center relative z-10 md:mt-0">
        <div className="flex relative before:block before:bg-yellow-300 before:rounded-2xl before:absolute before:inset-0 before:-rotate-12 before:z-[-1] before:hover:rotate-[16deg] before:transition-transform">
          <div className="backdrop-blur-sm rounded-2xl bg-yellow-200/75 -lg px-20 py-10 shadow-xl hover:rotate-2 transition-transform">
            <img
              className="w-64 m-0"
              src={nusaMockup}
              alt="Nusa_Product_Mockup"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
