import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import { ServiceCardData, ServiceCardIcon } from "@/lib/ServiceCategories";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

const iconPaths: Record<ServiceCardIcon, JSX.Element> = {
    "pediatric-nursing": (
        <>
            <path d="M12 20.25s-7.2-4.62-9.22-8.94C1.3 8.24 3.03 4.5 6.5 4.5c1.92 0 3.28.97 4.5 2.7 1.22-1.73 2.58-2.7 4.5-2.7 3.47 0 5.2 3.74 3.72 6.81C19.2 15.63 12 20.25 12 20.25z" />
            <path d="M5.25 11.25h2.5l1-2 2 4 1.5-3 1 1h4.5" />
        </>
    ),
    rehabilitation: (
        <>
            <path d="M3 12h3.5l2-4.5 3 9 2.5-6 1.5 3H21" />
            <path d="M3 18.75h18" />
        </>
    ),
    "skilled-nursing": (
        <>
            <path d="M12 3.75l7.5 3v5.06c0 4.4-3.05 8.32-7.5 9.66-4.45-1.34-7.5-5.26-7.5-9.66V6.75l7.5-3z" />
            <path d="M12 9v5.25M9.375 11.625h5.25" />
        </>
    ),
    "personal-care": (
        <>
            <circle cx="12" cy="8" r="3.4" />
            <path d="M5.5 19.5a6.75 6.75 0 0 1 13 0" />
            <path d="M12 15.75v.75" />
        </>
    ),
    companionship: (
        <>
            <circle cx="9.5" cy="8.25" r="3.25" />
            <path d="M3.5 19.5a6 6 0 0 1 12 0" />
            <path d="M16.25 5.6a3.25 3.25 0 0 1 0 6.3" />
            <path d="M17.75 14.4a5.98 5.98 0 0 1 3 5.1" />
        </>
    ),
    "specialty-care": (
        <>
            <path d="M12 3.75l7.5 3v5.06c0 4.4-3.05 8.32-7.5 9.66-4.45-1.34-7.5-5.26-7.5-9.66V6.75l7.5-3z" />
            <path d="m9.375 11.9 1.875 1.88 3.75-3.75" />
        </>
    ),
};

function CardIcon({ icon }: { icon: ServiceCardIcon }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
            className="h-6 w-6"
        >
            {iconPaths[icon]}
        </svg>
    );
}

function CheckIcon({ accent }: { accent: "primary" | "secondary" }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
            className={clsx(
                "mt-0.5 h-4 w-4 shrink-0",
                accent === "primary"
                    ? "text-[#3d7a26] dark:text-primary"
                    : "text-[#1f7a86] dark:text-secondary"
            )}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 5 5 10-10.5" />
        </svg>
    );
}

export default function ServiceCard({
    card,
    accent,
}: {
    card: ServiceCardData;
    accent: "primary" | "secondary";
}) {
    return (
        <article
            className={clsx(
                "group flex h-full flex-col gap-3 rounded-2xl border bg-white dark:bg-white/[0.04] p-6 sm:p-7 smooth",
                "hover:-translate-y-1 hover:shadow-[0_28px_50px_-34px_rgba(4,13,18,0.55)]",
                accent === "primary"
                    ? "border-primary/15 hover:border-primary/45"
                    : "border-secondary/20 hover:border-secondary/50"
            )}
        >
            <div
                className={clsx(
                    "flex h-12 w-12 items-center justify-center rounded-full smooth group-hover:scale-105",
                    accent === "primary"
                        ? "bg-[#3d7a26]/10 text-[#3d7a26] dark:bg-primary/10 dark:text-primary"
                        : "bg-[#1f7a86]/10 text-[#1f7a86] dark:bg-secondary/10 dark:text-secondary"
                )}
            >
                <CardIcon icon={card.icon} />
            </div>

            <span
                className={clsx(
                    "text-[0.68rem] font-semibold uppercase tracking-[0.2em]",
                    accent === "primary" ? "text-[#3d7a26] dark:text-primary" : "text-[#1f7a86] dark:text-secondary"
                )}
            >
                {card.label}
            </span>

            <h4 className={clsx(FontFamily.className, "text-xl sm:text-2xl leading-snug text-gray-900 dark:text-white")}>
                {card.title}
            </h4>

            <p className="text-sm sm:text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400">
                {card.description}
            </p>

            <ul className="mt-auto flex flex-col gap-2 pt-3 text-sm text-gray-700 dark:text-gray-300">
                {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                        <CheckIcon accent={accent} />
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}
