"use client"

import clsx from "clsx";
import { useAnimation, Variants, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

import { Macondo } from "next/font/google";
import Image from "next/image";
const FontFamily = Macondo({ subsets: ["latin"], weight: "400" });


export default function NavigationCoponent() {
    const mainContainerRef = useRef<HTMLDivElement>(null);
    const [topPosition, setTopPosition] = useState<string>("0");
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const controls = useAnimation();

    
    const topVariants = useMemo((): Variants =>( {
        visible: { top: "0" },
        hidden: { top: topPosition },
    }), [topPosition]);

    useEffect(() => {
        if (isNavOpen) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, isNavOpen, topVariants]);

    useEffect(() => {
        if (!mainContainerRef.current) return;

        setTopPosition(`-${mainContainerRef.current.clientHeight}px`);
    }, [mainContainerRef]);


    const handleClick = () => {
        setIsNavOpen(!isNavOpen);
    }
    return (
        <div className="fixed left-0 top-0 z-50 w-full overflow-hidden">
            <motion.div 
                className="w-full flex flex-col items-center relative"
                animate={controls}
                // initial="hidden"
                variants={topVariants}
                transition={{ duration: 0.25 }}
            >

                <div ref={mainContainerRef} className={clsx(FontFamily.className, "p-12 px-32 text-white bg-[#222222] rounded-b-[3rem] w-full shadow-xl")}>
                    <div className="flex gap-24 justify-center capitalize font-thin">
                        <div className="flex gap-10 items-center hover:animate-pulse cursor-pointer">
                            <span className="text-5xl opacity-50">Units</span>
                            <div className="h-[2px] w-20 bg-white"></div>
                        </div>
                        <div className="flex gap-10 items-center hover:animate-pulse cursor-pointer">
                            <span className="text-5xl opacity-50">facilities</span>
                            <div className="h-[2px] w-20 bg-white"></div>
                        </div>
                        <div className="flex gap-10 items-center hover:animate-pulse cursor-pointer">
                            <span className="text-5xl opacity-50">About</span>
                            <div className="h-[2px] w-20 bg-white"></div>
                        </div>
                        <div className="flex gap-10 items-center hover:animate-pulse cursor-pointer">
                            <span className="text-5xl opacity-50">Contact</span>
                            <div className="h-[2px] w-20 bg-white"></div>
                        </div>
                    </div>
                </div>
                <div onClick={handleClick} className="p-3 px-5 bg-[#222222] rounded-b-xl cursor-pointer grid gap-1 shadow-xl">
                    <div className={clsx(
                        "h-[2px] bg-white smooth-menu",
                        isNavOpen ? "w-6 -rotate-[30deg] -translate-y-0 -translate-x-[10px]" : "w-12",
                    )}></div>
                    <div className={clsx(
                        "h-[2px] w-12 bg-white ",
                        isNavOpen ? "hidden" : "block",
                    )}></div>
                    <div className={clsx(
                        "h-[2px] bg-white smooth-menu",
                        isNavOpen ? "w-6 rotate-[30deg] -translate-y-[6px] translate-x-[10px]" : "w-12",
                    )}></div>
                </div>

                {!!(!isNavOpen) && <div className="pointer-events-none select-none text-white flex flex-col gap-2 items-center py-6 animate-bounce mix-blend-multiply">
                    <span className="animate-dangle opacity-60">
                        Click to Navigate
                    </span>
                </div>}
            </motion.div>
        </div>
    )
}