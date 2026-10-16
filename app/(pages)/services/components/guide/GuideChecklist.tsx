import clsx from "clsx";

export default function GuideChecklist({
    items,
    accent,
}: {
    items: string[];
    accent: "primary" | "secondary";
}) {
    const isPrimary = accent === "primary";

    return (
        <ul className="grid gap-2.5 sm:grid-cols-2">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm sm:text-[0.95rem] text-gray-600 dark:text-gray-400">
                    <span
                        aria-hidden="true"
                        className={clsx(
                            "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full",
                            isPrimary
                                ? "bg-primary/15 text-[#3d7a26] dark:bg-primary/15 dark:text-primary"
                                : "bg-secondary/15 text-[#1f7a86] dark:bg-secondary/15 dark:text-secondary"
                        )}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
                            <path
                                fillRule="evenodd"
                                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 6.8-6.8a1 1 0 0 1 1.4 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    );
}
