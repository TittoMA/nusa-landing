import React from "react";
import budayaImg from "../assets/images/ragambudaya.png";
import { AnimationOnScroll } from "react-animation-on-scroll";

function AboutSection() {
  return (
    <section id="about" className="flex flex-col px-[10%] py-16">
      <h1 className="mb-12 text-amber-900 text-center text-4xl font-extrabold">
        Tentang <br />
        Nusa Susun Menara Balok
      </h1>

      <AnimationOnScroll animateIn="animate__fadeInLeft">
        <p className="bg-yellow-200 p-10 rounded-xl shadow-lg max-w-lg mx-auto text-yellow-900 text-center text-base font-medium md:text-lg">
          Nusa Susun Menara Balok merupakan mainan edukatif berbentuk
          balok-balok yang disusun menyerupai bangunan menara.
        </p>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration={2} animateOnce>
        <img className="my-12 md:p-6" src={budayaImg} alt="" />
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" duration={2}>
        <h1 className="text-amber-900 text-center tracking-wide text-xl font-semibold md:text-2xl">
          Beragam Kebudayaan, Beragam Senyuman.
        </h1>
      </AnimationOnScroll>
    </section>
  );
}

export default AboutSection;
