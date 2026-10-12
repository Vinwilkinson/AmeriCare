"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import CustomBtn from "@/app/components/CustomBtn";
import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn, cardInAlt, fadeIn } from "@/lib/AnimationVariants";
import { ProgramBenefitIcon, ProgramPageData } from "@/lib/ProgramDetails";
import ServiceCard from "./ServiceCard";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

const benefitIcons: Record<ProgramBenefitIcon, JSX.Element> = {
    nurse: (
        <>
            <path d="M12 3.75l7.5 3v5.06c0 4.4-3.05 8.32-7.5 9.66-4.45-1.34-7.5-5.26-7.5-9.66V6.75l7.5-3z" />
            <path d="M12 9v5.25M9.375 11.625h5.25" />
        </>
    ),
    coordination: (
        <>
            <rect x="5" y="4.5" width="14" height="16" rx="2" />
            <path d="M9 4.5V3.75a1.25 1.25 0 0 1 1.25-1.25h3.5A1.25 1.25 0 0 1 15 3.75V4.5M8.75 10h6.5M8.75 14h4.5" />
        </>
    ),
    family: (
        <>
            <path d="M3.75 11.25 12 4.5l8.25 6.75" />
            <path d="M5.75 10v9.25h12.5V10" />
            <path d="M9.75 19.25v-4.5h4.5v4.5" />
        </>
    ),
    personal: (
        <>
            <circle cx="12" cy="8" r="3.4" />
            <path d="M5.5 19.5a6.75 6.75 0 0 1 13 0" />
            <path d="m9.5 13.75 1.9 1.9 3.6-3.6" />
        </>
    ),
    support: (
        <>
            <path d="M12 20.25s-7.2-4.62-9.22-8.94C1.3 8.24 3.03 4.5 6.5 4.5c1.92 0 3.28.97 4.5 2.7 1.22-1.73 2.58-2.7 4.5-2.7 3.47 0 5.2 3.74 3.72 6.81C19.2 15.63 12 20.25 12 20.25z" />
        </>
    ),
    services: (
        <>
            <rect x="4" y="4" width="6.5" height="6.5" rx="1.5" />
            <rect x="13.5" y="4" width="6.5" height="6.5" rx="1.5" />
            <rect x="4" y="13.5" width="6.5" height="6.5" rx="1.5" />
            <rect x="13.5" y="13.5" width="6.5" height="6.5" rx="1.5" />
        </>
    ),
};

function SectionDivider({ label, accent }: { label: string; accent: "primary" | "secondary" }) {
    return (
        <div className="flex items-center gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400 whitespace-nowrap">
                {label}
            </span>
            <span
                className={clsx(
                    "h-px flex-1",
                    accent === "primary" ? "bg-primary/20" : "bg-secondary/25"
                )}
            />
        </div>
    );
}

