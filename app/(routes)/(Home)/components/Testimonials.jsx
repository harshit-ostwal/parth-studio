"use client"
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion"
import AnimatedText from "@/components/ui/animated-text";

function Testimonials() {
  const Testimonial = [
    {
      name: "John Doe",
      review: "The service was absolutely kajs hdajsda sdajh djahs dkahdka sdha khdas dha, suia sdka sda sdkua jams duas asd gajs kd aksda da dha kdjha kda khdka dskj kas ,das djha skha skjdh ashdkja sjdh akdh asdjk akshdka sjdhjaskdjah sdkhas dhasjhds akh ashdkjashdasdkasdajsdhjkas d aasda dahs d,a smdam sd amsdasdma sda dakjd hakh dajh dkja dajkda djahs da ksjdh ajhakjs hdajshdka kdhakjhkakakjshaksdkahsdasdhakjs dasdj hasdhkaamazing! I couldn't have asked for better support and attention to detail.",
      star: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=800&h=800&q=80"
    },
    {
      name: "Jane Smith",
      review: "Great experience overall, but there were a few minor hiccups. The team handled them professionally.",
      star: 4,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=800&h=800&q=80"
    },
    {
      name: "Emily Brown",
      review: "Fantastic quality and attention to detail. Highly recommend their services for any project!",
      star: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=800&h=800&q=80"
    },
    {
      name: "Michael Lee",
      review: "Good service, but the delivery was slightly delayed. Still, the final result was worth it.",
      star: 3,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=800&h=800&q=80"
    },
    {
      name: "Sophia Johnson",
      review: "I am thrilled with the outcome. The team went above and beyond to ensure we were happy.",
      star: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=faces&fit=crop&w=800&h=800&q=80"
    }
  ];

  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % Testimonial.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + Testimonial.length) % Testimonial.length);
  };

  const isActive = (index) => {
    return index === active;
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="flex flex-col items-center justify-center w-full gap-20 pb-20">
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="px-5 py-2 text-sm font-medium rounded-full md:text-lg bg-amber-100">What They Say</p>
        <h1 className="text-6xl text-center lg:text-9xl font-SaltyFeathers">Our Clients Testimonial</h1>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full rounded-md gap-14">
        <div className="relative h-60 w-60 md:h-72 md:w-72 lg:h-96 lg:w-96">
          <AnimatePresence>
            {Testimonial.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{
                  scale: 1,
                  opacity: 0,
                  z: -100,
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.5,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 999
                    : Testimonial.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.7,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  quality={100}
                  fetchPriority="high"
                  loading="eager"
                  draggable={false}
                  className="object-cover object-center w-full h-full rounded-3xl"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex flex-col justify-between w-11/12 gap-10 xl:w-3/4 2xl:w-2/5 min-h-40">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold md:text-3xl">{Testimonial[active].name}</h1>
            <AnimatedText delay={0.03} className="max-w-5xl text-sm truncate md:text-xl text-neutral-500" text={Testimonial[active].review} />
          </motion.div>
          <div className="flex items-center justify-between gap-0">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="flex gap-2">
              {Array.from({ length: Testimonial[active].star }, index => (
                <Star key={index || active} fill="orange" color="none" className="w-6 h-6 md:w-10 md:h-10" />
              ))}
            </motion.div>
            <div className="flex items-center gap-4">
              <button onClick={handlePrev} className="p-3 rounded-full bg-neutral-200"><ArrowLeft /></button>
              <button onClick={handleNext} className="p-3 rounded-full bg-neutral-200"><ArrowRight /></button>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Testimonials;