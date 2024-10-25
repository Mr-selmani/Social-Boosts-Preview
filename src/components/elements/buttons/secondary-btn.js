import React from "react";
import Link from 'next/link';
import { GoArrowRight } from "react-icons/go";
import { cn } from "@/lib/utils";

const SecondaryButton = ({ text, link, className }) => {
  return (
    <Link href={link ? link : '#'} className={cn("flex items-center gap-2 relative group w-fit cursor-pointer", className)}>
      {text}
      <GoArrowRight className="text-black dark:text-white transition-all delay-300 opacity-0 group-hover:opacity-100 translate-x-5 group-hover:translate-x-0" />
      <div className="absolute left-0 top-full translate-y-2 w-0 transition-all duration-500 h-px bg-black dark:bg-white group-hover:w-full" />
    </Link>
  );
};

export default SecondaryButton;
