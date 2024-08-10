"use client"
import React, { useState } from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SiteLinksData } from "@/data/siteLinks";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import Hamburger from 'hamburger-react';
import Ps from "@/public/Logo/PsLogo.png"

const Item = ({ title, href }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`group relative px-6 py-2 font-medium rounded-full transition-all ease-in-out ${pathname === href ? "" : "hover:bg-black/10"}`}>
            <AnimatePresence initial={false} mode="wait">
                {pathname === href && (
                    <motion.span
                        layoutId="bubble"
                        className="absolute inset-0 z-10 bg-black/10"
                        style={{ borderRadius: 9999 }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        key={title}
                    />
                )}
            </AnimatePresence>
            <p className="text-lg">{title}</p>
        </Link>
    );
};

function Header() {

    const [Menu, setMenu] = useState();

    const Toggle = () => {
        setMenu(!Menu);
    }

    return (
        <>
            <nav className="flex flex-row items-center justify-between w-full gap-4 p-5 lg:flex-col">
                <Link href={"/"}><Image src={Ps} width={140} fetchPriority="high" priority={true} quality={100} /></Link>
                <div className="items-center justify-center hidden h-10 px-3 py-8 space-x-2 border-2 border-solid rounded-full lg:flex border-white/20">
                    {SiteLinksData.map(({ title, href }) => (
                        <Item key={title} title={title} href={href} />
                    ))}
                </div>

                <button onClick={Toggle} className="flex items-center justify-center px-4 rounded-full lg:hidden outline">
                    <Hamburger duration={0.8} size={24} rounded toggled={Menu} toggle={setMenu} />
                </button>
            </nav>
        </>
    );
}

export default Header;