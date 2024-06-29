"use client"

import { useInView } from "react-intersection-observer";
import { Playfair_Display } from "next/font/google";
import clsx from "clsx";
import ScrollToTop from "react-scroll-to-top";
import NavigationComponent from "../components/NavSection";
import CustomBtn from "../components/CustomBtn";
import { useEffect, useRef } from "react";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function HeroSection() {

    const [containerRef, inViewContainer] = useInView({ threshold: 0.75 });
    const videoRef = useRef<HTMLVideoElement | null>(null);

  const preventFullscreen = (event: Event) => {
    event.preventDefault();
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
      const videoElement = videoRef.current;
      
    if(!videoElement) return;

    videoElement.addEventListener('webkitbeginfullscreen', preventFullscreen);
    document.addEventListener('fullscreenchange', preventFullscreen);
    document.addEventListener('webkitfullscreenchange', preventFullscreen);
    document.addEventListener('mozfullscreenchange', preventFullscreen);
    document.addEventListener('msfullscreenchange', preventFullscreen);

    return () => {
      videoElement.removeEventListener('webkitbeginfullscreen', preventFullscreen);
      document.removeEventListener('fullscreenchange', preventFullscreen);
      document.removeEventListener('webkitfullscreenchange', preventFullscreen);
      document.removeEventListener('mozfullscreenchange', preventFullscreen);
      document.removeEventListener('msfullscreenchange', preventFullscreen);
    };
  }, []);

    return (
        <>
            <ScrollToTop smooth className="grid place-items-center hover:bg-primary active:scale-90 smooth" style={{zIndex: 100}} />
            <NavigationComponent inViewContainer={inViewContainer} variation="home" />
            
            <div ref={containerRef} id="top" className="hero pb-[12vw] pt-[7.5vw] isolate relative z-10 bg-primary/25 dark:bg-darkBg dark:text-white text-black after:bg-white dark:after:bg-darkBg">
                <div className="absolute top-0 left-0 w-full h-full">
                    <video
                        src={"https://americare.sirv.com/bg-video.mp4"}
                        height={1000}
                        controls={false}
                        width={1000}
                        ref={videoRef}
                        className="w-full h-full object-cover opacity-40"
                        autoPlay
                        loop
                        muted
                    />
                </div>

                <div className="relative sm:min-h-[calc(48vh)] min-h-[calc(100vh-10rem)] max-w-[1400px] my-0 mx-auto py-0 px-[3em] flex flex-col items-center z-30 justify-center text-center">
                    <span className={clsx(FontFamily.className, "2xl:text-5xl sm:text-4xl text-2xl drop-shadow-md opacity-80")}>AmeriCare</span>
                    <span className="pt-2 pb-1 2xl:text-7xl sm:text-5xl text-4xl drop-shadow-md font-semibold">Compassionate Care, Right at Home.</span>
                    <span className="2xl:text-2xl mb-10 sm:text-xl text-lg opacity-60 drop-shadow-md">With AmeriCare, You&apos;ll Never Walk Alone</span>
                    <CustomBtn
                        linkHref="/book-an-appointment"
                        text="Book an Appointment"
                        noBorder
                        inHero
                        customClass="sm:py-5 py-4"
                    />
                </div>
                <div className="absolute top-[-0.1%] left-0 w-full h-[100.2%] z-10 bg-green-800/25"></div>
            </div>
        </>
    )
}