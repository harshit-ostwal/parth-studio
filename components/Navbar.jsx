"use client"
import React, { useState } from 'react'
import LogoBlack from '@/public/logo/psblack.png'
import LogoWhite from '@/public/logo/ps.png'
import Link from 'next/link'
import Image from 'next/image'
import { Grip, User2, X } from 'lucide-react'
import SidebarData from './Data/Sidebar'
import SocailMediaIcon from './Data/SocialMedia'

export default function Navbar() {

    //Menu State Using Boolean
    const [Menu, setMenu] = useState(false);


    //Toggle True/False For Sidebar Navigation
    const Toggle = () => {
        setMenu(!Menu);
    }

    return (
        <>
            {/* Navbar Which Contains Logo And Navigation Bar */}
            <div className="w-full h-32 bg-white flex p-7 lg:p-20 items-center">

                {/* Menu Button in the Left */}
                <button onClick={Toggle} className="w-6 h-6"><Grip size={24} color='black' /></button>

                {/* Logo in the Center */}
                <div className="flex-1 flex justify-center items-center">
                    <Link href={"/"}>
                        <Image
                            src={LogoBlack}
                            alt='Parth Studio'
                            quality={100}
                            width={100}
                        />
                    </Link>
                </div>

                {/* User Button in the Right */}
                <button className="w-6 h-6" ><User2 size={24} color='black' /></button>
            </div>

            {/* Sidebar Navigation */}
            <div
                //Sidebar CSS
                className={
                    Menu ? "fixed h-full z-50 left-0 top-0 w-[100%] sm:w-[70%] md:w-[25%] flex flex-col transition-all duration-1000 ease-in-out p-8 bg-slate-950" : "fixed z-50 left-[-100%] w-[100%] sm:w-[70%] md:w-[25%] top-0 flex flex-col transition-all duration-1000 ease-in-out p-8 h-full bg-slate-950"
                }>

                <div className="flex">
                    <div className="flex flex-1 justify-center">
                        {/* Sidebar Navigation Logo In The Center */}
                        <Link href={"/"} className="ml-8">
                            <Image
                                src={LogoWhite}
                                alt='Parth Studio'
                                quality={100}
                                width={100}
                                height={100}
                            />
                        </Link>
                    </div>
                    {/* Sidebar Navigation Close Button In The Right */}
                    <button onClick={Toggle} className="flex items-center justify-end"><X color='white' className="w-6 h-6 xl:w-8 xl:h-8" /></button>
                </div>
                {/* Sidebar Navigation Routes */}
                <div className="flex flex-1 flex-col justify-start mt-10 md:mt-20 items-center gap-4">
                    {SidebarData.map((Data) => (
                        <Link className="font-Oregano tracking-widest text-slate-400 text-2xl font-semibold" onClick={Toggle} key={Data.id} href={Data.href}>{Data.title}</Link>
                    ))}
                </div>

                {/* Sidebar Social Media Icons */}
                <div className="flex gap-2 text-slate-400 items-center justify-center">
                    {SocailMediaIcon.map((Icons) => (
                        <Link key={Icons.id} href={Icons.href}>{Icons.icon}</Link>
                    ))}
                </div>
            </div>
        </>
    )
}
