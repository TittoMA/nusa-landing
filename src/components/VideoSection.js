import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

function VideoSection() {
  return (
    <section className="bg-amber-300 px-[10%] py-16">
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <h1 className="text-center text-amber-900 text-4xl font-extrabold">
          Video Produk Nusa SMB
        </h1>
        <hr className="w-40 mt-4 mx-auto border-4 border-yellow-100 rounded-lg" />
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div className="md:mx-10 mt-8">
          <div className="relative overflow-hidden w-full pt-[56.25%]">
            <iframe
              className="absolute inset-0 w-full h-full"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZcJaYdttIX4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen="allowFullScreen"
            ></iframe>
          </div>
        </div>
      </AnimationOnScroll>
    </section>
  );
}

export default VideoSection;
