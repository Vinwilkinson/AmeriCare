import clsx from "clsx";

export default function GuideLayout({
    toc,
    accent,
    children,
}: {
    toc: { id: string; label: string }[];
    accent: "primary" | "secondary";
    children: React.ReactNode;
}) {
    const isPrimary = accent === "primary";

    return (
        <div className="dark:bg-darkBg dark:text-white bg-white">
            <div className="2xl:px-[10vw] sm:px-[8vw] px-6 py-14 sm:py-20">
                <div className="grid lg:grid-cols-[12.5rem_minmax(0,1fr)] gap-10 xl:gap-16">
                    <aside aria-label="Guide navigation" className="hidden lg:block">
                        <nav className="sticky top-28 flex flex-col gap-1 border-l border-gray-200 dark:border-white/10">
                            {toc.map((item) => (
                                <a
                                    key={item.id}
                                    href={`#${item.id}`}
                                    className={clsx(
                                        "-ml-px border-l-2 border-transparent py-1.5 pl-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400 smooth hover:border-current",
                                        isPrimary
                                            ? "hover:text-[#3d7a26] dark:hover:text-primary"
                                            : "hover:text-[#1f7a86] dark:hover:text-secondary"
                                    )}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </aside>

                    <article className="flex flex-col gap-14 sm:gap-20 min-w-0">{children}</article>
                </div>
            </div>
        </div>
    );
}
