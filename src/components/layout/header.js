import React from 'react';
import Link from 'next/link';

/**
 * Components
 */ 
import MainBtn from "@/components/elements/buttons/main-btn";

const Header = () => {
  return (
    <header>
        <div className='container pt-10 pb-5 mx-auto flex justify-between w-full mobile:items-center mobile:px-5'>
            <Link className='font-[family-name:var(--font-clash)] whitespace-nowrap text-4xl font-semibold mobile:text-2xl' href="/">Social Boost.</Link>
            <div className='flex items-center gap-10'>
                <Link href='/about' className='text-base hover:text-primary transition-all mobile:hidden'> About </Link>
                <Link href='/services' className='text-base hover:text-primary transition-all mobile:hidden'> Services </Link>
                <Link href='/case-studies' className='text-base hover:text-primary transition-all mobile:hidden'> Case Studies </Link>
                <Link href='/contact-us' className='text-base hover:text-primary transition-all mobile:hidden'> Contact Us </Link>
                <Link href='/consultation-services' className='text-base hover:text-primary transition-all mobile:hidden'> Consultation Services </Link>
                <Link href="/contact-us">
                  <MainBtn text='Get Started' showIcon={false} />
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header
