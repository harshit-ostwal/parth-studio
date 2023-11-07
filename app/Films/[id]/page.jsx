"use client"
import FilmsData from '@/components/Data/Films';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function page() {

  //It Takes The PathName Of The Video
  const pathname = usePathname();

  //It Filters Videos Data From The FilmsData PathName Href
  const filteredVideos = FilmsData.filter((video) => video.href === pathname);

  return (
    <>
      <div className="bg-slate-950 w-full h-screen top-0 absolute flex items-center flex-1 justify-center">
        <div className="w-[100%] lg:w-[80%] aspect-video">

          {/* FilterVideos Maps The Video By The Href */}
          {filteredVideos.map((data) => (
            <iframe key={data.id} src={data.video} frameborder="0" className="aspect-video" width="100%" height="100%" allow="autoplay;"></iframe>
          ))}
        </div>
      </div>
    </>
  )
}