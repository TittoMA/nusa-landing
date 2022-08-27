import React from "react";
import logo from "../assets/images/nusa-logo.png";
import facebookIcon from "../assets/images/facebook.svg";
import twitterIcon from "../assets/images/twitter.svg";
import instagramIcon from "../assets/images/instagram.svg";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

function Footer() {
  return (
    <footer>
      <div className="flex flex-col gap-8 bg-amber-800 px-[10%] py-10 text-white md:flex-row md:gap-10 lg:gap-32">
        <div className="basis-1/4">
          <img className="w-44 " src={logo} alt="Nusa_logo" />
          <p className="text-sm mt-4">
            Media Pembelajaran Siswa Sekolah Dasar.
          </p>
        </div>

        <div>
          <h1 className="text-yellow-200 text-lg font-bold mb-2">Navigasi</h1>
          <ul className="space-y-1">
            <li>
              <a
                className="text-sm hover:border-b-2 hover:border-yellow-300"
                href="#about"
              >
                Tentang
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:border-b-2 hover:border-yellow-300"
                href="#feature"
              >
                Fitur
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:border-b-2 hover:border-yellow-300"
                href="#comparation"
              >
                Keunggulan
              </a>
            </li>
            <li>
              <a
                className="text-sm hover:border-b-2 hover:border-yellow-300"
                href="#product"
              >
                Pesan
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 className="text-yellow-200 text-lg font-bold mb-2">
            Media Sosial
          </h1>

          <div className="flex flex-wrap gap-3">
            <a href="#">
              <img className="w-8 invert" src={facebookIcon} alt="facebook" />
            </a>
            <a href="#">
              <img className="w-8 invert" src={twitterIcon} alt="twitter" />
            </a>
            <a href="#">
              <img className="w-8 invert" src={instagramIcon} alt="instagram" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-yellow-200 text-lg font-bold mb-2">
            Kontak Kami
          </h1>
          <div className="flex">
            <MapPinIcon className="h-5 w-5 text-neutral-50 inline" />
            <h1 className="ml-4 text-sm">Kota Malang</h1>
          </div>
          <div className="flex">
            <EnvelopeIcon className="h-5 w-5 text-neutral-50 inline" />
            <h1 className="ml-4 text-sm">nusasusun@nusa.com</h1>
          </div>

          <div className="flex">
            <PhoneIcon className="h-5 w-5 text-neutral-50 inline" />
            <h1 className="ml-4 text-sm">+62 812 345 678</h1>
          </div>
        </div>
      </div>

      <div className="bg-amber-900 px-[10%] py-3 text-white">
        <p className="text-yellow-200 ">
          &copy; 2022 <span className="font-bold">Nusa SMB</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
