import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Components
 */
import BoostText from "@/components/elements/animations/text/boost-text";
import MainBtn from "@/components/elements/buttons/main-btn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * Icons
 */
import { FaRegCopy } from "react-icons/fa6";
import { PiTargetThin } from "react-icons/pi";
import { RiSeoLine } from "react-icons/ri";
import { BsEnvelopeCheck } from "react-icons/bs";
import { BsLayoutWtf } from "react-icons/bs";
import { IoBarChartOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs"; 


const showcase = [
  {
    title: "Campaign Launch",
    video: "/videos/showcase/case-1.mp4",
    description: "Developed a comprehensive social media campaign for a product launch.",
    tags: ["Campaign", "Social Media", "Launch"],
  },
  {
    title: "Influencer Collaboration",
    video: "/videos/showcase/case-2.webm",
    description: "Partnered with influencers to expand brand reach and engagement.",
    tags: ["Influencer", "Collaboration", "Engagement"],
  },
  {
    title: "Content Strategy",
    video: "/videos/showcase/case-3.mp4",
    description:
      "Created a year-long content calendar aligned with marketing goals.",
    tags: ["Content", "Strategy", "Planning"],
  },
];

const CaseStudyCard = ({ title, tags, image }) => {
  return (
    <div className="relative w-full flex flex-col gap-5 group">
      <Image
        src={image ? image : "/images/social-media-6.jpg"}
        alt="BMW X2 Car"
        width={400}
        height={500}
        className="object-cover rounded-xl w-full aspect-[4/5]"
      />
      <div className="flex flex-col">
        <h3 className="font-[family-name:var(--font-clash)] text-3xl font-medium text-gray-800 mb-1">
          <BoostText
            text={title}
            speed={0.4}
            boostedElement="chars"
            direction="down"
            strength={2}
          />
        </h3>
        <div className="border-t my-5" />
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            {
              tags?.map((tag, index) => (
                <span key={index} className="text-xs text-gray-500"> 
                  &middot; &nbsp; {tag} &nbsp;
                </span>
              ))
            }
          </p>
          <div className="bg-black dark:bg-white dark:text-black text-white h-8 w-8 p-3 mobile:h-6 mobile:w-6 mobile:p-3 rounded-full origin-left transition-all duration-300 inline-block ml-2 relative overflow-hidden">
            <BsArrowRight
              size={25}
              className="group-hover:translate-x-0 -translate-x-full absolute top-0 left-0 h-full w-full p-2 transition-transform"
            />
            <BsArrowRight
              size={25}
              className="group-hover:translate-x-full absolute top-0 left-0 h-full w-full p-2 transition-transform"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="max-w-5xl mx-auto mobile:px-5 py-14">
          <div className="w-full mx-auto my-10 flex flex-col gap-5 items-center">
            <h1 className="font-[family-name:var(--font-clash)] text-[#333] font-bold text-7xl mobile:text-3xl text-center">
              Social Media{" "}
              <BoostText
                text="Marketing Stories"
                speed={0.4}
                boostedElement="chars"
                direction="down"
                strength={2}
              />
            </h1>
            <p className="text-lg inline-block font-medium pr-5 text-center">
              Case Studies: Proven Results
            </p>
            <Link href="/contact-us">
              <MainBtn text="Get Started" />
            </Link>
          </div>
        </div>
        <div className="border-t w-full" />
      </div>
      <div className="py-24 px-5 mobile:py-10">
        <div className="container flex items-start mobile:flex-col mobile:gap-5 mx-auto">
          <div className="w-1/5 mobile:w-full">
            <p className="text-base mobile:text-lg">Popular Cases</p>
          </div>
          <div className="w-4/5 mobile:w-full">
            <Carousel>
              <CarouselContent>
                <CarouselItem className="md:basis-1/3 basis-[70%] pr-4">
                  <CaseStudyCard
                    image="/images/social-media-9.jpg"
                    title="Designed highly targeted and data-driven ads."
                    tags={[
                      'Audience', 'Targeting', 'Ads'
                    ]}
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/3 basis-[70%] pr-4">
                  <CaseStudyCard
                    image="/images/social-media-8.jpg"
                    title="Created viral content boosting brand visibility."
                    tags={[
                      'Viral', 'Campaign', 'Awareness'
                    ]}
                  />
                </CarouselItem> 
                <CarouselItem className="md:basis-1/3 basis-[70%] pr-4">
                  <CaseStudyCard
                    image="/images/social-media-6.jpg"
                    title="Used feedback to optimize campaign strategy."
                    tags={[
                      'Social Listening', 'Insights', 'Engagement'
                    ]}
                  />
                </CarouselItem> 
                <CarouselItem className="md:basis-1/3 basis-[70%]">
                  <CaseStudyCard
                    image="/images/social-media-4.jpg"
                    title="Collaborated with influencers to boost reach."
                    tags={[
                      'Influencers', 'Awareness', 'Trust'
                    ]}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-10 pb-24 mobile:px-5">
        <div className="h-[1px] bg-black dark:bg-white w-full opacity-10" />
        <span className="text-xl">Showcase</span>
        <h2 className="text-7xl mobile:w-full mobile:text-5xl font-medium text-left font-[family-name:var(--font-clash)] w-3/4">
          Explore More Cases
        </h2>
        <p className="text-base opacity-70 text-left w-3/4">
          Real-World Wins in Social Media Marketing: Client Success
        </p>
        <div className="grid grid-cols-3 gap-7 mobile:grid-cols-1">
          {showcase.map((item, index) => (
            <div key={index} className="relative">
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl aspect-[5/4] object-cover w-full"
              />
              <div className="pt-7 bottom-0 left-0 w-full bg-background/50 rounded-b-xl space-y-4">
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p>{item.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm border text-black dark:text-white px-2 py-1 rounded-full whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
