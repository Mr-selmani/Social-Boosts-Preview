import Image from "next/image";
import Link from 'next/link';

/**
 * Icons
 */
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { GoArrowRight } from "react-icons/go";

/**
 * Utils
 */
import { cn } from "@/lib/utils";

/**
 * Components
 */
import MainBtn from "@/components/elements/buttons/main-btn";
import SecondaryButton from "@/components/elements/buttons/secondary-btn";

/**
 * Sections
 */
import Hero2 from "@/components/pages/home/hero-2";

const CheckListItem = ({text}) => {
  return (
    <div className="flex items-center gap-2 mobile:text-xs text-sm">
      <IoMdCheckmarkCircleOutline className="text-green-500" />
      <p>{text}</p>
    </div>
  );
};
const BentoBox = ({ stretch, children, className, id }) => {
  return (
    <div
      className={cn(
        `flex bg-background/50 rounded-xl row-span-2 relative w-full shadow-2xl mobile:shadow-lg mobile:shadow-[#ffffff0e] shadow-[#ffffff07] md:hover:shadow-[#ffffff0e] border ${className}`,
        stretch ? "row-span-2" : "row-span-1"
      )}
      id={id ? id : null}
    > 
      <div className={cn("z-10 relative p-8 flex flex-col w-full", stretch ? 'gap-10' : 'gap-0')}>
        {children}
      </div>
    </div>
  );
};
const ArrowHoverEffect = ({title, image, last, link}) => {
  return (
    <Link href={link ? link : '#'}>
      <div className="flex items-center gap-5 group py-10 mobile:py-5">
        <h3 className="text-5xl mobile:text-2xl font-semibold">
          {title}
        </h3>
        <div className="h-10 w-10 bg-black rounded-full dark:bg-white transition-all opacity-0 group-hover:opacity-100 duration-500 translate-x-5 group-hover:translate-x-0 flex items-center justify-center">
          <GoArrowRight
            size={20}
            className="text-white dark:text-black transition-all delay-300 opacity-0 group-hover:opacity-100 -translate-x-5 group-hover:translate-x-0"
          />
        </div>
      </div>
      {!last && (
        <div className="h-[1px] bg-[#26076e] dark:bg-white w-full opacity-20" />
      )}
    </Link>
  );
};
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
export default function Home() {
  return (
    <div className="w-full">
      <Hero2 />
      <div className="container flex mobile:flex-col mobile:gap-5 mx-auto px-5 py-20">
        <div className="w-1/2 mobile:w-full flex flex-col gap-5">
          <h2 className="text-5xl mobile:text-4xl font-medium font-[family-name:var(--font-clash)]">
            Social Media Marketing
          </h2>
          <p>
            Ignite your brand with a tailored social media strategy that enhances engagement and maximizes your return on creativity.
          </p>
          <div className="my-5 space-y-5">
            <h3 className="text-2xl font-semibold">
              Boost Your Social Media Presence
            </h3>
            <div className="grid grid-cols-2 gap-5">
              <CheckListItem text="Increase visibility and engagement." />
              <CheckListItem text="Foster community interactions." />
              <CheckListItem text="Drive targeted traffic to your site." />
              <CheckListItem text="Achieve measurable business outcomes." />
            </div>
          </div>
          <Link href="/services">
            <MainBtn text="Our services" />
          </Link>
        </div>
        <div className="w-1/2 mobile:w-full flex space-x-5">
          <div className="w-1/2">
            <Image
              src="/images/social-media-1.jpg"
              width={640}
              height={979}
              alt="Social Media Marketing"
              className="rounded-xl aspect-[9/12] object-cover w-full"
            />
          </div>
          <div className="w-1/2">
            <Image
              src="/images/social-media-2.jpg"
              width={640}
              height={979}
              alt="Social Media Marketing"
              className="rounded-xl aspect-[9/12] object-cover w-full"
            />
          </div>
        </div>
      </div>
      <div className="py-20 bg-destructive-foreground dark:bg-black"> 
        <div className="container mx-auto px-5 space-y-10">
          {/* heading */}
          <h2 className="text-6xl font-medium font-[family-name:var(--font-clash)] text-center">
            Services
          </h2>
          <div className="grid grid-cols-3 mobile:grid-cols-1 gap-6 relative z-10 ">
            <BentoBox stretch={true}>
              <h3 className="text-2xl font-semibold">1. Strategy Development</h3>
              <p className="pb-2">
                Create a tailored plan to enhance brand visibility and engagement.
              </p>
              <SecondaryButton text="Get started" link="/contact-us" />
            </BentoBox>
            <BentoBox>
              <h3 className="text-2xl font-semibold my-auto">2. Content Creation</h3>
            </BentoBox>
            <BentoBox>
              <h3 className="text-2xl font-semibold my-auto">3. Ad Management</h3>
            </BentoBox>
            <BentoBox>
              <h3 className="text-2xl font-semibold my-auto">4. Community Management</h3>
            </BentoBox>
            <BentoBox stretch={true}>
              <h3 className="text-2xl font-semibold">7. Influencer Partnerships</h3>
              <p className="pb-2">
                Collaborate with influencers to amplify your brand&apos;s message and reach.
              </p>
              <SecondaryButton text="Get started" link="/contact-us" />
            </BentoBox>
            <BentoBox>
              <h3 className="text-2xl font-semibold my-auto">5. Analytics Reporting</h3>
            </BentoBox>
            <BentoBox>
              <h3 className="text-2xl font-semibold my-auto">6. Social Listening</h3>
            </BentoBox>
          </div>
        </div>
      </div>
      <div className="container flex md:space-x-10 mx-auto px-5 py-20 mobile:flex-col mobile:gap-10">
        <div className="w-1/2 mobile:w-full flex gap-5">
          <Image
            src="/images/social-media-4.jpg"
            width={640}
            height={979}
            alt="Social Media Marketing"
            className="rounded-xl w-full aspect-video object-cover"
          />
        </div>
        <div className="w-1/2 mobile:w-full flex flex-col gap-5">
          <h2 className="text-5xl font-medium font-[family-name:var(--font-clash)]">
            Who we are
          </h2>
          <p>
            We are a passionate team of social media marketing experts dedicated to helping brands thrive in the digital landscape. With a blend of creativity and strategic thinking, we craft tailored solutions that drive engagement, build community, and achieve measurable results.
          </p>
          <p>
            Our mission is to empower businesses by harnessing the power of social media to connect with their audience, foster brand loyalty, and maximize their return on investment. We believe in the importance of authenticity and meaningful interactions, ensuring that every campaign reflects your unique brand voice and values.
          </p>
          <Link href="/contact">
            <MainBtn text="Get started" />
          </Link>
        </div>
      </div>
      <div className="container mx-auto flex flex-col gap-10 pb-24 mobile:px-5">
        <div className="h-[1px] bg-black dark:bg-white w-full opacity-10" />
        <span className="text-xl">Showcase</span>
        <h2 className="text-7xl mobile:w-full mobile:text-5xl font-medium text-left font-[family-name:var(--font-clash)] w-3/4">
          Engagement ⟶ Amplifying Brand Connections
        </h2>
        <p className="text-base opacity-70 text-left w-3/4">
          Crafting impactful strategies that resonate with audiences and drive results.
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
      <div className="py-20 bg-destructive-foreground dark:bg-black">
        <div className="container mx-auto px-5">
          <div className="space-y-10">
            <h2 className="text-2xl">Recent blog posts:</h2>
            <div className="space-y-5">
              <ArrowHoverEffect 
                title="Raymond Weil × Basquiat"
                image="/images/raymond-weil.jpg"
                link="#"
              />
              <ArrowHoverEffect 
                title="The Longest Erratum Ever"
                image="/images/erratum.jpg"
                link="#"
              />
              <ArrowHoverEffect 
                title="AI-Generated Hygiene Content"
                image="/images/hygiene.jpg"
                last={true} 
              />
            </div>
            <MainBtn text="View all posts" />
          </div>
        </div>
      </div>
    </div>
  );
}
