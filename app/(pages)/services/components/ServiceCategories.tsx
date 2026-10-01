"use client";

import clsx from "clsx";
import Image from "next/image";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { useEffect, useState } from "react";
import CustomBtn from "@/app/components/CustomBtn";
import InViewWrapper from "@/app/components/InViewWrapper";
import Link from "next/link";
import { fadeIn } from "@/lib/AnimationVariants";
import { serviceCategories, ServiceCategory } from "@/lib/ServiceCategories";
import ServiceCard from "./ServiceCard";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

function BenefitItem({ benefit, accent }: { benefit: string; accent: "primary" | "secondary" }) {
    return (
        <li className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            <span
                className={clsx(
                    "grid h-5 w-5 place-items-center rounded-full",
                    accent === "primary"
                        ? "bg-[#3d7a26]/12 text-[#3d7a26] dark:bg-primary/15 dark:text-primary"
                        : "bg-[#1f7a86]/12 text-[#1f7a86] dark:bg-secondary/15 dark:text-secondary"
                )}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-3 w-3"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 5 5 10-10.5" />
                </svg>
            </span>
            {benefit}
        </li>
    );
}

function CategoryPanel({ category }: { category: ServiceCategory }) {
    const isPrimary = category.accent === "primary";

    return (
        <>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Program intro */}
                <InViewWrapper
                    animation={fadeIn}
                    className="order-2 lg:order-1 flex flex-col gap-5"
                >
                    <>
                        <div className="flex flex-col gap-4">
                            <span
                                className={clsx(
                                    "w-fit rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
                                    isPrimary
                                        ? "border-[#3d7a26]/30 bg-white text-[#3d7a26] dark:border-primary/25 dark:bg-white/[0.06] dark:text-primary"
                                        : "border-[#1f7a86]/30 bg-white text-[#1f7a86] dark:border-secondary/25 dark:bg-white/[0.06] dark:text-secondary"
                                )}
                            >
                                {category.programLabel}
                            </span>

                            <h3
                                className={clsx(
                                    FontFamily.className,
                                    "text-3xl sm:text-4xl xl:text-[2.9rem] leading-[1.12] tracking-tight text-gray-900 dark:text-white text-balance"
                                )}
                            >
                                {category.heading}
                            </h3>

                            <div id={category.anchors[0]} className="scroll-mt-32" />
                            <p className="max-w-xl leading-relaxed text-gray-600 dark:text-gray-400">
                                {category.description}
                            </p>
                            {category.anchors[1] && <span id={category.anchors[1]} className="hidden" />}
                        </div>

                        <ul className="flex flex-wrap gap-x-7 gap-y-3 pt-1">
                            {category.benefits.map((benefit) => (
                                <BenefitItem key={benefit} benefit={benefit} accent={category.accent} />
                            ))}
                        </ul>

                        <div className="flex flex-wrap items-center gap-x-6 gap-y-4 pt-3">
                            <CustomBtn
                                text={category.ctaPrimary.text}
                                linkHref={category.ctaPrimary.href}
                                inHero
                                customClass="sm:!px-8"
                            />
                            <CustomBtn
                                text={category.ctaSecondary.text}
                                linkHref={category.ctaSecondary.href}
                                customClass="sm:!px-8"
                            />
                            <Link
                                href={category.ctaInfo.href}
                                className={clsx(
                                    "group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] underline-offset-4 hover:underline",
                                    isPrimary
                                        ? "text-[#3d7a26] dark:text-primary"
                                        : "text-[#1f7a86] dark:text-secondary"
                                )}
                            >
                                {category.ctaInfo.text}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2.2}
                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6-6m6 6-6 6" />
                                </svg>
                            </Link>
                        </div>
                    </>
                </InViewWrapper>

                {/* Supporting image */}
                <InViewWrapper
                    animation={fadeIn}
                    className="order-1 lg:order-2 relative"
                >
                    <>
                        <div className="overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] border border-primary/10 bg-white shadow-[0_30px_60px_-45px_rgba(4,13,18,0.6)]">
                            <Image
                                src={category.image.src}
                                alt={category.image.alt}
                                width={category.image.width}
                                height={category.image.height}
                                priority
                                className="h-[19rem] sm:h-[24rem] lg:h-[30rem] w-full object-cover"
                            />
                        </div>
                        <div
                            className={clsx(
                                "absolute -bottom-4 left-4 sm:left-6 rounded-2xl border bg-white/95 dark:bg-darkBg/95 backdrop-blur px-4 py-3 text-xs sm:text-sm font-semibold shadow-sm",
                                isPrimary
                                    ? "border-[#3d7a26]/25 text-[#3d7a26] dark:border-primary/20 dark:text-primary"
                                    : "border-[#1f7a86]/25 text-[#1f7a86] dark:border-secondary/25 dark:text-secondary"
                            )}
                        >
                            {category.tabLabel} · At-home support
                        </div>
                    </>
                </InViewWrapper>
            </div>

            {/* Service cards */}
            <div className="mt-12 sm:mt-16">
                <div className="flex items-center gap-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400 whitespace-nowrap">
                        Services included
                    </span>
                    <span
                        className={clsx(
                            "h-px flex-1",
                            isPrimary ? "bg-primary/20" : "bg-secondary/25"
                        )}
                    />
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    {category.cards.map((card) => (
                        <ServiceCard key={`${category.id}-${card.title}`} card={card} accent={category.accent} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default function ServiceCategories() {
    const [active, setActive] = useState<ServiceCategory["id"]>("child");

    useEffect(() => {
        const applyHash = () => {
            const hash = window.location.hash.replace("#", "").toLowerCase();
            const match = serviceCategories.find((category) => category.anchors.includes(hash));
            if (match) setActive(match.id);
        };

        applyHash();
        window.addEventListener("hashchange", applyHash);
        return () => window.removeEventListener("hashchange", applyHash);
    }, []);

    return (
        <section className="relative bg-[#f7f9f3] dark:bg-darkBg dark:text-white py-16 sm:py-24 overflow-hidden">
            <div className="2xl:px-[10vw] sm:px-[8vw] px-6 flex flex-col gap-9 sm:gap-12">
                {/* Section introduction */}
                <InViewWrapper animation={fadeIn} className="max-w-3xl flex flex-col gap-4">
                    <>
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#3d7a26] dark:text-primary">
                            Who We Care For
                        </span>
                        <h2
                            className={clsx(
                                FontFamily.className,
                                "text-3xl sm:text-4xl xl:text-5xl leading-tight tracking-tight text-gray-900 dark:text-white text-balance"
                            )}
                        >
                            Find the right care for your family
                        </h2>
                        <p className="leading-relaxed text-gray-600 dark:text-gray-400 sm:text-base text-sm">
                            We aim to provide the ideal solution with an informed process. We equip clients and their
                            support systems with information and answers, and we assess each situation to provide
                            personal recommendations based on each recipient&apos;s unique needs.
                        </p>
                    </>
                </InViewWrapper>

                {/* Audience selector */}
                <InViewWrapper animation={fadeIn} className="w-full">
                    <>
                        <div
                            role="tablist"
                            aria-label="Choose who needs care"
                            className="grid gap-3 sm:gap-4 sm:max-w-4xl sm:grid-cols-2"
                        >
                            {serviceCategories.map((category) => {
                                const isActive = active === category.id;

                                return (
                                    <button
                                        key={category.id}
                                        type="button"
                                        role="tab"
                                        id={`tab-${category.id}`}
                                        aria-selected={isActive}
                                        aria-controls={`panel-${category.id}`}
                                        onClick={() => setActive(category.id)}
                                        className={clsx(
                                            "text-left rounded-2xl border px-5 sm:px-7 py-5 flex flex-col gap-1.5 smooth outline-none",
                                            "focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#f7f9f3]",
                                            isActive
                                                ? "bg-[#1c4426] border-[#1c4426] text-white shadow-[0_24px_45px_-30px_rgba(28,68,38,0.9)]"
                                                : "bg-white dark:bg-white/5 border-primary/15 text-gray-800 dark:text-gray-200 hover:border-primary/45 hover:-translate-y-0.5"
                                        )}
                                    >
                                        <span
                                            className={clsx(
                                                FontFamily.className,
                                                "text-xl sm:text-2xl leading-snug"
                                            )}
                                        >
                                            {category.tabLabel}
                                        </span>
                                        <span
                                            className={clsx(
                                                "text-sm",
                                                isActive ? "text-white/75" : "text-gray-500 dark:text-gray-400"
                                            )}
                                        >
                                            {category.tabHint}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </>
                </InViewWrapper>

                {/* Panels */}
                <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                >
                    {serviceCategories.map((category) => (
                        <div
                            key={category.id}
                            id={`panel-${category.id}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${category.id}`}
                            hidden={active !== category.id}
                        >
                            <CategoryPanel category={category} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
