"use client"

import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useAnimation, Variants, motion } from "framer-motion";
import Image from "next/image";
import CustomBtn from "./CustomBtn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhone } from "react-icons/fa6";
import InViewWrapper from "./InViewWrapper";


export default function NavigationComponent({ variation, inViewContainer }: { variation?: "home", inViewContainer?: boolean }) {
    const pathname = usePathname();
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

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


    return (
        <>
            <InViewWrapper animation={fadeIn} className={clsx(
                "grid grid-cols-[1fr_auto_1fr] max-xl:grid-cols-[auto_1fr] items-center fixed top-0 left-0 z-50 w-screen py-5 sm:px-9 px-4",
                inViewContainer ? "" : "backdrop-blur dark:bg-white/5 bg-primary/5 border-b dark:border-b-white/10 border-b-primary/10"
            )}>
                <>
                    <Link href={"/"} className="flex text-black dark:text-white gap-2 items-center">
                        <Image
                            src={"https://americare.sirv.com/icons/logo-alone-colour.svg"}
                            alt="AmeriCare Logo"
                            height={300}
                            width={300}
                            priority
                            className={clsx(
                                "sm:w-16 w-16 smooth",
                            )}
                        />
                        <span className="sm:text-3xl text-xl md:block sm:hidden block">AmeriCare</span>
                    </Link>

                    <div className={clsx(
                        "flex max-xl:hidden items-end gap-1 h-fit dark:text-white text-black 2xl:text-lg",
                        variation && inViewContainer ? "text-white" : ""
                    )}>
                        <Link className={clsx(
                            "2xl:px-7 px-5 origin-right py-2 border-b-2 whitespace-nowrap active:-rotate-6 hover:text-primary smooth",
                            pathname === "/" ? ("font-semibold -rotate-6 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                        )} href={"/"}>Home</Link>
                        <Link className={clsx(
                            "2xl:px-7 px-5 origin-right py-2 border-b-2 whitespace-nowrap active:-rotate-3 hover:text-primary smooth",
                            pathname === "/services" ? ("font-semibold -rotate-3 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                        )} href={"/services"}>Services</Link>
                        <Link className={clsx(
                            "2xl:px-7 px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                            pathname === "/why-us" ? ("font-semibold border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                        )} href={"/why-us"}>Why Americare</Link>
                        <Link className={clsx(
                            "2xl:px-7 px-5 origin-left py-2 border-b-2 whitespace-nowrap active:rotate-3 hover:text-primary smooth",
                            pathname === "/testimonials" ? ("font-semibold rotate-3 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                        )} href={"/testimonials"}>Testimonials</Link>
                        <Link className={clsx(
                            "2xl:px-7 px-5 origin-left py-2 border-b-2 whitespace-nowrap active:rotate-6 hover:text-primary smooth",
                            pathname === "/careers" ? ("font-semibold rotate-6 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                        )} href={"/careers"}>Career</Link>
                    </div>

                    <div className="flex justify-end gap-3 items-center">
                        <CustomBtn
                            text="404-494-2187"
                            linkHref="tel:4044942187"
                            noBorder={true}
                            inHero={variation === "home"}
                            icon={(<FaPhone />)}
                            customClass={clsx(
                                inViewContainer ? "border-transparent outline-black text-black" : "",
                                "max-lg:hidden"
                            )}
                        />
                        <CustomBtn
                            text="Book an Appointment"
                            linkHref="/book-an-appointment"
                            noBorder={true}
                            inHero
                            inView={inViewContainer}
                            customClass={clsx(
                                inViewContainer ? "border-transparent outline-black text-black" : "",
                                "max-sm:hidden"
                            )}
                        />

                        <div className={clsx(
                            "hidden h-5 place-items-center max-xl:grid gap-2 cursor-pointer active:scale-90 smooth relative",
                            inViewContainer && "invert brightness-0"
                        )}

                            onClick={handleClick}
                        >
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
                </>
            </InViewWrapper>

            {/* Mobile nav */}
            <motion.div
                variants={nav_Variants}
                transition={{ duration: 0.25 }}
                animate={controls}
                initial={"hidden"}
                className="fixed smooth top-0 right-0 z-[49] h-screen w-screen dark:bg-black/50 bg-white/50 backdrop-blur-md hidden max-xl:grid place-items-center dark:text-white text-black"
            >
                <div className="grid gap-3 text-xl">
                    <Link className={clsx(
                        "2xl:px-7 px-5 origin-right py-2 border-b-2 whitespace-nowrap active:-rotate-6 hover:text-primary smooth",
                        pathname === "/" ? ("font-semibold -rotate-6 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/"}>Home</Link>
                    <Link className={clsx(
                        "px-5 origin-right py-2 border-b-2 whitespace-nowrap active:-rotate-3 hover:text-primary smooth",
                        pathname === "/services" ? ("font-semibold -rotate-3 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/services"}>Services</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap hover:text-primary smooth",
                        pathname === "/why-us" ? ("font-semibold border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/why-us"}>Why Americare</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap active:rotate-3 hover:text-primary smooth",
                        pathname === "/testimonials" ? ("font-semibold rotate-3 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/testimonials"}>Testimonials</Link>
                    <Link className={clsx(
                        "px-5 origin-left py-2 border-b-2 whitespace-nowrap active:rotate-6 hover:text-primary smooth",
                        pathname === "/careers" ? ("font-semibold rotate-6 border-b-primary/70 text-primary") : "border-b-transparent hover:border-b-primary/25"
                    )} href={"/careers"}>Career</Link>
                </div>
            </motion.div>
        </>
    )
}
