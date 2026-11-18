"use client";

import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

export default function GetListedCTA() {
    return (
        <>
            <section className="bg-[#FCEEE3] dark:bg-[#241c15] py-16 px-6">
                <InViewWrapper animation={fadeIn} className="max-w-3xl mx-auto text-center flex flex-col items-center gap-5">
                    <>
                    <h2 className="text-3xl sm:text-4xl font-bold text-themeBlack dark:text-white text-balance">
                        Does your organization serve families in Georgia?
                    </h2>
                    <p className="text-themeBlack/70 dark:text-white/70 leading-relaxed max-w-xl">
                        Ask to be listed in our directory. It&apos;s free, and we review every
                        organization before adding it.
                    </p>
                    <a
                        href="mailto:support@americareinhome.com?subject=Get%20listed%20in%20community%20resources"
                        className="inline-flex items-center gap-2 bg-forest text-white font-bold px-8 py-4 rounded-full hover:bg-[#174528] smooth"
                    >
                        Get listed
                    </a>
                    </>
                </InViewWrapper>
            </section>

            <section className="bg-white dark:bg-darkBg px-6 pt-8 pb-16">
                <p className="max-w-3xl mx-auto text-center text-xs leading-relaxed text-muted dark:text-white/45">
                    Organizations listed here are independent. AmeriCare shares them as a community
                    service and isn&apos;t responsible for their services.
                </p>
            </section>
        </>
    );
}
