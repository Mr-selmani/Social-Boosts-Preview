import React from 'react';
import { GoArrowRight } from "react-icons/go";

/**
 * Utils
 */
import { cn } from "@/lib/utils";

/**
 * Components
 */
import { Button } from "@/components/ui/button";

const MainBtn = ({text, showIcon=true, light, className}) => {
  return (
    <div className={cn(`flex group ${light ? 'dark' : ''}`, className)}>
      {showIcon && (
        <GoArrowRight className="bg-black dark:bg-white dark:text-black text-white h-14 w-14 p-3 mobile:h-12 mobile:w-12 mobile:p-3 rounded-full scale-0 group-hover:scale-100 origin-left transition-all duration-300" size={25} />
      )}
      <Button type="submit" className={cn(`text-white right-0 rounded-full text-lg top-0 w-fit flex items-center gap-2 hover:gap-4 transition-all h-14 mobile:h-12 variant-secondary px-10 mobile:px-5 bg-black hover:bg-black dark:bg-white dark:text-black group-hover:ml-0 duration-300`, showIcon ? '-ml-14' : 'ml-0')}>
        {text}
      </Button>
      {showIcon && (
        <GoArrowRight className="bg-black dark:bg-white dark:text-black text-white h-14 w-14 p-3 mobile:h-12 mobile:w-12 mobile:p-3 rounded-full scale-100 group-hover:scale-0 origin-left transition-all duration-300" size={25} />
      )}
    </div>
  )
}

export default MainBtn