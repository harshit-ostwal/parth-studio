"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import PsBlackLogo from "@/public/PsLogo.png"
import { Menu } from 'lucide-react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Navbar() {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="lg:flex items-center hidden justify-between w-[93%] py-2 md:py-6">
        <Link href={"/"} className="text-2xl font-semibold">
          <Image src={PsBlackLogo} width={110} alt="Parth Studio" quality={100} fetchPriority="high" loading="eager" />
        </Link>
        <div className="flex items-center gap-10 font-medium">
          <Link href={"/"} className="text-lg">Home</Link>
          <Link href={"/Portfolio"} className="text-lg">Gallery</Link>
          <Link href={"/Films"} className="text-lg">Films</Link>
          <Link href={"/PreWeddings"} className="text-lg">Pre Weddings</Link>
          <Link href={"/AboutUs"} className="text-lg">About</Link>
          <Link href={"/ReachUs"} className="hidden p-2 text-black rounded-full bg-neutral-200 md:block shrink-0 md:px-6 md:py-3">GET IN TOUCH</Link>
        </div>
      </div>
      <div className="flex items-center lg:hidden px-3 relative justify-between w-[93%] py-4">
        <div>
        </div>
        <Link href={"/"} className="ml-6 text-2xl">
          <Image src={PsBlackLogo} width={110} alt="Parth Studio" quality={100} fetchPriority="high" loading="eager" />
        </Link>
        <div>
          <Sheet>
            <SheetTrigger><Menu /></SheetTrigger>
            <SheetContent className="flex flex-col items-center justify-center gap-6">
              <SheetClose asChild>
                <Link href={"/"} className="text-lg">Home</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/Portfolio"} className="text-lg">Gallery</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/Films"} className="text-lg">Films</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/PreWeddings"} className="text-lg">Pre Weddings</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/AboutUs"} className="text-lg">About</Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href={"/ReachUs"} className="hidden p-2 text-black rounded-full bg-neutral-200 md:block shrink-0 md:px-6 md:py-3">GET IN TOUCH</Link>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div >
  )
}

export default Navbar