import { GalleryImagesData } from '@/data/galleryImages'
import Link from 'next/link'
import React from 'react'

function GalleryImages() {
  return (
    <div className="items-center w-full md:columns-2 lg:columns-3 xl:columns-4 columns-1">
      {GalleryImagesData.map((data, index) => (
        <Link href={`/gallery/${data.id}`} key={index} className="block w-full h-full overflow-hidden">
          <img src={data.imageUrl} alt={data.imageUrl} className="py-2" fetchPriority="high" />
        </Link>
      ))}
    </div>
  )
}

export default GalleryImages