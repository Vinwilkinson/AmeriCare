import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

const roleOptions = [
    "CNA — Certified Nursing Assistant",
    "PCA — Personal Care Assistant",
    "Family Caregiver — Care for My Loved One",
    "RN — Registered Nurse",
    "LPN — Licensed Practical Nurse",
    "Pediatric RN / LPN",
    "Future opportunities / Other",
];

export default function ApplicationIntro() {
    return (
        <section id="application" className="scroll-mt-28">
            <InViewWrapper animation={fadeIn} className="flex flex-col gap-5">
                <>
                    <div className="flex items-center gap-4">
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] whitespace-nowrap text-[#3d7a26] dark:text-primary">
                            Take the next step
                        </span>
                        <span aria-hidden="true" className="h-px flex-1 bg-primary/20" />
                    </div>

                    <h2
                        className={clsx(
                            FontFamily.className,
                            "text-2xl sm:text-3xl xl:text-[2.5rem] leading-tight tracking-tight text-gray-900 dark:text-white text-balance"
                        )}
                    >
                        Ready to join the care team?
                    </h2>

                    <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                        Start with your experience, contact information, and availability. Our team can explain the documents and
                        verification needed for your position.
                    </p>

                    <div className="flex flex-col gap-4 rounded-xl border border-primary/20 bg-primary/[0.07] p-6 dark:bg-primary/[0.08]">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">Which roles do we hire for?</p>
                        <ul className="flex flex-wrap gap-2">
                            {roleOptions.map((role) => (
                                <li
                                    key={role}
                                    className="rounded-full border border-primary/25 bg-white px-3.5 py-1.5 text-xs sm:text-sm text-[#3d7a26] dark:border-primary/20 dark:bg-white/[0.06] dark:text-primary"
                                >
                                    {role}
                                </li>
                            ))}
                        </ul>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            Have your nurse aide credential information and care experience ready. Openings, schedules, pay, and
                            onboarding requirements are confirmed by recruiting.
                        </p>
                    </div>
                </>
            </InViewWrapper>
        </section>
    );
}
