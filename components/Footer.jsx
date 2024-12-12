"use client";
import { ArrowUpFromDotIcon } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

function Footer() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <footer className="flex items-end justify-center w-full min-h-screen py-40 pb-6 overflow-hidden leading-none text-black bg-gradient-to-t from-neutral-400 via-neutral-300">
      <div className="w-[93%] flex flex-col gap-32">
        <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl">Sitemap</h1>
            <div className="flex gap-14 sm:gap-20">
              <div className="flex flex-col gap-4">
                <Link href={"/"} className="text-lg font-light sm:text-xl w-fit text-black/80">Home</Link>
                <Link href={"/Portfolio"} className="text-lg font-light sm:text-xl w-fit text-black/80">Gallery</Link>
                <Link href={"/PreWeddings"} className="text-lg font-light sm:text-xl w-fit text-black/80">Pre Weddings</Link>
              </div>
              <div className="flex flex-col gap-4">
                <Link href={"/Films"} className="text-lg font-light sm:text-xl w-fit text-black/80">Films</Link>
                <Link href={"/AboutUs"} className="text-lg font-light sm:text-xl w-fit text-black/80">About</Link>
                <Link href={"/ReachUs"} className="text-lg font-light sm:text-xl w-fit text-black/80">Reach Us</Link>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl">Follow Me</h1>
            <div className="flex flex-col gap-4">
              <Link href={"https://www.instagram.com/parthstudios"} target="_blank" className="text-lg font-light sm:text-xl w-fit text-black/80">Instagram</Link>
              <Link href={"https://www.youtube.com/@parthstudios"} target="_blank" className="text-lg font-light sm:text-xl w-fit text-black/80">Youtube</Link>
              <Link href={"https://www.facebook.com/parthstudios"} target="_blank" className="text-lg font-light sm:text-xl w-fit text-black/80">Facebook</Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-3xl sm:text-4xl">Work With Me :</h1>
              <Link href={"/"} target="_blank" className="z-20 text-2xl border-b md:text-4xl border-black/40 w-fit text-black/80">mailtoparthstudio@gmail.com</Link>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-2xl">Address</h1>
              <p className="text-base">12, 43rd St, Sarvamangala Colony, Krupa Colony, Ashok Nagar, Chennai, Tamil Nadu 600083</p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl">Contact</h1>
              <p className="text-lg tracking-wider">+91 6381231896</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-10 xl:items-center xl:flex-row">
          <div className="flex flex-col items-start gap-2">
            <p className="text-lg text-black/80">Based in Tamilnadu, India</p>
            <p className="font-light text-black/80">Current Time : {time && time.toTimeString()}</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-lg text-black/80">Availability</p>
            <p className="font-light text-black/80">Serving Accrose The Globe</p>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-lg text-black/80">© 2024 · Parth Studios</p>
            <p className="font-light text-right text-black/80">All Rights Reserved</p>
          </div>
        </div>

        <div className="flex items-start justify-between lg:items-end">
          <h1 className="text-[86px] sm:text-[156px] lg:text-[232px] font-semibold tracking-tight">Parth Studios</h1>
          <button onClick={handleScrollTop} className="p-4 bg-black rounded-full h-fit">
            <ArrowUpFromDotIcon color="white" className="h-7 w-7 md:w-14 md:h-14" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;