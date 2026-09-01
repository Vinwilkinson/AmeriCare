"use client"

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lenis from '@studio-freight/lenis';
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import ScrollToTop from "react-scroll-to-top";
import NavigationComponent from "../../components/NavSection";
import CustomBtn from "../../components/CustomBtn";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function HeroSection() {
    const [itemScale, setItemScale] = useState<number>(1);
    const [itemMove, setItemMove] = useState<number>(14);
    const [itemOpacity, setItemOpacity] = useState<string>("1");

    useEffect(() => {
        const lenis = new Lenis();
        function raf(time: number) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf);
    }, []);

    const [containerRef, inViewContainer] = useInView({ threshold: 0.65 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (inViewContainer) {
                setItemScale((scrollTop * 0.0005) + 1);
                const adjustY = 14 - (10 * (scrollTop * 0.0015));
                if (adjustY > 0) {
                    setItemMove(adjustY);
                };
                setItemOpacity(`${1 - (scrollTop * 0.005)}`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [containerRef, inViewContainer]);

    return (
        <>
            <ScrollToTop smooth className="grid place-items-center hover:bg-primary active:scale-90 smooth" style={{ zIndex: 100 }} />
            <NavigationComponent inViewContainer={inViewContainer} variation="home" />

            <div ref={containerRef} id="top" className="pb-4 relative z-10 bg-white dark:bg-darkBg dark:text-white text-black">
                <div
                    className="grid place-items-center"
                >
                    <div className="relative">
                        <div
                            className="text-5xl font-semibold scale-110 text-center sm:mt-[33%] mt-[55%]"
                        >
                            <div
                                className="relative delay-75 smooth"
                            >
                                <p className="md:text-[2vw] text-2xl md:ml-0 flex w-fit flex-col sm:gap-1">
                                    <span>Consistently Kind, Every Time</span>
                                    <span>With Us, You&apos;ll Never Walk Alone</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute lg:bottom-10 lg:right-24 sm:text-lg text-sm text-white z-40 sm:max-w-md max-w-[90vw]"
                        style={{
                            transform: `translateY(${itemMove}rem)`,
                            opacity: `${(5 - itemMove) * 0.25}`
                        }}
                    >
                        <div className="p-4 w-full shadow-lg rounded-lg text-white lg:bg-white/10 bg-primary/30 lg:hover:bg-primary/25 hover:bg-primary/50 hover:animate-none smooth backdrop-blur-lg border-2 border-white/50 animate-floating after:h-24 after:w-24 after:rounded-full after:absolute after:-top-5 after:-left-5 after:bg-primary/25 after:border after:border-primary/25 after:-z-10">
                            <span>
                                At AmeriCare, we specialize in providing compassionate and dedicated home
                                healthcare services for both the young and the elderly.
                            </span>
                        </div>
                    </div>

                    <div className="w-full grid gap-6 mt-[5%] md:px-[10vw] sm:px-[5vw] px-4 2xl:grid-cols-[repeat(auto-fill,minmax(30rem,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]">
                        <div className="relative 2xl:h-[30rem] h-[25rem] rounded-lg overflow-hidden group">
                            <Image
                                src={"https://americare.sirv.com/pexels-rdne-5637731.jpg"}
                                alt="happy elderly couple"
                                height={5760}
                                width={3840}
                                priority
                                className="w-screen h-full object-cover delay-75 sm:grayscale-[50%] group-hover:grayscale-0 smooth"
                            />

                            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-primary to-transparent p-8 2xl:text-5xl text-3xl font-semibold">
                                Navigation the Golden Years.
                            </div>
                        </div>
                        <div className="relative 2xl:h-[30rem] h-[25rem] grid grid-rows-[1fr_auto] gap-4">
                            <div className="bg-gradient-to-bl to-green-700 from-primary text-center p-6 font-semibold 2xl:text-xl grid place-items-center rounded-lg relative h-full after:absolute after:top-[1%] after:left-[1%] after:h-[calc(98%)] after:w-[calc(98%)] dark:after:bg-darkBg after:bg-white after:rounded-lg">
                                <span className="z-10">
                                    At AmeriCare, we specialize in providing compassionate and dedicated home
                                    healthcare services for both the young and the elderly.
                                </span>
                            </div>
                            <div className="h-fit grid gap-4">
                                <CustomBtn
                                    linkHref="#"
                                    text="Contact us"
                                    customClass="w-full text-center"
                                />
                                <CustomBtn
                                    linkHref="#"
                                    text="Book Appointment"
                                    customClass="w-full text-center"
                                />
                            </div>
                        </div>
                        <div className="relative 2xl:h-[30rem] h-[25rem] rounded-lg overflow-hidden group">
                            <Image
                                src={"https://americare.sirv.com/pexels-ron-lach-10638078.jpg"}
                                alt="happy teens"
                                height={4761}
                                width={3174}
                                priority
                                className="w-screen h-full object-cover delay-75 sm:grayscale-[50%] group-hover:grayscale-0 smooth"
                            />

                            <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-primary to-transparent p-8 2xl:text-5xl text-3xl font-semibold">
                                Growing Wealth for the next Generation.
                            </div>
                        </div>
                    </div>

                    <div className="absolute w-full bottom-0 left-0 shadow-[0_-20vh_20vh_#6fad45] h-2"></div>
                </div>
            </div>
        </>
    )
}