"use client"
import React from "react";
import Form from "./components/Form";
import { motion } from "framer-motion";
import AnimatedText from "@/components/ui/animated-text";

function page() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen gap-20 py-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <AnimatedText delay={0.05} className="text-sm font-medium uppercase text-neutral-500 md:text-lg" text={"DO YOU WANT TO COLLABORATE?"} />
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
          className="text-5xl font-semibold lg:text-9xl">Get In Touch 👋</motion.h1>
        <AnimatedText delay={0.05} className="text-neutral-500" text={"If you have questions about our photography and videography services, want to share feedback, or have an idea for your event, we’d love to hear from you! We’re here to help, so don’t hesitate to contact us anytime!"} />
      </div>

      <Form />
    </div>
  );
}

export default page;