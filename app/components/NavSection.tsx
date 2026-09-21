"use client"

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useAnimation, Variants, motion } from "framer-motion";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa6";
import InViewWrapper from "./InViewWrapper";


export default function NavigationComponent({ variation, inViewContainer }: { variation?: "home", inViewContainer?: boolean }) {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [aboutOpen, setAboutOpen] = useState<boolean>(false);

    const controls = useAnimation();

    const nav_Variants: Variants = {
        hidden: { translateX: "100vw" },
        visible: { translateX: "0" },
    }

    useEffect(() => {
        if (isNavOpen) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, isNavOpen]);

    const handleClick = () => {
        setIsNavOpen(!isNavOpen);
    }

    const fadeIn: Variants = {
        hidden: { opacity: 0, translateY: -50 },
        visible: { opacity: 1, translateY: 0, transition: { duration: 0.5 } },
    };

    const isActive = (path: string) => pathname === path;
    const isAboutActive = pathname === "/why-us" || pathname === "/testimonials";

    return (
        <>
            <InViewWrapper animation={fadeIn} className={clsx(
                "flex items-center justify-between fixed top-0 left-0 z-50 w-screen py-5 sm:px-9 px-4",
                inViewContainer ? "" : "backdrop-blur dark:bg-white/5 bg-primary/5 border-b dark:border-b-white/10 border-b-primary/10"
            )}>
                {/* Logo */}
                <Link href={"/"} className="flex text-black dark:text-white gap-2 items-center shrink-0">
                    <Image
                        src={"https://americare.sirv.com/icons/logo-alone-colour.svg"}
                        alt="AmeriCare Logo"
                        height={300}
                        width={300}
                        priority
                        className="sm:w-12 w-12 smooth"
                    />
                    <span className="sm:text-3xl text-xl md:block sm:hidden block">AmeriCare</span>
                </Link>

                {/* Nav links — centered */}
                <nav className={clsx(
                    "hidden lg:flex items-center justify-center gap-1 h-fit dark:text-white text-black text-lg",
                    variation && inViewContainer ? "text-white" : ""
                )}>
                    <Link className={clsx(
                        "px-4 py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/"}>Home</Link>
                    <Link className={clsx(
                        "px-4 py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/services") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/services"}>Services</Link>

                    {/* About dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setAboutOpen(true)}
                        onMouseLeave={() => setAboutOpen(false)}
                    >
                        <button className={clsx(
                            "px-4 py-2 border-b-2 whitespace-nowrap hover:text-primary smooth flex items-center gap-1 cursor-pointer",
                            isAboutActive ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                        )}>
                            About <FaChevronDown className={clsx("text-xs transition-transform", aboutOpen && "rotate-180")} />
                        </button>
                        {aboutOpen && (
                            <div className="absolute top-full left-0 mt-1 bg-white dark:bg-darkBg border border-black/10 dark:border-white/10 rounded-xl shadow-xl py-2 min-w-[180px] z-50">
                                <Link className={clsx(
                                    "block px-5 py-2.5 hover:bg-primary/10 hover:text-primary smooth",
                                    isActive("/why-us") && "text-primary font-semibold"
                                )} href={"/why-us"}>Why AmeriCare</Link>
                                <Link className={clsx(
                                    "block px-5 py-2.5 hover:bg-primary/10 hover:text-primary smooth",
                                    isActive("/testimonials") && "text-primary font-semibold"
                                )} href={"/testimonials"}>Testimonials</Link>
                            </div>
                        )}
                    </div>

                    <Link className={clsx(
                        "px-4 py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/careers") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/careers"}>Career</Link>
                    <Link className={clsx(
                        "px-4 py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/resources") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/resources"}>Resources</Link>
                </nav>

                {/* CTAs */}
                <div className="flex justify-end gap-2 items-center shrink-0">
                    <CustomBtn
                        text="Check Care Options"
                        linkHref="/check-care-options"
                        noBorder={true}
                        inHero
                        inView={inViewContainer}
                        customClass={clsx(
                            inViewContainer ? "border-transparent outline-black text-black" : "",
                            "max-sm:hidden sm:!px-6"
                        )}
                    />
                    <CustomBtn
                        text="Speak with Coordinator"
                        linkHref="tel:4044942187"
                        noBorder={true}
                        external
                        inView={inViewContainer}
                        customClass={clsx(
                            inViewContainer ? "border-transparent outline-black text-black" : "",
                            "max-sm:hidden sm:!px-6"
                        )}
                    />

                    {/* Mobile hamburger */}
                    <div className={clsx(
                        "hidden h-5 place-items-center max-lg:grid gap-2 cursor-pointer active:scale-90 smooth relative",
                        inViewContainer && "invert brightness-0"
                    )} onClick={handleClick}>
                        <div className={clsx(
                            "top-0 origin-left absolute left-0 w-9 h-[3px] smooth",
                            isNavOpen ? "rotate-45 translate-x-1 -translate-y-1 bg-primary" : "dark:bg-white bg-black"
                        )}></div>
                        <div className={clsx("left-0 w-9 h-[3px] smooth", isNavOpen ? "bg-primary translate-x-5 scale-x-[1.5]" : "dark:bg-white bg-black")}></div>
                        <div className={clsx(
                            "bottom-0 origin-right absolute left-0 w-9 h-[3px] smooth",
                            isNavOpen ? "-rotate-45 -translate-x-2 -translate-y-5 bg-primary" : "dark:bg-white bg-black"
                        )}></div>
                    </div>
                </div>
            </InViewWrapper>

            {/* Mobile nav */}
            <motion.div
                variants={nav_Variants}
                transition={{ duration: 0.25 }}
                animate={controls}
                initial={"hidden"}
                className="fixed smooth top-0 right-0 z-[49] h-screen w-screen dark:bg-black/50 bg-white/50 backdrop-blur-md hidden max-lg:grid place-items-center dark:text-white text-black"
            >
                <div className="grid gap-3 text-xl">
                    <Link className={clsx(
                        "px-5 origin-right py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/"}>Home</Link>
                    <Link className={clsx(
                        "px-5 origin-right py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/services") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/services"}>Services</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/why-us") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/why-us"}>Why AmeriCare</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/testimonials") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/testimonials"}>Testimonials</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/careers") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/careers"}>Career</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        isActive("/resources") ? "font-semibold border-b-primary/70 text-primary" : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/resources"}>Resources</Link>
                </div>
            </motion.div>
        </>
    )
}
