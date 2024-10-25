import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import BoostText from "@/components/elements/animations/text/boost-text";
import Link from "next/link";

const services = [
  {
    title: "SMM Strategy",
    description: "Custom strategies tailored to your brand’s specific goals",
    image: "/images/social-media-1.jpg",
  },
  {
    title: "Content Creation",
    description: "Engaging and creative content designed to captivate your audience",
    image: "/images/social-media-2.jpg",
  },
  {
    title: "Ad Campaigns",
    description: "Targeted advertising solutions to boost reach and conversions",
    image: "/images/social-media-3.jpg",
  },
  {
    title: "Analytics & Reporting",
    description: "Detailed analytics to track performance and optimize strategies",
    image: "/images/social-media-4.jpg",
  },
  {
    title: "Brand Reputation",
    description: "Comprehensive strategies to protect and enhance your brand's image",
    image: "/images/social-media-5.jpg",
  },
];

const ConsultationServices = () => {
  return (
    <div className="bg-white text-gray-800">
      <main className="container mx-auto px-4 py-8">
        <h1 className="font-[family-name:var(--font-clash)] w-3/4 mobile:w-full text-[#333] font-bold text-7xl mobile:text-3xl">
          <p className="text-lg inline-block font-medium pr-5">
            Consultation Services
          </p>
          <BoostText
            text="Innovation Meets Expertise In Our Range Of Services"
            speed={0.4}
            boostedElement="lines"
            direction="up"
            strength={5}
          />
        </h1>

        <div className="relative w-full h-64 md:h-[50vh] mb-28 mobile:mb-14">
          <Image
            src="/images/social-media-7.jpg"
            alt="Person using smartphone"
            layout="fill"
            objectFit="cover"
            className="rounded-lg my-10 aspect-video"
          />
        </div>

        <div className="flex flex-col">
          {services.map((service, index) => (
            <Link
              key={index} href="/contact-us"
              target="_blank"
              className="flex items-center justify-between group relative hover:bg-[#eae8e4]/50 py-4 px-5 border-b"
            >
              <h3 className="text-3xl font-bold w-1/4 mobile:w-3/4">{service.title}</h3>
              <p className="text-gray-600 w-1/2 mobile:hidden">{service.description}</p>
              <ArrowUpRight className="text-gray-400 group-hover:text-gray-800 group-hover:bg-white h-8 w-8 border rounded-full flex items-center rotate-45 group-hover:rotate-0 transition-all justify-center p-2" />
              <div className="absolute right-[15%] top-0 w-48 h-32 mobile:h-20 mobile:w-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ConsultationServices;
