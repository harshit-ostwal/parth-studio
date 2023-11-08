"use client"
import FilmsData from '@/components/Data/Films';
import { ArrowLeftIcon, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function page() {

  //It Takes The PathName Of The Video
  const pathname = usePathname();

  //It Filters Videos Data From The FilmsData PathName Href
  const filteredVideos = FilmsData.filter((video) => video.href === pathname);

  return (
    <>
      <div className="bg-slate-950 w-full h-screen p-10">

        <div className="justify-end flex">
          <Link href={"/Films"} className="flex text-white gap-3 animate-bounce"><ArrowLeftIcon color='gold' size={24} /> Go back</Link>
        </div>

        <div className="w-full flex justify-center">

          {/* FilterVideos Maps The Video By The Href */}
          {filteredVideos.map((data) => (
            <div className="w-[100%] lg:w-[80%] aspect-video" key={data.id}>
              <iframe src={data.video} className="aspect-video" width="100%" height="100%" allow="autoplay;"></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}