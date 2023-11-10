"use client"
import WeddingData from '@/components/Data/Wedding';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function page() {

  //It Takes The PathName Of The Video
  const pathname = usePathname();

  //It Filters Videos Data From The FilmsData PathName Href
  const filteredImage = WeddingData.filter((image) => image.href === pathname);

  return (
    <>
      <div className="overflow-hidden flex flex-col pt-10 pb-10">

        {/* Filter Wedding Details Mapping By Href */}
        {filteredImage.map((data) => (
          <>
            <div className="flex flex-col text-center justify-center gap-3 p-10">
              <p className="font-Oregano text-lg md:text-xl lg:text-2xl font-semibold text-slate-700">{data.date}</p>
              <h1 className="font-medium text-2xl md:text-3xl lg:text-4xl text-slate-900 font-Salsa">{data.title}</h1>
              <h1 className="font-medium text-xl md:text-2xl lg:text-3xl text-slate-900 font-Oregano">{data.category}</h1>
            </div>

            {/* Mapping Poster */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {data.poster.map((images, id) => (
                <Image
                  src={images}
                  key={id}
                  className=""
                  width={1920}
                  height={1080}
                  quality={100}
                />
              ))}
            </div>
          </>
        ))}
      </div >
    </>
  )
}