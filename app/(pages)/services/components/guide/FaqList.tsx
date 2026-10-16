import clsx from "clsx";

export default function FaqList({
    items,
    accent,
}: {
    items: { q: string; a: string }[];
    accent: "primary" | "secondary";
}) {
    const isPrimary = accent === "primary";

    return (
        <div className="flex flex-col gap-3">
            {items.map((item) => (
                <details
                    key={item.q}
                    className={clsx(
                        "group rounded-xl border bg-white dark:bg-white/[0.04] smooth",
                        isPrimary
                            ? "border-primary/15 open:border-primary/40"
                            : "border-secondary/20 open:border-secondary/45"
                    )}
                >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 sm:px-6 py-4 text-sm sm:text-base font-semibold text-gray-900 dark:text-white [&::-webkit-details-marker]:hidden">
                        <span>{item.q}</span>
                        <span
                            aria-hidden="true"
                            className={clsx(
                                "grid h-7 w-7 shrink-0 place-items-center rounded-full text-lg font-medium smooth group-open:rotate-45",
                                isPrimary
                                    ? "bg-primary/10 text-[#3d7a26] dark:bg-primary/15 dark:text-primary"
                                    : "bg-secondary/10 text-[#1f7a86] dark:bg-secondary/15 dark:text-secondary"
                            )}
                        >
                            +
                        </span>
                    </summary>
                    <p className="px-5 sm:px-6 pb-5 text-sm sm:text-[0.95rem] leading-relaxed text-gray-600 dark:text-gray-400">
                        {item.a}
                    </p>
                </details>
            ))}
        </div>
    );
}
