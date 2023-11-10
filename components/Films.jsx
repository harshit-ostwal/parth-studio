"use client"
import { Play } from 'lucide-react';
import React, { useState } from 'react';
import FilmsData from './Data/Films';
import Image from 'next/image';
import Link from 'next/link';

export default function Films() {

  //Load Fully And The Show
  const [loaded, setLoaded] = useState(false);

  //Load More Map After This Number
  const [visibleItems, setVisibleItems] = useState(8);

  //Load More
  const loadMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 8);
  };

  return (
    <>
      {/* Grid Layout For Video Links Posters */}
      <div className={`grid grid-cols-1 md:grid-cols-2 md:p-10 pt-20 pb-20 xl:p-20 gap-5 opacity-0 duration-1000 delay-1000 ease-in-out transition-opacity ${loaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => setLoaded(true)}>

        {/* Mapping The Video Links & Data */}
        {FilmsData.slice(0, visibleItems).map((data) => (
          <div key={data.id} className="pb-5 w-full">

            {/* Mapping Image */}
            <div className="relative">
              <Link href={`${data.href}`}>
                <Image
                  src={data.thumbnail}
                  width={1920}
                  loading="lazy"
                  alt={data.title}
                  height={1080}
                  quality={100}
                  className="aspect-video object-cover"
                  onLoad={() => setLoaded(true)}
                />
              </Link>

              {/* Play Button On Images */}
              <Link href={`${data.href}`} className="absolute inset-0 flex items-center justify-center"><Play color='white' size={50} className="opacity-80" /></Link>
            </div>

            {/* Mapping Data For Title , Category & Date */}
            <div className="flex flex-col md:flex-row md:justify-between p-5 space-y-5 md:space-y-0">
              <div className="flex justify-start w-full text-center md:text-start md:w-2/3 lg:w-4/5">
                <Link href={`${data.href}`} className="text-3xl tracking-wide md:tracking-widest font-Oregano font-bold text-slate-900">{data.title}</Link>
              </div>
              <div className="justify-evenly flex md:flex-col flex-row text-center md:text-start tracking-wide md:tracking-widest">
                <div>
                  <h1 className="font-medium text-xl text-slate-700 font-Salsa">Category</h1>
                  <p className="font-Oregano text-lg font-semibold text-pink-500">{data.category}</p>
                </div>
                <div>
                  <h1 className="font-medium text-xl text-slate-700 font-Salsa">Date</h1>
                  <p className="font-Oregano text-lg font-semibold text-pink-500">{data.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {FilmsData.length > visibleItems && (
        <div className="flex items-center justify-center pb-20">
          <button onClick={loadMoreItems} className="bg-slate-950 font-Salsa hover:text-slate-950 hover:bg-white hover:border hover:border-slate-950 transition-all duration-1000 animate-bounce text-gray-400 px-10 py-4 rounded-xl">
            Load More
          </button>
        </div>
      )}
    </>
  )
}
