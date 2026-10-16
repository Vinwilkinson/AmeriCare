import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function GuideSection({
    id,
    label,
    title,
    accent,
    children,
}: {
    id: string;
    label: string;
    title: string;
    accent: "primary" | "secondary";
    children: React.ReactNode;
}) {
    const isPrimary = accent === "primary";

    return (
        <section id={id} className="scroll-mt-28">
            <InViewWrapper animation={fadeIn} className="flex flex-col gap-5">
                <>
                    <div className="flex items-center gap-4">
                        <span
                            className={clsx(
                                "text-xs font-semibold uppercase tracking-[0.28em] whitespace-nowrap",
                                isPrimary ? "text-[#3d7a26] dark:text-primary" : "text-[#1f7a86] dark:text-secondary"
                            )}
                        >
                            {label}
                        </span>
                        <span
                            aria-hidden="true"
                            className={clsx("h-px flex-1", isPrimary ? "bg-primary/20" : "bg-secondary/25")}
                        />
                    </div>

                    <h2 className={clsx(FontFamily.className, "text-2xl sm:text-3xl xl:text-[2.5rem] leading-tight tracking-tight text-gray-900 dark:text-white text-balance")}>
                        {title}
                    </h2>

                    <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400 leading-relaxed">{children}</div>
                </>
            </InViewWrapper>
        </section>
    );
}
