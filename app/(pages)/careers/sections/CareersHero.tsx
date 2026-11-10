"use client";

import clsx from "clsx";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

const trust = ["Adult personal support", "Pediatric nursing", "Care at home"];

export default function CareersHero() {
    return (
        <section className="relative overflow-hidden pt-[9rem] sm:pt-[11rem] pb-12 sm:pb-16 bg-cream dark:bg-darkBg dark:text-white border-b dark:border-white/10 border-black/5">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full blur-3xl bg-primary/15"
            />
            <div className="relative max-w-[1120px] mx-auto px-6">
                <InViewWrapper animation={fadeIn}>
                    <>
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-gray-500 dark:text-gray-400">
                            <ol className="flex flex-wrap items-center gap-2">
                                <li>
                                    <Link href="/" className="hover:text-primary smooth">
                                        Home
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li>
                                    <Link href="/careers" className="hover:text-primary smooth">
                                        Careers
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li className="text-gray-700 dark:text-gray-200">Apply</li>
                            </ol>
                        </nav>

                        <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.15em] text-primary">
                            Good care starts with good people
                        </span>

                        <h1
                            className={clsx(
                                FontFamily.className,
                                "mt-2 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.03] tracking-tight max-w-[780px] font-semibold text-gray-900 dark:text-white"
                            )}
                        >
                            A career in care.
                            <br />
                            <span className="text-primary">A difference every day.</span>
                        </h1>

                        <p className="mt-4 max-w-[720px] text-base sm:text-lg text-muted dark:text-gray-400">
                            Apply to join AmeriCare and support children, adults, and families in the comfort of home. We&apos;re looking for
                            compassionate, dependable CNAs, PCAs, family caregivers, RNs, and LPNs across Georgia.
                        </p>

                        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs sm:text-[13px] font-bold text-gray-700 dark:text-gray-300">
                            {trust.map((item) => (
                                <li key={item} className="flex items-center gap-1.5">
                                    <span aria-hidden="true" className="text-primary">
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8">
                            <a
                                href="#application"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 sm:px-8 py-3 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                            >
                                Apply Now
                            </a>
                        </div>
                    </>
                </InViewWrapper>
            </div>
        </section>
    );
}
