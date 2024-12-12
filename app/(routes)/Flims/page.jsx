"use client"
import AnimatedText from "@/components/ui/animated-text";
import React from "react";
import { motion } from "framer-motion";
import { flimsData } from "@/data/Flims";

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
                    className="w-full text-6xl font-semibold sm:text-8xl lg:text-9xl font-SaltyFeathers">Vows on Flims</motion.h1>
                <AnimatedText delay={0.05} className="capitalize text-neutral-600" text={"At Parth Studios, we turn your vows into timeless cinematic memories. We capture every heartfelt promise, preserving the emotions and magic of your day. Your love story deserves to be immortalized in stunning detail. With us, your vows will live forever on film, ready to be relived anytime. Let us create a wedding video that truly reflects the depth of your love."} />
            </div>

            <div className="grid items-center w-11/12 h-full grid-cols-3 gap-10">
                {flimsData.map((data, index) => (
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
                        }}>
                        <iframe src={data} width={600} height={400} key={index} />
                    </motion.div>
                ))}
            </div>
        </div >
    );
}

export default page;