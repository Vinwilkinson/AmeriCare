"use client"

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useAnimation, Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronDown, FaArrowRight } from "react-icons/fa6";
import InViewWrapper from "./InViewWrapper";


export default function NavigationComponent({ variation, inViewContainer }: { variation?: "home", inViewContainer?: boolean }) {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const [aboutOpen, setAboutOpen] = useState<boolean>(false);
    const [servicesOpen, setServicesOpen] = useState<boolean>(false);

    const controls = useAnimation();
    const isHome = variation === "home";

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
    const isAboutActive = pathname === "/why-us" || pathname.startsWith("/why-us/") || pathname === "/testimonials";
    const isServicesActive = pathname === "/services" || pathname.startsWith("/services/");

    return (
        <>
            <InViewWrapper animation={fadeIn} className={clsx(
                "flex items-center justify-between fixed top-0 left-0 z-50 w-screen sm:py-4 py-3 sm:px-9 px-4",
                isHome
                    ? "bg-cream/95 backdrop-blur-md border-b border-[#e1e8e1]"
                    : inViewContainer
                        ? ""
                        : "backdrop-blur dark:bg-white/5 bg-primary/5 border-b dark:border-b-white/10 border-b-primary/10"
            )}>
                <>
                {/* Logo */}
                <Link href={"/"} className={clsx("flex text-forest gap-2 items-center shrink-0", !isHome && "dark:text-white")}>
                    <Image
                        src={"https://americare.sirv.com/icons/logo-alone-colour.svg"}
                        alt="AmeriCare Logo"
                        height={300}
                        width={300}
                        priority
                        className="sm:w-11 w-10 smooth"
                    />
                    <span className="sm:text-[1.7rem] text-xl font-extrabold tracking-tight md:block sm:hidden block">AmeriCare</span>
                </Link>

                {/* Nav links — centered */}
                <nav className={clsx(
                    "hidden lg:flex items-center justify-center gap-1 h-fit text-[#405148] text-[0.95rem] font-semibold",
                    isHome ? "" : clsx("dark:text-white", variation && inViewContainer && "text-white")
                )}>
                    <Link className={clsx(
                        "px-3.5 py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth",
                        isActive("/") ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/30"
                    )} href={"/"}>Home</Link>
                    {/* Services dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                        onFocus={() => setServicesOpen(true)}
                        onBlur={() => setServicesOpen(false)}
                    >
                        <Link
                            className={clsx(
                                "px-3.5 py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth flex items-center gap-1",
                                isServicesActive ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/30"
                            )} href={"/services"}
                        >
                            Services <FaChevronDown className={clsx("text-xs transition-transform", servicesOpen && "rotate-180")} />
                        </Link>
                        {servicesOpen && (
                            <div className={clsx(
                                "absolute top-full left-0 mt-1 bg-white border border-black/10 rounded-xl shadow-xl py-2 min-w-[250px] z-50",
                                !isHome && "dark:bg-darkBg dark:border-white/10"
                            )}>
                                <Link className={clsx(
                                    "block px-5 py-2.5 hover:bg-mint hover:text-forest smooth",
                                    isActive("/services") && "text-leaf font-semibold"
                                )} href={"/services"}>General</Link>
                                <Link className={clsx(
                                    "block px-5 py-2.5 hover:bg-mint hover:text-forest smooth",
                                    isActive("/services/ccsp-source") && "text-leaf font-semibold"
                                )} href={"/services/ccsp-source"}>For Adults · CCSP/SOURCE</Link>
                                <Link className={clsx(
                                    "block px-5 py-2.5 hover:bg-mint hover:text-forest smooth",
                                    isActive("/services/gapp") && "text-leaf font-semibold"
                                )} href={"/services/gapp"}>For Kids · GAPP</Link>
                            </div>
                        )}
                    </div>

                    {/* About dropdown */}
                    <div
                        className="relative"
                        onMouseEnter={() => setAboutOpen(true)}
                        onMouseLeave={() => setAboutOpen(false)}
                    >
                        <button className={clsx(
                            "px-3.5 py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth flex items-center gap-1 cursor-pointer",
                            isAboutActive ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/30"
                        )}>
                            About <FaChevronDown className={clsx("text-xs transition-transform", aboutOpen && "rotate-180")} />
                        </button>
                        {aboutOpen && (
                            <div className={clsx(
                                "absolute top-full left-0 mt-1 bg-white border border-black/10 rounded-xl shadow-xl py-2 min-w-[180px] z-50",
                                !isHome && "dark:bg-darkBg dark:border-white/10"
                            )}>
                                <Link className={clsx(
                                    "block px-5 py-2.5 hover:bg-mint hover:text-forest smooth",
                                    isActive("/why-us") && "text-leaf font-semibold"
                                )} href={"/why-us"}>Why AmeriCare</Link>
                                <Link className={clsx(
                                    "block px-5 py-2.5 hover:bg-mint hover:text-forest smooth",
                                    isActive("/why-us/team") && "text-leaf font-semibold"
                                )} href={"/why-us/team"}>Meet Our Team</Link>
                                <Link className={clsx(
                                    "block px-5 py-2.5 hover:bg-mint hover:text-forest smooth",
                                    isActive("/testimonials") && "text-leaf font-semibold"
                                )} href={"/testimonials"}>Testimonials</Link>
                            </div>
                        )}
                    </div>

                    <Link className={clsx(
                        "px-3.5 py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth",
                        isActive("/careers") ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/30"
                    )} href={"/careers"}>Careers</Link>
                    <Link className={clsx(
                        "px-3.5 py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth",
                        isActive("/resources") ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/30"
                    )} href={"/resources"}>Resources</Link>
                </nav>

                {/* CTAs */}
                <div className="flex justify-end gap-2 items-center shrink-0">
                    {isHome ? (
                        <>
                            <Link
                                href="/check-care-options"
                                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-forest text-white font-bold px-6 py-2.5 text-sm hover:bg-[#174528] smooth"
                            >
                                Check Care Options
                            </Link>
                            <Link
                                href="/speak-with-coordinator"
                                className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white text-forest border border-[#b9d4c0] font-bold px-6 py-2.5 text-sm hover:bg-mint smooth"
                            >
                                Speak With a Coordinator
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link
                                href="/check-care-options"
                                className={clsx(
                                    "hidden sm:inline-flex items-center gap-2 rounded-full font-bold px-6 py-2.5 text-sm smooth",
                                    inViewContainer
                                        ? "bg-white text-forest hover:bg-mint"
                                        : "bg-forest text-white hover:bg-[#174528]"
                                )}
                            >
                                Check Care Options
                            </Link>
                            <Link
                                href="/speak-with-coordinator"
                                className={clsx(
                                    "hidden sm:inline-flex items-center gap-2 rounded-full font-bold px-6 py-2.5 text-sm smooth",
                                    inViewContainer
                                        ? "bg-white/10 text-white border border-white/40 hover:bg-white/20"
                                        : "bg-white text-forest border border-[#b9d4c0] hover:bg-mint"
                                )}
                            >
                                Speak With a Coordinator
                            </Link>
                        </>
                    )}

                    {/* Mobile hamburger */}
                    <div className={clsx(
                        "hidden h-5 place-items-center max-lg:grid gap-2 cursor-pointer active:scale-90 smooth relative",
                        isHome ? "" : inViewContainer && "invert brightness-0"
                    )} onClick={handleClick}>
                        <div className={clsx(
                            "top-0 origin-left absolute left-0 w-9 h-[3px] smooth",
                            isNavOpen ? "rotate-45 translate-x-1 -translate-y-1 bg-leaf" : clsx("bg-forest", !isHome && "dark:bg-white")
                        )}></div>
                        <div className={clsx("left-0 w-9 h-[3px] smooth", isNavOpen ? "bg-leaf translate-x-5 scale-x-[1.5]" : clsx("bg-forest", !isHome && "dark:bg-white"))}></div>
                        <div className={clsx(
                            "bottom-0 origin-right absolute left-0 w-9 h-[3px] smooth",
                            isNavOpen ? "-rotate-45 -translate-x-2 -translate-y-5 bg-leaf" : clsx("bg-forest", !isHome && "dark:bg-white")
                        )}></div>
                    </div>
                </div>
                </>
            </InViewWrapper>

            {/* Mobile nav */}
            <motion.div
                variants={nav_Variants}
                transition={{ duration: 0.25 }}
                animate={controls}
                initial={"hidden"}
                className="fixed smooth top-0 right-0 z-[49] h-screen w-screen dark:bg-black/50 bg-white/50 backdrop-blur-md hidden max-lg:grid place-items-center dark:text-white text-forest"
            >
                <div className="grid gap-3 text-xl bg-white/95 dark:bg-darkBg/95 rounded-2xl p-8 shadow-2xl border border-[#e1e8e1] dark:border-white/10">
                    <Link onClick={handleClick} className={clsx(
                        "px-5 origin-right py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth",
                        isActive("/") ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/25"
                    )} href={"/"}>Home</Link>
                    <Link onClick={handleClick} className={clsx(
                        "px-5 origin-right py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth",
                        isServicesActive ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/25"
                    )} href={"/services"}>Services</Link>
                    <Link onClick={handleClick} className={clsx(
                        "pl-10 origin-right py-1 text-base whitespace-nowrap hover:text-leaf smooth",
                        isActive("/services/ccsp-source") ? "font-bold text-leaf" : "text-black/70 dark:text-white/70"
                    )} href={"/services/ccsp-source"}>For Adults · CCSP/SOURCE</Link>
                    <Link onClick={handleClick} className={clsx(
                        "pl-10 origin-right py-1 text-base whitespace-nowrap hover:text-leaf smooth",
                        isActive("/services/gapp") ? "font-bold text-leaf" : "text-black/70 dark:text-white/70"
                    )} href={"/services/gapp"}>For Kids · GAPP</Link>
                    <Link onClick={handleClick} className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth",
                        isAboutActive ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/25"
                    )} href={"/why-us"}>Why AmeriCare</Link>
                    <Link onClick={handleClick} className={clsx(
                        "pl-10 origin-right py-1 text-base whitespace-nowrap hover:text-leaf smooth",
                        isActive("/why-us/team") ? "font-bold text-leaf" : "text-black/70 dark:text-white/70"
                    )} href={"/why-us/team"}>Meet Our Team</Link>
                    <Link onClick={handleClick} className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth",
                        isActive("/testimonials") ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/25"
                    )} href={"/testimonials"}>Testimonials</Link>
                    <Link onClick={handleClick} className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth",
                        isActive("/careers") ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/25"
                    )} href={"/careers"}>Careers</Link>
                    <Link onClick={handleClick} className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-leaf smooth",
                        isActive("/resources") ? "font-bold border-b-leaf text-leaf" : "border-b-transparent hover:border-b-leaf/25"
                    )} href={"/resources"}>Resources</Link>
                    <Link
                        onClick={handleClick}
                        href="/check-care-options"
                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest text-white font-bold px-6 py-3 text-base"
                    >
                        Check Care Options <FaArrowRight />
                    </Link>
                    <Link
                        onClick={handleClick}
                        href="/speak-with-coordinator"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-mint text-forest border border-[#b9d4c0] font-bold px-6 py-3 text-base"
                    >
                        Speak With a Coordinator <FaArrowRight />
                    </Link>
                </div>
            </motion.div>
        </>
    )
}
