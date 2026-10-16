import clsx from "clsx";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function GuideContact({
    accent,
    eyebrow,
    titleLead,
    titleAccent,
    text,
    primaryCta,
    secondaryCta,
}: {
    accent: "primary" | "secondary";
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    text: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
}) {
    const isPrimary = accent === "primary";

    return (
        <section
            className={clsx(
                "relative overflow-hidden dark:bg-white/[0.03]",
                isPrimary ? "bg-[#f4f8ef]" : "bg-[#eef7f8]"
            )}
        >
            <div
                aria-hidden="true"
                className={clsx(
                    "pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-3xl",
                    isPrimary ? "bg-primary/15" : "bg-secondary/15"
                )}
            />
            <div className="relative 2xl:px-[10vw] sm:px-[8vw] px-6 py-16 sm:py-24">
                <InViewWrapper animation={fadeIn}>
                    <>
                        <p
                            className={clsx(
                                "text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]",
                                isPrimary ? "text-[#3d7a26] dark:text-primary" : "text-[#1f7a86] dark:text-secondary"
                            )}
                        >
                            {eyebrow}
                        </p>
                        <h2
                            className={clsx(
                                FontFamily.className,
                                "mt-4 text-3xl sm:text-5xl xl:text-[3.75rem] leading-[1.08] tracking-tight text-gray-900 dark:text-white text-balance"
                            )}
                        >
                            {titleLead}
                            <br />
                            <span className={clsx(isPrimary ? "text-primary" : "text-secondary")}>{titleAccent}</span>
                        </h2>
                        <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400">{text}</p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href={primaryCta.href}
                                className={clsx(
                                    "inline-flex items-center gap-2 rounded-lg px-6 sm:px-8 py-3 text-sm font-semibold text-white smooth active:scale-90 hover:opacity-90",
                                    isPrimary ? "bg-primary" : "bg-secondary"
                                )}
                            >
                                {primaryCta.text}
                                <span aria-hidden="true">↗</span>
                            </Link>
                            <Link
                                href={secondaryCta.href}
                                className={clsx(
                                    "inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-white/20 bg-white/70 dark:bg-white/5 px-6 sm:px-8 py-3 text-sm font-semibold text-gray-800 dark:text-white smooth",
                                    isPrimary
                                        ? "hover:border-primary/50 hover:text-primary dark:hover:text-primary"
                                        : "hover:border-secondary/50 hover:text-secondary dark:hover:text-secondary"
                                )}
                            >
                                {secondaryCta.text}
                                <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </>
                </InViewWrapper>
            </div>
        </section>
    );
}
