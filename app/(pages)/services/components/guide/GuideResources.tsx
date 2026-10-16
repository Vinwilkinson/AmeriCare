import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function GuideResources({
    title,
    links,
    accent = "primary",
}: {
    title: string;
    links: { label: string; href: string }[];
    accent?: "primary" | "secondary";
}) {
    const isPrimary = accent === "primary";

    return (
        <section className="dark:bg-darkBg dark:text-white bg-white">
            <div className="2xl:px-[10vw] sm:px-[8vw] px-6 py-14 sm:py-20">
                <InViewWrapper animation={fadeIn} className="flex flex-col gap-6">
                    <>
                        <h2 className={clsx(FontFamily.className, "text-2xl sm:text-3xl text-gray-900 dark:text-white")}>{title}</h2>
                        <ul className="flex flex-wrap gap-3">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={clsx(
                                            "inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/15 bg-gray-50 dark:bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 smooth",
                                            isPrimary
                                                ? "hover:border-primary/50 hover:text-primary dark:hover:text-primary"
                                                : "hover:border-secondary/50 hover:text-secondary dark:hover:text-secondary"
                                        )}
                                    >
                                        {link.label}
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </>
                </InViewWrapper>
            </div>
        </section>
    );
}
