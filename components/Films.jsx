import { Play } from 'lucide-react';
import React from 'react';
import FilmsData from './Data/Films';
import Image from 'next/image';

export default function Films() {
  return (
    <>
      {/* Grid Layout For Video Links Posters */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-10 pt-20 pb-20 xl:p-20 gap-5">

        {/* Mapping The Video Links & Data */}
        {FilmsData.map((data) => (
          <div key={data.id} className="pb-5 w-full">

            {/* Mapping Image */}
            <div className="relative">
              <Image
                src={data.thumbnail}
                width={1920}
                loading="lazy"
                height={1080}
                quality={100}
                className="object-cover aspect-video"
              ></Image>

              {/* Play Button On Images */}
              <Play color='white' size={50} className="absolute opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Mapping Data For Title , Category & Date */}
            <div className="flex flex-col md:flex-row md:justify-between p-5 space-y-5 md:space-y-0">
              <div className="flex justify-start w-full text-center md:text-start md:w-2/3">
                <h1 className="text-2xl font-Merienda text-slate-800 font-bold">{data.title}</h1>
              </div>
              <div className="justify-evenly flex md:flex-col flex-row text-center md:text-start">
                <div>
                  <h1 className="font-bold text-lg text-slate-800 font-Merienda">Category</h1>
                  <p className="font-Poppins font-semibold text-slate-700">{data.category}</p>
                </div>
                <div>
                  <h1 className="font-bold text-lg text-slate-800 font-Merienda">Date</h1>
                  <p className="font-Poppins font-semibold text-slate-700">{data.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
