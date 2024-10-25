import React from "react";
import EmailForm from "@/components/elements/email-form";
import Image from "next/image";

const Hero1 = () => {
  return (
    <div className="relative min-h-[130vh] pb-20">
      <div className="absolute left-0 -z-10 -top-[5%] w-full overflow-x-hidden overflow-y-visible hidden dark:block">
        <Image
          src="/images/main-bg.jpeg"
          width={1920}
          height={1080}
          alt="Gradient"
          className="min-h-full min-w-[170%]"
        />
      </div>
      <div className="container h-full relative z-[3] mx-auto flex pt-40 flex-col gap-10 items-center justify-center">
        <h1 className="font-medium text-7xl text-center font-[family-name:var(--font-clash)] max-w-5xl">
          The only social media marketing platform you&apos;ll ever need
        </h1>
        <p className="font-bold text-xl max-w-2xl text-center">
          Bring your brand to life with bespoke website that boosts engagement
          and brings a return on creativity.
        </p>
        {/* Form */}
        <EmailForm />
        {/* Preview video */}
        <div className="border border-black/10 dark:border-white/30 rounded-2xl p-5">
          <div className="relative">
            <div className="absolute z-0 h-full w-full bg-black rounded-2xl" />
            <video
              src="/videos/top-banner.mp4"
              autoPlay
              loop
              muted
              className="rounded-xl opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
