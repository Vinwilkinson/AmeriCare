"use client"
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import ScrollToTop from "react-scroll-to-top";

export default function TopSection() {
    return (
        <>
            <ScrollToTop smooth className="grid place-items-center hover:bg-primary active:scale-90 smooth" style={{ zIndex: 100 }} />
            <InViewWrapper animation={fadeIn} className="dark:bg-darkBg dark:text-white bg-white grid-bg pt-[10rem] pb-[2rem]">
                <div className="sm:px-[10rem] px-4 pb-[2rem] text-center flex flex-col items-center">
                    <h1
                        className="text-primary font-semibold 2xl:max-w-[55vw] md:max-w-[75vw] w-[90vw] text-balance p-3 2xl:text-7xl sm:text-6xl text-4xl">
                        Meet Our <span className="px-4 rounded-[5rem] border dark:border-white/10 border-primary/25 dark:bg-white/10 bg-primary/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-primary/25 smooth">Team</span>
                    </h1>
                    <span className="flex items-center flex-col mt-6 max-w-3xl">
                        <span className="opacity-70">
                            The dedicated caregivers, nurses, and professionals behind AmeriCare — the people who bring compassion and quality care to every home.
                        </span>
                    </span>
                </div>
            </InViewWrapper>
        </>
    )
}