export default function ProgramDetail({ program }: { program: ProgramPageData }) {
    const isPrimary = program.accent === "primary";

    return (
        <>
            {/* Header */}
            <section className="relative overflow-hidden bg-white dark:bg-darkBg dark:text-white pt-[9rem] sm:pt-[11rem] pb-16 sm:pb-24">
                <div
                    aria-hidden="true"
                    className={clsx(
                        "pointer-events-none absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full blur-3xl",
                        isPrimary ? "bg-primary/10" : "bg-secondary/10"
                    )}
                />

                <div className="relative 2xl:px-[10vw] sm:px-[8vw] px-6">
                    <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
                        {/* Copy */}
                        <InViewWrapper animation={cardInAlt} className="flex flex-col gap-6">
                            <>
                                <Link
                                    href="/services"
                                    className="group w-fit inline-flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-[#3d7a26] dark:hover:text-primary smooth"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2.2}
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0 6-6m-6 6 6 6" />
                                    </svg>
                                    All Services
                                </Link>

                                <span
                                    className={clsx(
                                        "text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]",
                                        isPrimary
                                            ? "text-[#3d7a26] dark:text-primary"
                                            : "text-[#1f7a86] dark:text-secondary"
                                    )}
                                >
                                    {program.eyebrow}
                                </span>

                                <h1
                                    className={clsx(
                                        FontFamily.className,
                                        "text-4xl sm:text-5xl xl:text-[4.25rem] leading-[1.05] tracking-tight text-balance"
                                    )}
                                >
                                    <span className="text-gray-900 dark:text-white">{program.titleLead}</span>
                                    <span
                                        className={clsx(
                                            isPrimary ? "text-primary" : "text-secondary"
                                        )}
                                    >
                                        {program.titleAccent}
                                    </span>
                                </h1>

                                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                    {program.intro}
                                </p>

                                <div className="flex flex-wrap items-center gap-4 pt-1">
                                    <CustomBtn text="Check Eligibility" linkHref="/check-care-options" inHero customClass="sm:!px-8" />
                                    <CustomBtn text="Speak with a Coordinator" linkHref="/speak-with-coordinator" customClass="sm:!px-8" />
                                </div>
                            </>
                        </InViewWrapper>

                        {/* Image */}
                        <InViewWrapper animation={cardIn} className="relative">
                            <>
                                <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] border border-primary/10 shadow-[0_40px_70px_-50px_rgba(4,13,18,0.7)]">
                                    <Image
                                        src={program.image.src}
                                        alt={program.image.alt}
                                        width={program.image.width}
                                        height={program.image.height}
                                        priority
                                        className="h-[20rem] sm:h-[26rem] lg:h-[34rem] w-full object-cover"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
                                    />
                                </div>

                                <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-2xl border border-white/60 dark:border-white/10 bg-white/95 dark:bg-darkBg/90 backdrop-blur px-4 py-3 shadow-sm">
                                    <span
                                        className={clsx(
                                            "block text-[0.65rem] font-semibold uppercase tracking-[0.2em]",
                                            isPrimary
                                                ? "text-[#3d7a26] dark:text-primary"
                                                : "text-[#1f7a86] dark:text-secondary"
                                        )}
                                    >
                                        {program.badgeLabel}
                                    </span>
                                    <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                                        {program.badgeText}
                                    </span>
                                </div>
                            </>
                        </InViewWrapper>
                    </div>
                </div>
            </section>

            {/* About + benefits + services */}
            <section className="relative bg-[#f7f9f3] dark:bg-darkBg dark:text-white py-16 sm:py-24 overflow-hidden">
                <div className="2xl:px-[10vw] sm:px-[8vw] px-6 flex flex-col gap-12 sm:gap-16">
                    {/* What is */}
                    <InViewWrapper animation={fadeIn} className="grid lg:grid-cols-2 gap-10 lg:gap-16">
                        <>
                            <div className="flex flex-col gap-5">
                                <h2
                                    className={clsx(
                                        FontFamily.className,
                                        "text-3xl sm:text-4xl xl:text-5xl leading-tight tracking-tight text-gray-900 dark:text-white text-balance"
                                    )}
                                >
                                    {program.aboutHeading}
                                </h2>
                                <blockquote
                                    className={clsx(
                                        FontFamily.className,
                                        "border-l-4 pl-5 text-lg sm:text-2xl leading-relaxed italic text-gray-800 dark:text-gray-200",
                                        isPrimary ? "border-primary/50" : "border-secondary/60"
                                    )}
                                >
                                    &quot;{program.quote}&quot;
                                </blockquote>
                            </div>

                            <div className="flex flex-col gap-4 lg:pt-14">
                                {program.paragraphs.map((paragraph) => (
                                    <p key={paragraph.slice(0, 32)} className="leading-relaxed text-gray-600 dark:text-gray-400">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </>
                    </InViewWrapper>

                    {/* Key benefits */}
                    <div>
                        <SectionDivider label="Key Benefits" accent={program.accent} />
                        <div className="mt-6 grid gap-5 sm:grid-cols-3">
                            {program.benefits.map((benefit) => (
                                <InViewWrapper animation={cardIn} key={benefit.title} className="h-full">
                                    <>
                                        <article
                                            className={clsx(
                                                "flex h-full flex-col gap-3 rounded-2xl border bg-white dark:bg-white/[0.04] p-6 sm:p-7 smooth",
                                                isPrimary
                                                    ? "border-primary/15 hover:border-primary/45"
                                                    : "border-secondary/20 hover:border-secondary/50"
                                            )}
                                        >
                                            <div
                                                className={clsx(
                                                    "flex h-12 w-12 items-center justify-center rounded-full",
                                                    isPrimary
                                                        ? "bg-[#3d7a26]/10 text-[#3d7a26] dark:bg-primary/10 dark:text-primary"
                                                        : "bg-[#1f7a86]/10 text-[#1f7a86] dark:bg-secondary/10 dark:text-secondary"
                                                )}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1.5}
                                                    stroke="currentColor"
                                                    aria-hidden="true"
                                                    className="h-6 w-6"
                                                >
                                                    {benefitIcons[benefit.icon]}
                                                </svg>
                                            </div>
                                            <h3
                                                className={clsx(
                                                    FontFamily.className,
                                                    "text-xl sm:text-2xl leading-snug text-gray-900 dark:text-white"
                                                )}
                                            >
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sm sm:text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400">
                                                {benefit.text}
                                            </p>
                                        </article>
                                    </>
                                </InViewWrapper>
                            ))}
                        </div>
                    </div>

                    {/* Services included */}
                    <div>
                        <SectionDivider label="Services Included" accent={program.accent} />
                        <div className="mt-6 grid gap-5 sm:grid-cols-2">
                            {program.cards.map((card) => (
                                <ServiceCard key={`${program.id}-${card.title}`} card={card} accent={program.accent} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
