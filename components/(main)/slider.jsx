"use client"
import React, { useRef } from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"
import { SliderData } from '@/data/slider'

function Slider() {

    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[plugin.current]}
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            className="lg:w-4/5"
        >
            <CarouselContent>
                {SliderData.map((data, index) => (
                    <CarouselItem key={index}>
                        <Image src={data.imageUrl} className="lg:object-cover w-full lg:h-[786px]" fetchPriority="high" priority={true} quality={100} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}

export default Slider