"use client"
import React from 'react';
import Team from './components/Team';
import Faq from './components/Faq';
import Service from './components/Service';
import AnimatedText from '@/components/ui/animated-text';
import { motion } from 'framer-motion';

function Page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-40 pt-60 pb-60">
      <div className="flex flex-col items-center justify-center text-center gap-14">
        <motion.h1
          initial={{
            filter: "blur(10px)",
            opacity: 0,
            y: 5,
          }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="text-6xl font-semibold text-left sm:text-8xl lg:text-9xl font-SaltyFeathers">About Us</motion.h1>
        <div className="flex flex-col w-full gap-10 text-left capitalize sm:max-w-5xl md:text-lg">
          <AnimatedText className="text-neutral-600" text={"At Parth Studio, we believe in capturing moments that matter."} />
          <AnimatedText className="text-neutral-600" text={"We are a passionate team of photographers and videographers dedicated to bringing your vision to life. Whether it's a wedding, corporate event, or personal project, we ensure every detail is meticulously crafted to create lasting memories."} />
          <AnimatedText className="text-neutral-600" text={"With years of experience and a keen eye for detail, our approach is personalized, ensuring that every project reflects your unique story. Let us help you tell yours!"} />
        </div>
        <div className="flex flex-col w-full gap-6 text-left capitalize sm:max-w-5xl md:text-lg">
          <AnimatedText text={"Our Misson"} className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-blue-500 sm:text-lg md:text-2xl" />
          <AnimatedText
            text={"Our mission is to relinquish skilled high-quality service at the foremost competitive costs within the market. We attempt to forecast, perceive and satisfy your wants with our wonderful job performance in order that we’ll be a brand recognized throughout the globe for its product range, advanced technology, design, and innovative ways of celebrating life’s greatest moments."}
            className="text-sm sm:text-base text-neutral-600 md:text-lg lg:text-xl"
          />
        </div>
        <div className="flex flex-col w-full gap-6 text-left capitalize sm:max-w-5xl md:text-lg">
          <AnimatedText text={"Our Vision"} className="font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-blue-500 sm:text-lg md:text-2xl" />
          <AnimatedText
            text={"Our vision is to be the primary choice of customers in the photography and cinematography industry. To achieve this, we aim to create a world where emotions are enhanced, and everyone’s best experiences are extended, celebrated, and shared through ground-breaking technology and expertly crafted products."}
            className="text-sm sm:text-base text-neutral-600 md:text-lg lg:text-xl"
          />
        </div>
      </div>

      <Service />
      <Team />
      <Faq />
    </div >
  );
}

export default Page;