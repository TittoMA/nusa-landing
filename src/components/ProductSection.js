import React from "react";
import { Link } from "react-router-dom";
import nusaProductImg from "../assets/images/mockup-kemasan.png";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

function ProductSection() {
  return (
    <section id="product" className="px-[10%] py-16 ">
      <h1 className="text-yellow-900 text-4xl font-extrabold">
        Beli Nusa Susun Menara Balok
      </h1>
      <hr className="w-32 mt-4 border-4 border-yellow-900 rounded-lg" />

      <div className="mt-12">
        <div className="w-full rounded-xl bg-white shadow-lg p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
          <div className="md:flex items-center -mx-10">
            <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0 md:px-4 lg:px-10">
              <div className="relative">
                <img
                  src={nusaProductImg}
                  className="mx-auto w-1/2 relative z-10"
                  alt=""
                />
                <div className="bg-yellow-200 rounded-xl rotate-12 absolute inset-10 z-0"></div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl absolute top-10 bottom-10 left-10 right-10 z-0"></div>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-10">
              <div className="mb-10">
                <h1 className="font-bold uppercase text-2xl mb-5">
                  Nusa Susun <br />
                  Menara Balok
                </h1>
                <p className="text-sm">
                  Nusa Susun Menara Balok merupakan mainan edukatif berbentuk
                  balok-balok yang disusun menyerupai bangunan menara serta
                  sebagai media Pembelajaran Siswa Sekolah Dasar Sebagai Upaya
                  Pengenalan Budaya di Indonesia.
                </p>
              </div>
              <div>
                <div className="align-bottom mr-5">
                  <span className="text-2xl leading-none align-baseline">
                    Rp
                  </span>
                  <span className="font-bold text-5xl leading-none align-baseline">
                    75
                  </span>
                  <span className="text-2xl leading-none align-baseline">
                    .000
                  </span>
                </div>
                <div className="mt-4">
                  <Link
                    to="/beli"
                    className="inline-block cursor-pointer bg-green-500 px-4 py-3 opacity-75 shadow-lg shadow-green-500/50 text-white font-semibold rounded-full group hover:bg-green-300 hover:text-green-900 hover:scale-105 transition-transform"
                  >
                    <ShoppingBagIcon className="h-6 w-6 mr-2 text-white inline group-hover:text-green-900" />
                    Beli Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
