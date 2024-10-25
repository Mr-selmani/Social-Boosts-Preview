import React from 'react';
import Link from 'next/link';
import EmailForm from '../elements/email-form';
import { Separator } from "@/components/ui/separator"

const Footer = () => {
  return (
    <footer className='py-20 space-y-10'>
      <div className='container mx-auto px-5 grid grid-cols-4 mobile:grid-cols-2 gap-5'>
        <h2 className='font-[family-name:var(--font-clash)] text-3xl font-medium mobile:hidden'>See more...</h2>
        <div className='flex flex-col gap-3'>
          <Link href='/about' className='text-2xl mobile:text-base'> About </Link>
          <Link href='/services' className='text-2xl mobile:text-base'> Services </Link>
          <Link href='/case-studies' className='text-2xl mobile:text-base'> Case Studies </Link>
          <Link href='/contact-us' className='text-2xl mobile:text-base'> Contact Us </Link>
          <Link href='/consultation-services' className='text-2xl mobile:text-base'> Consultation Services </Link>
        </div>
        <div className='flex flex-col gap-3'>
          <h3 href="#" className='text-2xl font-[family-name:var(--font-clash)]'>Follow us</h3>
          <Link href="#" className='text-sm'>Instagram</Link>
          <Link href="#" className='text-sm'>Twitter</Link>
          <Link href="#" className='text-sm'>Facebook</Link>
          <Link href="#" className='text-sm'>Linkedin</Link>
        </div>
        <div className='flex flex-col gap-3 mobile:col-span-2 mobile:mt-5'>
          <Link href="#" className='text-2xl font-[family-name:var(--font-clash)]'>Newsletter</Link>
          <p className='text-base'>Subscribe to our newsletter to get the latest news and updates.</p>
          <EmailForm />
        </div>
      </div>
      <div className='container mx-auto'>
        <Separator />
      </div>
      <div className='container mx-auto px-5 text-center py-5 flex justify-between items-center mobile:flex-col mobile:gap-5'>
        <p className='text-xs'>© 2021 Social Boosts. All rights reserved.</p>
        <div className='font-[family-name:var(--font-clash)] whitespace-nowrap text-2xl font-semibold'>Social Boost.</div>
      </div>
    </footer>
  )
}

export default Footer