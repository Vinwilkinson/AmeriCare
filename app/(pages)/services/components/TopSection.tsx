"use client";

import clsx from "clsx";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import CustomBtn from "@/app/components/CustomBtn";
import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";
import ScrollToTop from "react-scroll-to-top";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function TopSection() {
    return (
        <>
            <ScrollToTop
                smooth
                className="grid place-items-center hover:bg-primary active:scale-90 smooth"
                style={{ zIndex: 100 }}
            />

            <section className="relative overflow-hidden bg-white dark:bg-darkBg dark:text-white pt-[9rem] sm:pt-[11rem] pb-16 sm:pb-24">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl dark:bg-primary/10"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-52 -left-40 h-[28rem] w-[28rem] rounded-full bg-secondary/10 blur-3xl dark:bg-secondary/10"
                />

                <div className="relative 2xl:px-[10vw] sm:px-[8vw] px-6">
                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
                        {/* Copy */}
                        <InViewWrapper animation={cardInAlt} className="flex flex-col gap-6">
                            <>
                                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#3d7a26] dark:text-primary">
                                    In-Home Care &amp; Support
                                </span>

                                <h1
                                    className={clsx(
                                        FontFamily.className,
                                        "text-4xl sm:text-5xl xl:text-[4.25rem] leading-[1.05] tracking-tight text-balance"
                                    )}
                                >
                                    <span className="text-gray-900 dark:text-white">Our </span>
                                    <span className="text-primary">Services</span>
                                </h1>

                                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                    Home care helps people remain safely at home and live as independently as possible.
                                    We work with you to develop a plan that provides the best quality of care for you
                                    or your family member.
                                </p>

                                <div className="flex flex-wrap items-center gap-4 pt-1">
                                    <CustomBtn
                                        text="Check Care Options"
                                        linkHref="/check-care-options"
                                        inHero
                                        customClass="sm:!px-8"
                                    />
                                    <CustomBtn
                                        text="Speak with a Coordinator"
                                        linkHref="/speak-with-coordinator"
                                        customClass="sm:!px-8"
                                    />
                                </div>

                                <div className="flex flex-wrap gap-x-8 gap-y-3 pt-5 mt-1 border-t border-primary/15 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                                        State-Licensed &amp; ACHC Accredited
                                    </span>
                                    <span className="flex items-center gap-2">
                                        <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                                        GAPP · CCSP · SOURCE Medicaid Programs
                                    </span>
                                </div>
                            </>
                        </InViewWrapper>

                        {/* Hero image */}
                        <InViewWrapper animation={cardIn} className="relative">
                            <>
                                <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] border border-primary/10 shadow-[0_40px_70px_-50px_rgba(4,13,18,0.7)]">
                                    <Image
                                        src="https://americare.sirv.com/gallery/pexels-kampus-7551583.jpg"
                                        alt="Multigenerational family smiling together in the comfort of home"
                                        width={5636}
                                        height={3758}
                                        priority
                                        className="h-[20rem] sm:h-[26rem] lg:h-[34rem] w-full object-cover"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                                    />
                                </div>

                                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-2xl border border-white/60 dark:border-white/10 bg-white/95 dark:bg-darkBg/90 backdrop-blur px-4 py-3 shadow-sm">
                                    <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#3d7a26] dark:text-primary">
                                        AmeriCare Home Health
                                    </span>
                                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                                        Compassionate care, right at home
                                    </span>
                                </div>
                            </>
                        </InViewWrapper>
                    </div>
                </div>
            </section>
        </>
    );
}
