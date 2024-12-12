import React from "react";
import Testimonials from "./components/Testimonials";
import Slider from "./components/Slider";
import Img1 from "@/public/pano/P1.jpg";
import Img2 from "@/public/pano/P2.jpg";
import Flims from "./components/Flims";
import About from "./components/About";
import Counter from "./components/Counter";
import Service from "./components/Service";
import Weddings from "./components/Weddings";
import PreWeddings from "./components/PreWeddings";
import Image from "next/image";

function page() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen pb-20 overflow-hidden gap-14">
      <Slider />
      <About />
      <Counter />
      <Service />
      <Image className="w-full mt-20 h-[30vh] md:h-[60vh] object-cover object-bottom" quality={100} alt="Pano" fetchPriority="high" loading="eager" src={Img1} />
      <Weddings />
      <Flims />
      <Image className="w-full mt-20 h-[30vh] md:h-[60vh] object-cover" quality={100} alt="Pano" fetchPriority="high" loading="eager" src={Img2} />
      <PreWeddings />
      <Testimonials />
    </div>
  );
}

export default page;