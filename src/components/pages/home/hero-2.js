import React from "react";
import Image from "next/image";
import MainBtn from "@/components/elements/buttons/main-btn";
import BoostText from "@/components/elements/animations/text/boost-text";

const Hero2 = () => {
  return (
    <div className="relative py-52 mobile:py-24">
      <div className="container h-full relative z-[3] mx-auto flex flex-col gap-10 items-center justify-center"> 
        <BoostText text="Boost Your Social Media Presence with Expert Marketing Solutions" speed={0.4} boostedElement="words" direction="up" strength={5} className="font-medium text-7xl mobile:text-4xl mobile:w-3/4 text-center font-[family-name:var(--font-clash)] container text-white" />
        <p className="font-bold text-xl max-w-4xl mobile:text-sm mobile:px-7 text-center text-white">
          Transform your brand&apos;s online presence with tailored social media strategies and expert consulting services designed to drive growth and engagement.
        </p>
        <MainBtn text="Get Started" link="/services" light={true} />
      </div>
      {/* Preview video */}
      <div className="absolute top-0 left-0 h-full w-full rounded-2xl p-5">
        <div className="relative h-full w-full">
          <div className="absolute z-0 h-full w-full bg-black rounded-2xl" />
          <video
            src="/videos/top-banner.mp4"
            autoPlay
            loop
            muted
            className="h-full w-full object-cover rounded-xl opacity-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero2;
