import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function NewsSection() {
  return (
    <section className="px-[10%] py-16">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <h1 className="text-center text-amber-900 text-4xl font-extrabold">
          Liputan Berita Terkait Nusa SMB
        </h1>
        <hr className="w-40 mx-auto mt-4 border-4 border-amber-900 rounded-lg" />
      </AnimationOnScroll>

      <div className="mt-8 flex flex-col md:flex-row gap-8">
        <div className="basis-1/2">
          <AnimationOnScroll animateIn="animate__slideInLeft">
            <div className="flex flex-col bg-white rounded-lg border shadow-md">
              <div className="relative overflow-hidden w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  width="560"
                  height="315"
                  src="https://cdn01.metrotvnews.com/videos/2022/09/08/kqYCEnMo/v_6319af7472ac0_0.mp4"
                  title="Metro TV News"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowFullScreen"
                  sandbox="true"
                ></iframe>
              </div>

              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  MetroTV News
                </h5>

                <a
                  href="https://www.metrotvnews.com/play/kqYCEnMo-5-mahasiswa-um-kenalkan-budaya-nusantara-dengan-permainan-nusa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-end inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Lihat selengkapnya
                </a>
              </div>
            </div>
          </AnimationOnScroll>
        </div>

        <div className="basis-1/2">
          <AnimationOnScroll animateIn="animate__slideInRight">
            <div className="flex flex-col bg-white rounded-lg border shadow-md">
              <div className="relative overflow-hidden w-full pt-[56.25%]">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/ztQELm4czAA"
                  title="Tribunnews"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="allowFullScreen"
                ></iframe>
              </div>
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  Tribunnews
                </h5>
                <a
                  href="https://www.youtube.com/watch?v=ztQELm4czAA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-end inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-emerald-700 rounded-lg hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  Lihat selengkapnya
                </a>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
}

export default NewsSection;
