import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import FeaturesSection from "../components/FeaturesSection";
import ComparationSection from "../components/ComparationSection";
import ProductSection from "../components/ProductSection";

function MainPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <svg
        className="-mb-8 md:-mb-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fcd34d"
          fillOpacity="1"
          d="M0,96L48,101.3C96,107,192,117,288,138.7C384,160,480,192,576,176C672,160,768,96,864,101.3C960,107,1056,181,1152,192C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <FeaturesSection />

      <svg
        className="-mb-8 md:-mb-20 -scale-x-100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fcd34d"
          fillOpacity="1"
          d="M0,96L48,101.3C96,107,192,117,288,138.7C384,160,480,192,576,176C672,160,768,96,864,101.3C960,107,1056,181,1152,192C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <ComparationSection />
      <ProductSection />
    </>
  );
}

export default MainPage;