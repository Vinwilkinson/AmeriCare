"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn, fadeIn } from "@/lib/AnimationVariants";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

const roleChips = [
    { abbr: "CNA", label: "Nurse aide" },
    { abbr: "PCA", label: "Personal care" },
    { abbr: "Family Caregiver", label: "Care for a loved one" },
    { abbr: "RN", label: "Registered nurse" },
    { abbr: "LPN", label: "Practical nurse" },
];

const toc = [
    { id: "why-choose-a-career-in-home-care", label: "Why home care" },
    { id: "explore-our-care-roles", label: "Care roles" },
    { id: "documents-to-prepare-for-hiring-and-onboarding", label: "Hiring checklist" },
    { id: "what-happens-after-you-apply", label: "Hiring process" },
    { id: "new-to-healthcare-explore-training-options", label: "Local training" },
    { id: "frequently-asked-questions", label: "FAQs" },
    { id: "application", label: "Apply" },
];

const trust = ["Adult personal support", "Pediatric nursing", "Care at home"];

export default function CareersHero() {
    return (
        <section className="relative overflow-hidden pt-[9rem] sm:pt-[11rem] pb-14 sm:pb-20 bg-[#f4f8ef] dark:bg-darkBg dark:text-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full blur-3xl bg-primary/15"
            />
            <div className="relative 2xl:px-[10vw] sm:px-[8vw] px-6">
                <InViewWrapper animation={fadeIn} className="mb-10 sm:mb-14">
                    <>
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            <ol className="flex flex-wrap items-center gap-2">
                                <li className="flex items-center gap-2">
                                    <Link href="/" className="hover:text-primary smooth">
                                        Home
                                    </Link>
                                </li>
                                <li aria-hidden="true">/</li>
                                <li className="text-gray-700 dark:text-gray-200">Careers</li>
                                <li aria-hidden="true">/</li>
                                <li className="text-gray-700 dark:text-gray-200">Georgia Home Care &amp; Nursing</li>
                            </ol>
                        </nav>

                        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                            <div className="flex flex-col gap-5">
                                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#3d7a26] dark:text-primary">
                                    Good care starts with good people
                                </span>

                                <h1
                                    className={clsx(
                                        FontFamily.className,
                                        "text-4xl sm:text-5xl xl:text-[4rem] leading-[1.05] tracking-tight text-balance"
                                    )}
                                >
                                    <span className="text-gray-900 dark:text-white">A career in care.</span>{" "}
                                    <span className="text-primary">A difference every day.</span>
                                </h1>

                                <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
                                    Find your place in home care.
                                </p>

                                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                    Home care careers in Georgia for CNAs, PCAs, family caregivers, RNs, and LPNs. Bring your compassion and
                                    dependability to families who need support at home—or explore getting paid to care for your own loved one.
                                </p>

                                <div className="flex flex-wrap items-center gap-4 pt-1">
                                    <a
                                        href="#application"
                                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 sm:px-8 py-3 text-sm font-semibold text-white smooth active:scale-90 hover:opacity-90"
                                    >
                                        Apply to AmeriCare <span aria-hidden="true">↗</span>
                                    </a>
                                    <a
                                        href="#explore-our-care-roles"
                                        className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-white/20 bg-white/70 dark:bg-white/5 px-6 sm:px-8 py-3 text-sm font-semibold text-gray-800 dark:text-white smooth hover:border-primary/50 hover:text-primary dark:hover:text-primary"
                                    >
                                        Explore care roles <span aria-hidden="true">↓</span>
                                    </a>
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Questions?{" "}
                                    <a href="tel:+14044942187" className="font-semibold text-gray-800 dark:text-white hover:text-primary smooth">
                                        (404) 494-2187
                                    </a>
                                </p>

                                <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-xs text-[#466453] dark:text-gray-400">
                                    {trust.map((item) => (
                                        <li key={item} className="flex items-center gap-1.5">
                                            <span aria-hidden="true" className="font-bold text-primary">
                                                ✓
                                            </span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <InViewWrapper animation={cardIn} className="relative lg:max-w-[520px]">
                                <>
                                    <div className="relative pb-5 pl-5">
                                        <span
                                            aria-hidden="true"
                                            className="absolute bottom-0 left-0 right-5 top-6 rounded-[150px_12px_12px_12px] bg-primary/30 dark:bg-primary/15"
                                        />
                                        <Image
                                            src="/senior-family-care.jpg"
                                            alt="An older adult sharing a moment with a loved one at home"
                                            width={1674}
                                            height={887}
                                            priority
                                            className="relative h-[18rem] sm:h-[22rem] lg:h-[27.5rem] w-full rounded-[150px_12px_12px_12px] object-cover object-[50%_68%]"
                                        />
                                        <div className="absolute bottom-[45px] left-0 rounded-lg bg-white px-6 py-4 shadow-[0_8px_35px_rgba(20,60,52,0.12)] dark:bg-darkBg/95">
                                            <span className="block text-lg font-semibold text-[#3d7a26] dark:text-primary">
                                                Compassion is the starting point.
                                            </span>
                                            <span className="block text-xs text-gray-500 dark:text-gray-400">
                                                Dependable people make care possible.
                                            </span>
                                        </div>
                                    </div>
                                </>
                            </InViewWrapper>
                        </div>
                    </>
                </InViewWrapper>

                <InViewWrapper animation={fadeIn}>
                    <>
                        <div className="mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-[#3d7a26]/80 dark:text-primary/80">
                            AmeriCare careers guide
                        </div>
                        <div className="flex flex-col gap-4 rounded-2xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur px-5 sm:px-7 py-5 shadow-sm">
                            <div>
                                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                                    Explore the work, understand the qualifications, and prepare for your next step. Opportunities depend on
                                    current openings and client needs.
                                </p>
                            </div>
                            <ul className="flex flex-wrap gap-2">
                                {roleChips.map((role) => (
                                    <li
                                        key={role.abbr}
                                        className="rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm text-[#3d7a26] dark:border-primary/20 dark:bg-primary/10 dark:text-primary"
                                    >
                                        <span className="font-semibold">{role.abbr}</span>
                                        <span className="opacity-70"> · {role.label}</span>
                                    </li>
                                ))}
                            </ul>
                            <nav aria-label="Careers sections" className="flex flex-wrap gap-2">
                                {toc.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#3d7a26] smooth hover:-translate-y-0.5 hover:border-primary/60 hover:bg-primary/10 dark:border-primary/20 dark:bg-primary/10 dark:text-primary dark:hover:border-primary/50"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </>
                </InViewWrapper>
            </div>
        </section>
    );
}
