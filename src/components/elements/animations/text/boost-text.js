'use client';
import React, { useEffect, useRef } from 'react';

import gsap from "gsap";
import SplitType from 'split-type';
import { useGSAP } from "@gsap/react";
import { useGsapPlugins } from "@/hooks/gsapPlugins";
import { cn } from "@/lib/utils";

const BoostText = ({
  text, 
  speed, 
  direction, 
  strength = 10, 
  fadeEffect=true, 
  boostedElement,
  className,
  ...props
}) => {
    /*-- Hooks --*/
    const { pluginsLoaded } = useGsapPlugins();

    /*-- DOM Elements --*/
    const boostText = useRef(null);
    const detectElement = (elm)=> {
        /*--| Default is: Words |--*/
        if(boostedElement === 'words') {
          return elm.words;
        } else if (boostedElement === 'chars') {
          return elm.chars;
        } else if (boostedElement === 'lines') {
          return elm.lines;
        } else {
          return elm.words;
        }
    }

    useGSAP(()=> {
        if(pluginsLoaded) { 
            const splittedBoostedText = new SplitType(boostText.current);
            const elmsToAnimate = detectElement(splittedBoostedText);
            // Direction can be: right, left, up, down
            gsap.from(elmsToAnimate, {
                duration: speed,
                x: direction === 'left' ? (strength * 5) : direction === 'right' ? -(strength * 5) : 0,
                y: direction === 'up' ? (strength * 5) : direction === 'down' ? -(strength * 5) : 0,
                opacity: fadeEffect ? 0 : 1,
                stagger: 0.05,
                ease: "back"
            });
        }
    }, [pluginsLoaded]);

  return (
    <div ref={boostText} className={cn('inline-block', className)} {...props}>
      {text}
    </div>
  )
}

export default BoostText
