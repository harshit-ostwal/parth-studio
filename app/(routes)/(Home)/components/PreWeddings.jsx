import AnimatedText from '@/components/ui/animated-text'
import { PreWeddingTypes } from '@/data/PreWeddings'
import Image from 'next/image'
import React from 'react'

function PreWeddings() {
    return (
        <div className="flex flex-col items-center justify-center w-11/12 gap-20 py-20">
            <div className="flex flex-col items-center justify-center gap-10 text-center">
                <h1 className="relative text-center text-7xl lg:text-9xl font-SaltyFeathers">Pre Love Chronicles</h1>
                <AnimatedText text="At Parth Studios, we capture the full spectrum of your love story, from playful moments to intimate exchanges. Our pre-wedding shoots are designed to reflect your unique bond. With every click, we create stunning visuals that speak to your emotions. We focus on preserving these precious memories for a lifetime. Let us turn your love into a timeless masterpiece." className="text-neutral-600" />
            </div>
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
                {PreWeddingTypes.slice(0, 4).map((data, index) => (
                    <div key={index} className="relative group">
                        <Image src={data.thumbnail} quality={100} fetchPriority="high" loading="eager" className="w-[600px] h-[250px] md:h-[400px] object-cover duration-300 rounded-md aspect-video" alt={data.preWeddingName} />
                        <div className="absolute inset-0 flex flex-col items-start justify-end p-5 text-white transition-opacity duration-300 rounded-md opacity-0 md:p-10 bg-black/50 group-hover:opacity-100">
                            <h2 className="text-xl font-bold">{data.preWeddingName}</h2>
                            <p className="text-sm font-medium">{data.preWeddingDesc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PreWeddings