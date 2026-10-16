import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn, cardInAlt, fadeIn } from "@/lib/AnimationVariants";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export interface GuideHeroProps {
    breadcrumb: { href?: string; label: string }[];
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    introLead: string;
    intro: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
    phone: string;
    trust: string[];
    image: { src: string; alt: string; width: number; height: number };
    imageBadge: { lead: string; accent: string };
    accent: "primary" | "secondary";
    guideEyebrow: string;
    guideTitle: string;
    guideIntro: string;
    toc: { id: string; label: string }[];
}

export default function GuideHero({
    breadcrumb,
    eyebrow,
    titleLead,
    titleAccent,
    introLead,
    intro,
    primaryCta,
    secondaryCta,
    phone,
    trust,
    image,
    imageBadge,
    accent,
    guideEyebrow,
    guideTitle,
    guideIntro,
    toc,
}: GuideHeroProps) {
    const isPrimary = accent === "primary";

    return (
        <section
            className={clsx(
                "relative overflow-hidden pt-[9rem] sm:pt-[11rem] pb-14 sm:pb-20 dark:bg-darkBg dark:text-white",
                isPrimary ? "bg-[#f4f8ef]" : "bg-[#eef7f8]"
            )}
        >
            <div
                aria-hidden="true"
                className={clsx(
                    "pointer-events-none absolute -top-40 -right-32 h-[32rem] w-[32rem] rounded-full blur-3xl",
                    isPrimary ? "bg-primary/15" : "bg-secondary/15"
                )}
            />
            <div className="relative 2xl:px-[10vw] sm:px-[8vw] px-6">
                <InViewWrapper animation={fadeIn} className="mb-10 sm:mb-14">
                    <>
                        <nav aria-label="Breadcrumb" className="mb-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                            <ol className="flex flex-wrap items-center gap-2">
                                {breadcrumb.map((crumb, index) => (
                                    <li key={crumb.label} className="flex items-center gap-2">
                                        {index > 0 && <span aria-hidden="true">/</span>}
                                        {crumb.href ? (
                                            <Link
                                                href={crumb.href}
                                                className={clsx(
                                                    "smooth",
                                                    isPrimary
                                                        ? "hover:text-[#3d7a26] dark:hover:text-primary"
                                                        : "hover:text-[#1f7a86] dark:hover:text-secondary"
                                                )}
                                            >
                                                {crumb.label}
                                            </Link>
                                        ) : (
                                            <span className="text-gray-700 dark:text-gray-200">{crumb.label}</span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>

                        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-center">
                            <div className="flex flex-col gap-5">
                                <span
                                    className={clsx(
                                        "text-xs sm:text-sm font-semibold uppercase tracking-[0.3em]",
                                        isPrimary ? "text-[#3d7a26] dark:text-primary" : "text-[#1f7a86] dark:text-secondary"
                                    )}
                                >
                                    {eyebrow}
                                </span>

                                <h1
                                    className={clsx(
                                        FontFamily.className,
                                        "text-4xl sm:text-5xl xl:text-[4rem] leading-[1.05] tracking-tight text-balance"
                                    )}
                                >
                                    <span className="text-gray-900 dark:text-white">{titleLead}</span>{" "}
                                    <span className={clsx(isPrimary ? "text-primary" : "text-secondary")}>{titleAccent}</span>
                                </h1>

                                <p className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">{introLead}</p>
                                <p className="max-w-xl text-base sm:text-lg leading-relaxed text-gray-600 dark:text-gray-400">{intro}</p>

                                <div className="flex flex-wrap items-center gap-4 pt-1">
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
                                    </Link>
                                </div>

                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Here to help:{" "}
                                    <a
                                        href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                                        className={clsx(
                                            "font-semibold text-gray-800 dark:text-white smooth",
                                            isPrimary ? "hover:text-primary" : "hover:text-secondary"
                                        )}
                                    >
                                        {phone}
                                    </a>
                                </p>

                                <ul className="flex flex-wrap gap-2 pt-1">
                                    {trust.map((item) => (
                                        <li
                                            key={item}
                                            className={clsx(
                                                "rounded-full border px-3 py-1 text-xs font-semibold",
                                                isPrimary
                                                    ? "border-primary/25 bg-primary/10 text-[#3d7a26] dark:border-primary/20 dark:bg-primary/10 dark:text-primary"
                                                    : "border-secondary/25 bg-secondary/10 text-[#1f7a86] dark:border-secondary/20 dark:bg-secondary/10 dark:text-secondary"
                                            )}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <InViewWrapper animation={cardIn} className="relative">
                                <>
                                    <div
                                        className={clsx(
                                            "relative overflow-hidden rounded-[1.75rem] sm:rounded-[2.25rem] border shadow-[0_40px_70px_-50px_rgba(4,13,18,0.7)]",
                                            isPrimary ? "border-primary/10" : "border-secondary/10"
                                        )}
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={image.width}
                                            height={image.height}
                                            priority
                                            className="h-[18rem] sm:h-[24rem] lg:h-[30rem] w-full object-cover"
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
                                                isPrimary ? "text-[#3d7a26] dark:text-primary" : "text-[#1f7a86] dark:text-secondary"
                                            )}
                                        >
                                            {imageBadge.lead}
                                        </span>
                                        <span className="block text-sm font-semibold text-gray-900 dark:text-white">{imageBadge.accent}</span>
                                    </div>
                                </>
                            </InViewWrapper>
                        </div>
                    </>
                </InViewWrapper>

                <InViewWrapper animation={cardInAlt}>
                    <>
                        <div
                            className={clsx(
                                "mb-4 text-xs sm:text-sm font-semibold uppercase tracking-[0.28em]",
                                isPrimary ? "text-[#3d7a26]/80 dark:text-primary/80" : "text-[#1f7a86]/80 dark:text-secondary/80"
                            )}
                        >
                            {guideEyebrow}
                        </div>
                        <div className="flex flex-col gap-4 rounded-2xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] backdrop-blur px-5 sm:px-7 py-5 shadow-sm">
                            <div>
                                <h2 className={clsx(FontFamily.className, "text-xl sm:text-2xl text-gray-900 dark:text-white")}>{guideTitle}</h2>
                                <p className="mt-1 text-sm sm:text-base text-gray-600 dark:text-gray-400">{guideIntro}</p>
                            </div>
                            <nav aria-label="Guide sections" className="flex flex-wrap gap-2">
                                {toc.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className={clsx(
                                            "rounded-full border px-4 py-1.5 text-xs sm:text-sm font-medium smooth hover:-translate-y-0.5",
                                            isPrimary
                                                ? "border-primary/25 bg-primary/5 text-[#3d7a26] hover:border-primary/60 hover:bg-primary/10 dark:border-primary/20 dark:bg-primary/10 dark:text-primary dark:hover:border-primary/50"
                                                : "border-secondary/25 bg-secondary/5 text-[#1f7a86] hover:border-secondary/60 hover:bg-secondary/10 dark:border-secondary/20 dark:bg-secondary/10 dark:text-secondary dark:hover:border-secondary/50"
                                        )}
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
