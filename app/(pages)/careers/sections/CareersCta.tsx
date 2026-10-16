import Link from "next/link";
import { Playfair_Display } from "next/font/google";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function CareersCta() {
    return (
        <section className="relative overflow-hidden bg-[#f4f8ef] dark:bg-white/[0.03] dark:text-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full blur-3xl bg-primary/15"
            />
            <div className="relative 2xl:px-[10vw] sm:px-[8vw] px-6 py-16 sm:py-24">
                <InViewWrapper animation={fadeIn}>
                    <>
                        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#3d7a26] dark:text-primary">
                            Meaningful work. Personal impact.
                        </p>
                        <h2
                            className={`${FontFamily.className} mt-4 text-3xl sm:text-5xl xl:text-[3.75rem] leading-[1.08] tracking-tight text-gray-900 dark:text-white text-balance`}
                        >
                            Care for families.
                            <br />
                            <span className="text-primary">Build your next chapter.</span>
                        </h2>
                        <p className="mt-5 max-w-2xl text-base sm:text-lg text-gray-600 dark:text-gray-400">
                            Tell us where you want to serve and what you bring to the team.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                            <Link
                                href="/careers#application"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 sm:px-8 py-3 text-sm font-semibold text-white smooth active:scale-90 hover:opacity-90"
                            >
                                Explore your next opportunity <span aria-hidden="true">↗</span>
                            </Link>
                            <Link
                                href="/speak-with-coordinator"
                                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 dark:border-white/20 bg-white/70 dark:bg-white/5 px-6 sm:px-8 py-3 text-sm font-semibold text-gray-800 dark:text-white smooth hover:border-primary/50 hover:text-primary dark:hover:text-primary"
                            >
                                Talk with AmeriCare <span aria-hidden="true">↗</span>
                            </Link>
                        </div>
                    </>
                </InViewWrapper>
            </div>
        </section>
    );
}
