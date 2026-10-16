import clsx from "clsx";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function StartCallout({
    accent,
    eyebrow,
    title,
    text,
    primaryCta,
    secondaryCta,
    notes,
}: {
    accent: "primary" | "secondary";
    eyebrow: string;
    title: string;
    text: string;
    primaryCta: { text: string; href: string };
    secondaryCta: { text: string; href: string };
    notes: { label: string; text: string }[];
}) {
    const isPrimary = accent === "primary";

    return (
        <div
            className={clsx(
                "rounded-2xl border p-6 sm:p-8 flex flex-col gap-5",
                isPrimary
                    ? "border-primary/20 bg-primary/[0.06] dark:bg-primary/[0.08]"
                    : "border-secondary/25 bg-secondary/[0.06] dark:bg-secondary/[0.08]"
            )}
        >
            <div>
                <p
                    className={clsx(
                        "text-xs font-semibold uppercase tracking-[0.28em]",
                        isPrimary ? "text-[#3d7a26] dark:text-primary" : "text-[#1f7a86] dark:text-secondary"
                    )}
                >
                    {eyebrow}
                </p>
                <h3 className={clsx(FontFamily.className, "mt-2 text-xl sm:text-2xl text-gray-900 dark:text-white")}>{title}</h3>
                <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">{text}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
                <Link
                    href={primaryCta.href}
                    className={clsx(
                        "inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white smooth active:scale-90 hover:opacity-90",
                        isPrimary ? "bg-primary" : "bg-secondary"
                    )}
                >
                    {primaryCta.text}
                    <span aria-hidden="true">↗</span>
                </Link>
                <a
                    href={`tel:${secondaryCta.href.replace(/[^+\d]/g, "")}`}
                    className={clsx(
                        "inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-white/20 bg-white/80 dark:bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-800 dark:text-white smooth",
                        isPrimary
                            ? "hover:border-primary/50 hover:text-primary dark:hover:text-primary"
                            : "hover:border-secondary/50 hover:text-secondary dark:hover:text-secondary"
                    )}
                >
                    {secondaryCta.text}
                </a>
            </div>

            <dl className="grid gap-4 sm:grid-cols-2 pt-1">
                {notes.map((note) => (
                    <div key={note.label} className="rounded-xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-white/[0.04] p-4">
                        <dt className="text-sm font-semibold text-gray-900 dark:text-white">{note.label}</dt>
                        <dd className="mt-1 text-sm text-gray-600 dark:text-gray-400">{note.text}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
}
