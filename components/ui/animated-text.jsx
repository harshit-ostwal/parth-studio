"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedText = ({ text, className, delay = 0.07 }) => {
  return (
    <motion.p className={`text-sm lg:text-xl font-medium md:text-lg max-w-7xl`}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={index}
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
            delay: delay * index,
          }}
          className={`inline-block ${className}`}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedText;