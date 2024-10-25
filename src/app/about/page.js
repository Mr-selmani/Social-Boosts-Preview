import React from "react";
import Image from "next/image";

/**
 * Components
 */
import BoostText    from "@/components/elements/animations/text/boost-text";
import ScrollMarkee from "@/components/elements/animations/text/scroll-markee";
import MainBtn from "@/components/elements/buttons/main-btn";
import Particles from "@/components/ui/particles";
import SecondaryButton from "@/components/elements/buttons/secondary-btn";

const AboutPage = () => {

  return (
    <div>
      <div className="flex flex-col">
        <div className="container mx-auto mobile:px-5">
          <div className="w-full mx-auto my-10 flex flex-col gap-5">
            <p className="text-lg">
              Who are we? Social Boost!
            </p>
            <h1 className="font-[family-name:var(--font-clash)] text-[#333] font-bold text-7xl mobile:text-3xl">Helping brands focus on creating engaging social media content that drives results, {" "}
               <BoostText 
                text=" we are Social Boost" 
                className='text-black'
                speed={.4} boostedElement="chars" direction="left" strength={12}
              />
            </h1>
          </div>
        </div>
        <ScrollMarkee 
          text="Scroll down to learn more"
        />
        <div className="border relative w-full">
          <div className="max-w-3xl flex flex-col gap-7 mx-auto min-h-screen justify-center relative z-10 mobile:items-center">
            <div className="text-5xl leading-snug mobile:text-center mobile:text-lg mobile:w-2/3">
              Team up with agile, always-improving, ever-evolving teams where everyone belongs.
            </div>
            <MainBtn
              text="Learn More"
            />
          </div>
          <Particles
            className="absolute h-screen top-0 left-0 z-0"
            quantity={500}
            ease={80}
            color="black"
            refresh
          />
          <div className="h-full w-full absolute left-0 top-0">
            <Image
              src="/images/people/user-1.jpg"
              width={80}
              height={80}
              alt="Team member 1"
              className="object-cover h-20 w-20 rounded-full absolute top-[25%] left-[5%] mobile:top-[5%] mobile:h-14 mobile:w-14"
            />
            <Image
              src="/images/people/user-2.jpg"
              width={100}
              height={100}
              alt="Team member 2"
              className="object-cover h-24 w-24 rounded-full absolute top-[40%] left-[10%] mobile:top-[15%] mobile:left-[35%] mobile:h-16 mobile:w-16"
            />
            <Image
              src="/images/people/user-3.jpg"
              width={90}
              height={90}
              alt="Team member 3"
              className="object-cover h-24 w-24 rounded-full absolute top-[30%] right-[5%] mobile:top-[10%] mobile:h-16 mobile:w-16"
            />
            <Image
              src="/images/people/user-4.jpg"
              width={110}
              height={110}
              alt="Team member 4"
              className="object-cover h-28 w-28 rounded-full absolute bottom-[10%] right-[10%] mobile:bottom-[5%] mobile:h-16 mobile:w-16"
            />
            <Image
              src="/images/people/user-5.jpg"
              width={120}
              height={120}
              alt="Team member 5"
              className="object-cover h-32 w-32 rounded-full absolute bottom-[5%] left-[15%] mobile:h-16 mobile:w-16"
            />
            <Image
              src="/images/people/user-6.jpg"
              width={70}
              height={70}
              alt="Team member 6"
              className="object-cover h-20 w-20 rounded-full absolute bottom-[35%] right-[7%] mobile:h-16 mobile:w-16 mobile:bottom-[10%] mobile:right-[35%]"
            />
          </div>
        </div>
      <div className="container flex md:space-x-10 mx-auto px-5 py-20 mobile:flex-col mobile:gap-10">
        <div className="w-1/2 mobile:w-full flex justify-center flex-col gap-5">
          <h2 className="text-5xl mobile:text-4xl font-medium font-[family-name:var(--font-clash)]">
            What we do?
          </h2>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="flex items-start gap-5 mobile:flex-col justify">
            <MainBtn text="View Services" />
            <SecondaryButton text="Contact us" className="text-xl mobile:text-sm" />
          </div>
        </div>
        <div className="w-1/2 mobile:w-full flex gap-5">
          <Image
            src="/images/social-media-5.jpg"
            width={640}
            height={979}
            alt="Social Media Marketing"
            className="rounded-xl w-full aspect-video object-cover"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;
