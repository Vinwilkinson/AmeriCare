"use client"

import { useInView } from "react-intersection-observer";
import { Figtree } from "next/font/google";
import clsx from "clsx";
import ScrollToTop from "react-scroll-to-top";
import NavigationComponent from "../components/NavSection";
import { useEffect, useRef, useState } from "react";
import { isIOS } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const FontFamily = Figtree({ subsets: ["latin"], weight: ["500", "600", "700", "800"] });

export default function HeroSection() {
  const [isIOSDevice, setIsIOSDevice] = useState<boolean>(false);

  useEffect(() => {
    setIsIOSDevice(isIOS());
  }, []);

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

    if (!videoElement) return;

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
      <ScrollToTop smooth className="grid place-items-center hover:bg-forest active:scale-90 smooth bg-leaf text-white rounded-full" style={{ zIndex: 100 }} />
      <NavigationComponent inViewContainer={inViewContainer} variation="home" />

      <div
        ref={containerRef}
        id="top"
        className={clsx(
          FontFamily.className,
          "hero pb-[12vw] pt-[7.5vw] isolate relative z-10 bg-cream text-forest after:bg-white"
        )}
      >
        <div className="absolute top-0 left-0 w-full h-full">
          {!isIOSDevice ?
            (<video
              src={"https://americare.sirv.com/bg-video.mp4"}
              height={1000}
              controls={false}
              width={1000}
              ref={videoRef}
              className="w-full h-full object-cover opacity-55"
              autoPlay
              loop
              muted
            />)
            :
            (<Image
              src={"https://americare.sirv.com/ios-bg.png"}
              alt="AmeriCare caregiver supporting a client at home"
              height={2160}
              width={3840}
              className="w-full h-full object-cover opacity-55"
            />)
          }
        </div>

        {/* White/cream fades so text stays readable on any background */}
        <div className="absolute inset-0 z-[5] bg-gradient-to-b from-cream/95 via-cream/40 to-cream/80" />
        <div className="absolute inset-0 z-[6] bg-[radial-gradient(ellipse_70%_55%_at_50%_42%,rgba(250,249,245,0.92)_0%,rgba(250,249,245,0.55)_42%,rgba(250,249,245,0)_72%)]" />

        <div className="relative sm:min-h-[calc(48vh)] min-h-[calc(100vh-10rem)] max-w-[1100px] my-0 mx-auto py-0 px-[1.5rem] flex flex-col items-center z-30 justify-center text-center">
          <h1 className="text-forest font-extrabold tracking-[-0.03em] leading-[1.05] text-balance sm:text-[clamp(2.75rem,6vw,4.75rem)] text-[clamp(2.25rem,9vw,3rem)]">
            Care that feels like home
          </h1>
          <p className="pt-4 pb-2 max-w-[38rem] text-ink/90 font-medium leading-relaxed sm:text-[clamp(1.05rem,2vw,1.45rem)] text-[1.05rem]">
            Compassionate in-home care for children and adults,
            <br className="hidden sm:block" />
            {" "}with support your family can count on.
          </p>
          <div className="flex gap-3 flex-wrap justify-center mt-8">
            <Link
              href="/check-care-options"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-forest text-white font-bold sm:px-8 sm:py-4 px-6 py-3.5 text-[0.95rem] sm:text-base shadow-[0_8px_24px_rgba(32,87,53,0.22)] hover:bg-[#174528] hover:-translate-y-0.5 active:translate-y-0 smooth"
            >
              Check Care Options
              <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/speak-with-coordinator"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-mint text-forest border border-[#b9d4c0] font-bold sm:px-8 sm:py-4 px-6 py-3.5 text-[0.95rem] sm:text-base hover:bg-white hover:border-leaf smooth"
            >
              Speak With a Coordinator
              <FaArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
