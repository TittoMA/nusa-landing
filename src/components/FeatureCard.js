import React from "react";

function FeatureCard({ icon, text }) {
  return (
    <div className="pt-6">
      <div className="flex flex-col gap-2 items-center bg-white px-6 pb-6 rounded-xl shadow-xl">
        <div className="bg-amber-700 -mt-6 p-4 border-4 border-[#f2f2f4] rounded-full">
          {icon}
        </div>
        <h2 className="text-base text-center font-medium md:text-lg">{text}</h2>
      </div>
    </div>
  );
}

export default FeatureCard;
