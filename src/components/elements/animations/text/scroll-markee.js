'use client';
import React, { useEffect, useRef } from 'react';

import gsap from "gsap";
import SplitType from 'split-type';
import { useGSAP } from "@gsap/react";
import { useGsapPlugins } from "@/hooks/gsapPlugins";
import { cn } from "@/lib/utils";

const ScrollMarkee = ({
    text="SOME TEXT SOME TEXT SOME TEXT SOME TEXT SOME TEXT SOME TEXT SOME TEXT SOME TEXT SOME TEXT "
}) => {
  /*-- Hooks --*/
  const { pluginsLoaded } = useGsapPlugins();

  // Reference to the container that holds the text
  const marqueeRef = useRef(null);
  const rotator = useRef(null);

  useGSAP(() => {
    if (pluginsLoaded && marqueeRef.current) {
        gsap.to(rotator.current, {
            rotate: 0,
            ease: 'none',
            scrollTrigger: {
                trigger: rotator.current, 
                start: 'top bottom',
                end: 'bottom 50%',
                scrub: 1,
            },
        });
        gsap.to(marqueeRef.current, {
          xPercent: -50, 
          rotate: 0,
          ease: 'none', 
          scrollTrigger: {
            trigger: marqueeRef.current, 
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
    }
  }, [pluginsLoaded]);

  return (
    <div className="block w-full overflow-hidden relative h-fit rotate-3 my-14" ref={rotator}>
        {/* Placeholder */}
        <div className='text-[5vw] font-semibold whitespace-nowrap opacity-0 pointer-events-none font-[family-name:var(--font-clash)]'>
          {text}
        </div>
        <div className='w-fit flex text-[5vw] font-semibold italic opacity-75 whitespace-nowrap absolute top-0 left-0 font-[family-name:var(--font-clash)]' ref={marqueeRef}>
          {text} {text} {text} {text}
        </div>
    </div>
  );
};

export default ScrollMarkee;
