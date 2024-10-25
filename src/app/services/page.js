import React from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Components
 */
import BoostText from "@/components/elements/animations/text/boost-text";
import SecondaryButton from "@/components/elements/buttons/secondary-btn";
import MainBtn from "@/components/elements/buttons/main-btn";

/**
 * Icons
 */
import { FaRegCopy } from "react-icons/fa6";
import { PiTargetThin } from "react-icons/pi";
import { RiSeoLine } from "react-icons/ri";
import { BsEnvelopeCheck } from "react-icons/bs";
import { BsLayoutWtf } from "react-icons/bs";
import { IoBarChartOutline } from "react-icons/io5";

const services_list = [
    {
        id: 0,
        title: "SEO",
        description: "Our SEO service helps you rank higher on search engines and get more organic traffic. We help you optimize your website and content to improve your search engine ranking.",
        icon: <RiSeoLine color="#fff" size={24} />
    },
    {
        id: 1,
        title: "Targeted Ads",
        description: "Our targeted ads service helps you reach your target audience and drive more traffic to your website. We help you create and optimize ads that convert.",
        icon: <PiTargetThin color="#fff" size={24} />
    },
    {
        id: 2,
        title: "Content Creation",
        description: "Our content creation service helps you create high-quality content that engages your audience and drives traffic to your website. We help you create blog posts, social media posts, and more.",
        icon: <FaRegCopy color="#fff" size={24} />
    },
    {
        id: 3,
        title: "Email Marketing",
        description: "Our email marketing service helps you build and maintain relationships with your audience. We help you create and send emails that drive traffic to your website and convert leads into customers.",
        icon: <BsEnvelopeCheck color="#fff" size={24} />
    },
    {
        id: 4,
        title: "Web Design",
        description: "Our web design service helps you create a professional and user-friendly website that drives traffic and converts leads into customers. We help you design and develop a website that meets your business goals.",
        icon: <BsLayoutWtf color="#fff" size={24} />
    },
    {
        id: 5,
        title: "Analytics",
        description: "Our analytics service helps you track and measure the performance of your digital marketing campaigns. We help you analyze data and make informed decisions to improve your results.",
        icon: <IoBarChartOutline color="#fff" size={24} />
    },
];


const AboutPage = () => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="max-w-5xl mx-auto mobile:px-5 py-24 mobile:py-5">
          <div className="w-full mx-auto my-10 block">
            <h1 className="font-[family-name:var(--font-clash)] text-[#333] font-bold text-7xl mobile:text-3xl">
              <p className="text-lg inline-block font-medium pr-5">
                How we can help you
              </p>
              Boost your social media presence with{" "}
              <BoostText
                text="our services"
                speed={0.4}
                boostedElement="chars"
                direction="down"
                strength={2}
              />
            </h1>
          </div>
        </div>
        <div className="border-t w-full" />
      </div>
      <div className="py-24 bg-[#eae8e4]">
        <div className="container mx-auto flex flex-col gap-6 mobile:px-5">
            <h2 className="font-[family-name:var(--font-clash)] text-6xl font-semibold mobile:text-4xl">Our Service</h2>
            <div className="flex items-center justify-between w-full mobile:flex-col mobile:items-start mobile:gap-4">
                <p>Our digital marketing service boosts your online presence with SEO, social media, and targeted ads.</p>
                <SecondaryButton text="Get in touch" className="text-xl" link="/contact" />
            </div>
            <div className="border-t border-black/10 w-full my-6" />
            <div className="grid grid-cols-3 mobile:grid-cols-1 gap-5">
                {services_list.map((service) => (
                    <div key={service.id} className="flex flex-col gap-4 p-7 bg-white rounded-2xl">
                        <div className="bg-[#333] h-12 w-12 flex items-center justify-center rounded-lg">
                            {service.icon}
                        </div>
                        <h3 className="text-3xl font-medium font-[family-name:var(--font-clash)]">
                            {service.title}
                        </h3>
                        <div className="space-y-2">
                            <p className="text-base">
                                {service.description}
                            </p>
                        </div>
                        <Link href="/contact-us">
                          <MainBtn text="Get started" className="mt-5" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
