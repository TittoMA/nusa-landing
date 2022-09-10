import React from "react";
import FeatureCard from "./FeatureCard";
import nusaProductImg from "../assets/images/mockup-kemasan.png";
import blobImg from "../assets/images/blob.png";
import qrImg2 from "../assets/images/qr2.png";
import {
  PhotoIcon,
  SpeakerWaveIcon,
  ChatBubbleBottomCenterTextIcon,
  GiftIcon,
  QrCodeIcon,
} from "@heroicons/react/24/solid";
import { AnimationOnScroll } from "react-animation-on-scroll";

function FeaturesSection() {
  return (
    <section id="feature">
      <div className="bg-amber-300 px-[10%] py-16 relative z-10">
        <div className="flex flex-col-reverse gap-8 md:flex-row">
          <div className="hidden lg:basis-[30%] lg:block lg:shrink-0">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <div className="bg-white/60 backdrop-blur-sm px-14 py-5 shadow-xl rounded-xl">
                <img src={nusaProductImg} alt="Nusa_SMB" />
              </div>
            </AnimationOnScroll>
          </div>

          <div className="flex flex-col gap-8 items-start lg:ml-10">
            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className="flex gap-6 items-center w-full bg-white p-6 shadow-2xl rounded-xl z-10">
                <div className="bg-amber-700 p-2 rounded-full">
                  <GiftIcon className="h-10 w-10 text-yellow-100 inline" />
                </div>
                <h2 className="text-base md:text-lg font-medium">
                  Tampilan produk <br /> yang menarik.
                </h2>
              </div>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInUp">
              <div className="flex gap-6 items-center w-full bg-white p-6 shadow-2xl rounded-xl z-10">
                <div className="bg-amber-700 p-2 rounded-full">
                  <QrCodeIcon className="h-10 w-10 text-yellow-100 inline" />
                </div>
                <h2 className="text-base md:text-lg font-medium">
                  Kode QR yang terhubung <br />
                  ke website.
                </h2>
              </div>
            </AnimationOnScroll>
          </div>

          <div>
            <AnimationOnScroll animateIn="animate__fadeInRight">
              <h1 className="text-end text-4xl text-amber-900 font-extrabold">
                Fitur Unggulan <br /> Nusa Susun Menara Balok
              </h1>

              <hr className="w-40 mt-4 ml-auto border-4 border-yellow-100 rounded-lg" />
            </AnimationOnScroll>
          </div>
        </div>

        <img
          src={blobImg}
          className="w-96 absolute -left-20 bottom-0 -z-10 brightness-200"
          alt="prop"
        />
      </div>

      <div className="px-[10%] py-16">
        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <h1 className="text-amber-900 text-4xl font-extrabold">
            Integrasi dengan
            <br /> QR Code
          </h1>
          <hr className="w-20 mt-4 border-4 border-amber-900 rounded-lg" />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInLeft">
          <h1 className="hidden md:block text-lg font-medium mt-8">
            Permainan Nusa Susun Menara Balok <br /> terintegrasi dengan kode QR
            yang berisi:
          </h1>
        </AnimationOnScroll>

        <div className="flex flex-col-reverse gap-8 mt-4 md:gap-16 md:flex-row md:items-center">
          <div className="basis-2/5 space-y-6 my-auto">
            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <h1 className="block text-base text-center font-medium md:hidden">
                Permainan Nusa Susun Menara Balok terintegrasi dengan kode QR
                yang berisi:
              </h1>
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <FeatureCard
                icon={
                  <SpeakerWaveIcon className="h-10 w-10 text-yellow-100 inline" />
                }
                text={
                  <>
                    Penjelasan dalam bentuk
                    <br />
                    rekaman suara.
                  </>
                }
              />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <FeatureCard
                icon={
                  <PhotoIcon className="h-10 w-10 text-yellow-100 inline" />
                }
                text={
                  <>
                    Ilustrasi gambar dari
                    <br />
                    kebudayaan di Indonesia.
                  </>
                }
              />
            </AnimationOnScroll>

            <AnimationOnScroll animateIn="animate__fadeInLeft">
              <FeatureCard
                icon={
                  <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-yellow-100 inline" />
                }
                text={
                  <>
                    Narasi yang mendeskripsikan
                    <br />
                    kebudayaan di Indonesia.
                  </>
                }
              />
            </AnimationOnScroll>
          </div>

          <div className="grow">
            <AnimationOnScroll animateIn="animate__slideInRight">
              <img
                className="w-64 mx-auto md:w-96"
                src={qrImg2}
                alt="Nusa QR"
              />
            </AnimationOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
