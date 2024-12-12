"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Img1 from "@/public/Slider/1.jpg";
import Img2 from "@/public/Slider/2.jpg";
import Img3 from "@/public/Slider/3.jpg";
import Img4 from "@/public/Slider/4.jpg";
import Img5 from "@/public/Slider/5.jpg";
import Img6 from "@/public/Slider/6.jpg";
import Img7 from "@/public/Slider/7.jpg";
import Img8 from "@/public/Slider/8.jpg";
import Img9 from "@/public/Slider/9.jpg";
import Img10 from "@/public/Slider/10.jpg";

function Slider() {
  const slider = [
    Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10
  ];

  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);

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
    <div className="relative w-full h-[40vh] md:h-[calc(100vh-8.5vh)]">
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
    </div >
  );
}

export default Slider;