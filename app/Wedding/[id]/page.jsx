"use client"
import WeddingData from '@/components/Data/Wedding';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

export default function page() {

  //It Takes The PathName Of The Video
  const pathname = usePathname();

  //It Filters Videos Data From The FilmsData PathName Href
  const filteredImage = WeddingData.filter((image) => image.href === pathname);

  //Load Fully And The Show
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div className="overflow-hidden flex flex-col pt-10 pb-10">

        {/* Filter Wedding Details Mapping By Href */}
        {filteredImage.map((data) => (
          <div key={data.id}>
            <div className="flex flex-col text-center justify-center gap-3 p-10">
              <p className="font-Oregano text-lg md:text-xl lg:text-2xl font-semibold text-slate-700 animate-fade-in-top">{data.date}</p>
              <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl text-slate-900 font-Salsa animate-fade-in">{data.title}</h1>
              <h1 className="font-medium text-xl md:text-2xl lg:text-3xl text-slate-900 font-Oregano animate-fade-in-down">{data.category}</h1>
            </div>

            {/* Mapping Poster */}
            <div className={`columns-1 md:columns-2 lg:columns-3 md:p-10 lg:p-20 space-y-5 opacity-0 duration-1000 delay-1000 ease-in-out transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setLoaded(true)}>
              {data.poster.map((images, index) => (
                <div key={index}>
                  <Image
                    src={images}
                    alt={data.title}
                    width={1920}
                    height={1080}
                    quality={100}
                    onLoad={() => setLoaded(true)}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div >
    </>
  )
}