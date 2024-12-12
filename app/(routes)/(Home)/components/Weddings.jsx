import AnimatedText from '@/components/ui/animated-text'
import { WeddingTypes } from '@/data/Weddings'
import Image from 'next/image'
import React from 'react'

function Weddings() {
    return (
        <div className="flex flex-col items-center justify-center w-11/12 gap-20 py-20">
            <div className="flex flex-col items-center justify-center gap-10 text-center">
                <h1 className="relative text-6xl text-center md:text-8xl lg:text-9xl font-SaltyFeathers">Eternal Captures</h1>
                <AnimatedText text="At Parth Studios, we craft Eternal Captures that preserve the essence of your wedding day in timeless photographs. Every fleeting moment, from the first glance to the last dance, is captured with precision and artistry. Let us transform your special day into a visual legacy that lasts forever." className="text-neutral-600" />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
                {WeddingTypes.slice(0, 4).map((data, index) => (
                    <div key={index} className="relative group">
                        <Image src={data.thumbnail} quality={100} fetchPriority="high" loading="eager" className="w-[600px] h-[250px] md:h-[400px] object-cover duration-300 rounded-md aspect-video" alt={data.weddingName} />
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-5 text-white transition-opacity duration-300 rounded-md opacity-0 md:p-10 bg-black/50 group-hover:opacity-100">
                            <h2 className="text-xl font-bold">{data.weddingName}</h2>
                            <p className="text-sm font-medium">{data.weddingDesc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Weddings