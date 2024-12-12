"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export const AnimatedCards = ({
    testimonials,
    autoplay = true,
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <div className="max-w-xs py-20 mx-auto sm:max-w-sm md:max-w-5xl">
            <div className="relative grid grid-cols-1 gap-40 md:grid-cols-2">
                <div className="flex flex-col justify-between">
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
                        className="flex flex-col gap-6"
                    >
                        <motion.h3
                            initial={{
                                filter: "blur(10px)",
                                opacity: 0,
                                y: -5,
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
                            className="text-2xl font-bold md:text-4xl shrink-0">
                            {testimonials[active].title}
                        </motion.h3>

                        <motion.p className="text-lg font-medium">
                            {testimonials[active].description.split(" ").map((word, index) => (
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
                                        delay: 0.07 * index,
                                    }}
                                    className="inline-block text-transparent bg-gradient-to-tl from-purple-600 to-blue-600 bg-clip-text"
                                >
                                    {word}&nbsp;
                                </motion.span>
                            ))}
                        </motion.p>
                    </motion.div>
                </div>
                <div>
                    <div className="relative w-full h-96">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
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
                                            : testimonials.length + 2 - index,
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
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <Image
                                        src={testimonial.src}
                                        alt={testimonial.title}
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
                </div>
            </div>
        </div>
    );
};
