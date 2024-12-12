import { AnimatedCards } from '@/components/ui/animated-cards'
import React from 'react'
import Img1 from "@/public/1.jpeg"
import Img2 from "@/public/8.jpg"
import Img3 from "@/public/3.jpg"
import Img4 from "@/public/4.jpg"
import Img5 from "@/public/5.jpg"
import Img6 from "@/public/6.jpg"
import Img7 from "@/public/7.jpg"

function Service() {

  const testimonials = [
    {
      title: 'Wedding Photography',
      description: '"At Parth Studio, we capture the essence of every wedding with stunning photography that turns your most cherished moments into lifelong memories. From candid shots to beautifully posed portraits, our team ensures every emotion is perfectly preserved."',
      src: Img1,
    },
    {
      title: 'Wedding Videography',
      description: '"With Parth Studio’s wedding videography, we transform your big day into a cinematic experience. Our videographers capture every meaningful glance, smile, and tear, creating a story that you can relive over and over again."',
      src: Img2,
    },
    {
      title: 'Fashion Photography',
      description: '"Parth Studio’s fashion photography brings out the best in you. Our photographers expertly capture the elegance, style, and beauty of every look, ensuring each frame is nothing short of stunning."',
      src: Img3,
    },
    {
      title: 'Product Photography',
      description: '"At Parth Studio, we specialize in product photography that highlights every detail of your product with clarity and precision, making it shine in the eyes of potential customers."',
      src: Img4,
    },
    {
      title: 'Commerical Photography',
      description: '"Whether it’s a personal project or a professional short film, Parth Studio brings your vision to life with exceptional cinematography, storytelling, and direction, ensuring your film stands out."',
      src: Img5,
    },
    {
      title: 'Commerical Videography',
      description: '"Parth Studio’s music video production creates a visual masterpiece that enhances your music. We combine creativity with technical expertise to produce captivating visuals that resonate with your audience."',
      src: Img6,
    },
    {
      title: 'Other Events',
      description: '"From corporate events to parties and everything in between, Parth Studio ensures that your event is documented beautifully. Our experienced team captures the atmosphere and highlights with precision and artistry."',
      src: Img7,
    },
  ];

  return (
    <div classtitle="flex flex-col items-center justify-center w-full gap-20 text-center">
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <p className="px-5 py-2 text-sm font-medium rounded-full bg-amber-100 md:text-lg">Our Service</p>
        <h1 className="text-6xl font-semibold">What We Offer</h1>
      </div>

      <div className="w-full">
        <AnimatedCards testimonials={testimonials} />
      </div>
    </div>
  )
}

export default Service

