"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Img1 from "@/public/1.jpeg";
import Img2 from "@/public/8.jpg";
import Img3 from "@/public/3.jpg";
import Img4 from "@/public/4.jpg";
import Img5 from "@/public/5.jpg";
import Img6 from "@/public/6.jpg";
import Img7 from "@/public/7.jpg";
import Img9 from "@/public/9.jpg";
import Img10 from "@/public/10.jpg";
import Img11 from "@/public/11.jpg";
import Img12 from "@/public/12.jpg";
import Img13 from "@/public/13.jpg";
import Img14 from "@/public/14.jpg";
import Img15 from "@/public/15.jpg";

function NSlider() {
  const slider = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img9, Img10, Img11, Img12, Img13, Img14, Img15,
  ];

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, []);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % slider.length);
    setProgress(0);
  };

  return (
    <div className="relative w-full h-[calc(100vh-8.5vh)]">
      {slider.map((data, index) => (
        <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === active ? "opacity-100" : "opacity-0"}`}>
          <Image
            src={data}
            alt={`Slide ${index + 1}`}
            width={1920}
            height={1080}
            quality={100}
            draggable={false}
            className="object-cover w-full h-full"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* <div className="absolute z-10 bottom-6 right-6">
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <svg
            className="absolute w-full h-full transform -rotate-90"
            viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="15.915"
              strokeWidth="2"
              stroke="white"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="100"
              strokeDashoffset={100 - progress}
              className="transition-[stroke-dashoffset] duration-100 linear"
            />
          </svg>
          
          <div className="absolute inset-0 flex items-center justify-center text-sm font-medium text-white md:text-base">
            {Math.round((progress / 100) * 5)}s
          </div>
        </div> */}
    </div >
  );
}

export default NSlider;