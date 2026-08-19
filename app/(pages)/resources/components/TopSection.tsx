"use client"
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import ScrollToTop from "react-scroll-to-top";

export default function TopSection() {
    return (
        <>
            <ScrollToTop smooth className="grid place-items-center hover:bg-primary active:scale-90 smooth" style={{zIndex: 100}} />
            <div className="dark:bg-darkBg dark:text-white bg-white pt-[10rem] pb-[6rem] grid-bg">
                <InViewWrapper animation={fadeIn} className="sm:px-[10rem] px-4 pb-[2rem] text-center flex flex-col items-center">
                    <div className="flex flex-col items-center">
                        <h1
                            className="text-primary font-semibold 2xl:max-w-[55vw] sm:max-[75vw] text-balance p-3 2xl:text-7xl sm:text-6xl text-4xl">
                            Resources for <span className="px-4 rounded-[5rem] border dark:border-white/10 border-primary/25 dark:bg-white/10 bg-primary/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-primary/25 smooth">Every Stage</span> of <span className="px-4 rounded-[5rem] border dark:border-white/10 border-primary/25 dark:bg-white/10 bg-primary/10 hover:-translate-y-2 hover:dark:bg-white/15 hover:bg-primary/25 smooth">Caregiving</span>
                        </h1>
                        <span className="flex items-center flex-col">
                            <span>
                                Supporting families with practical tools, education, and community resources designed to help you feel more informed, prepared, and supported.
                            </span>
                        </span>
                    </div>
                </InViewWrapper>
            </div>
        </>
    )
}
