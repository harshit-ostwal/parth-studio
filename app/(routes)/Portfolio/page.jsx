import AnimatedText from "@/components/ui/animated-text";
import { PortfolioData } from "@/data/Portfolio";
import { TeamData } from "@/data/Team";
import Image from "next/image";
import React from "react";
import NSlider from "./components/NSlider";
import SSlider from "./components/SSlider";

function page() {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen gap-40 py-20 overflow-hidden">
            <div className="flex flex-col items-center justify-center gap-20">
                <div className="flex flex-col items-center justify-center gap-10 text-center">
                    <h1 className="relative text-center text-9xl font-SaltyFeathers">North Indian Weddings</h1>
                    <AnimatedText text="At Parth Studios, we craft Eternal Captures that preserve the essence of your wedding day in timeless photographs. Every fleeting moment, from the first glance to the last dance, is captured with precision and artistry. Let us transform your special day into a visual legacy that lasts forever. " className="text-neutral-600" />
                </div>

                <NSlider />

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 w-fit h-fit">
                    {PortfolioData.map((data, index) => (
                        <div className="flex flex-col gap-6 h-fit w-fit" key={index}>
                            <Image draggable={false} src={data.image} fetchPriority="high" width={600} height={600} priority loading="eager" quality={100} alt="Image" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-20">
                <div className="flex flex-col items-center justify-center gap-10 text-center">
                    <h1 className="relative text-center text-9xl font-SaltyFeathers">South Indian Weddings</h1>
                    <AnimatedText text="At Parth Studios, we craft Eternal Captures that preserve the essence of your wedding day in timeless photographs. Every fleeting moment, from the first glance to the last dance, is captured with precision and artistry. Let us transform your special day into a visual legacy that lasts forever. " className="text-neutral-600" />
                </div>

                <SSlider />

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3 w-fit h-fit">
                    {PortfolioData.map((data, index) => (
                        <div className="flex flex-col gap-6 h-fit w-fit" key={index}>
                            <Image draggable={false} src={data.image} fetchPriority="high" width={600} height={600} priority loading="eager" quality={100} alt="Image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default page;