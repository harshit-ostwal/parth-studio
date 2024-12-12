"use client"
import AnimatedText from "@/components/ui/animated-text";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { PreWeddingTypes } from "@/data/PreWeddings";

function page() {

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-40 py-20">
            <div className="flex flex-col items-center justify-center w-full gap-4 text-center">
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
                    className="w-full text-6xl font-semibold text-center sm:text-8xl lg:text-9xl font-SaltyFeathers">Pre Love Chronicles </motion.h1>
                <AnimatedText delay={0.05} className="capitalize text-neutral-600" text={"At Parth Studios, we capture the full spectrum of your love story, from playful moments to intimate exchanges. Our pre-wedding shoots are designed to reflect your unique bond. With every click, we create stunning visuals that speak to your emotions. We focus on preserving these precious memories for a lifetime. Let us turn your love into a timeless masterpiece."} />
            </div>

            <div className="grid items-center w-3/4 h-full grid-cols-1 gap-10">
                {PreWeddingTypes.map((data, index) => (
                    <motion.div
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
                            delay: 0.3 * index,
                        }}
                        className={`w-full rounded-md flex flex-col border border-border lg:flex-row items-center gap-6 overflow-hidden ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                        <Image src={data.thumbnail} quality={100} alt={data.preWeddingImages} fetchPriority="high" loading="eager" width={800} height={800} className="object-cover rounded-md aspect-video " />
                        <div className="flex flex-col justify-between flex-1 gap-20 p-10">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-4xl font-bold">{data.preWeddingName}</h1>
                                <h1 className="text-xl font-medium text-neutral-500">{data.preWeddingDesc}</h1>
                            </div>
                            <Link
                                href={`${data.preWeddingHref}`}
                                className="outline w-fit outline-1 outline-black/40 hover:outline-black after:outline-black/40 hover:after:outline-black relative hover:text-white transition-all overflow-hidden after:transition-all after:duration-300 ease-in-out after:ease-in-out py-2 px-5 rounded-md font-medium text-lg after:bottom-[-100%] after:left-0 after:absolute after:bg-black after:h-full after:w-full after:rounded-[50%] hover:after:rounded-none hover:after:bottom-0">
                                <div className="relative z-10">View Pre Wedding</div>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div >
    );
}

export default page;