import React from 'react'
import SocialMedia from './social-media'
import Link from 'next/link'

function Footer() {

  const year = new Date().getFullYear();

  return (
    <footer className="bg-black capitalize text-white min-h-[784px] w-full flex flex-col gap-20 items-center justify-center py-20">
      <div className="flex flex-col items-center justify-between w-11/12 gap-10 xl:flex-row">
        <div className="flex flex-col w-full gap-8 max-w-7xl">
          <h1 className="w-full max-w-4xl text-3xl font-semibold leading-[2.8rem] sm:leading-[3.2rem] md:leading-[4rem] sm:text-4xl md:text-5xl xl:leading-[5rem]">
            Capturing Timeless Moments and Crafting Beautiful Wedding Films and Websites for Your Special Day.
          </h1>
          <p className="text-3xl">Get in touch</p>
          <div className="flex flex-col gap-2 text-neutral-300">
            <h1 className="text-xl font-medium md:text-xl">+91 63812 31896</h1>
            <h1 className="text-xl font-medium md:text-xl">contact@parthstudios.com</h1>
            <h1 className="text-xl font-medium md:text-xl">10th Ave, Ashok Nagar, Chennai, Tamil Nadu 600083</h1>
          </div>
        </div>
        <div className="flex flex-col w-full max-w-lg gap-[3rem] ">
          <div className="flex flex-col items-center justify-center text-black rounded-3xl gap-[1.5rem] bg-white h-64 md:h-80">
            <h1 className="text-4xl font-semibold md:text-5xl">Let’s get started</h1>
            <p className="text-sm sm:text-base">We’d love to hear about your project.</p>
            <Link href="/contact" className="w-4/5 py-4 text-2xl font-semibold text-center text-white bg-black/70 rounded-3xl">Get in touch</Link>
          </div>
          <div className="flex flex-col items-center justify-between gap-4 px-10 py-5 text-black bg-white min-h-20 md:flex-row rounded-3xl">
            <h1 className="text-xl font-semibold">Follow Us</h1>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="bg-white w-11/12 h-[1px] rounded-full"></div>
      <div className="flex flex-col items-center justify-between w-11/12 text-neutral-400 sm:flex-row">
        <p>© {year} Parth Studios · All rights reserved.</p>
        <p>Developed By Harshit Ostwal</p>
      </div>
    </footer>
  )
}

export default Footer