"use client"
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import CustomBtn from "@/app/components/CustomBtn";

export default function BottomCTA() {
    return (
        <section className="dark:bg-darkBg dark:text-white bg-[#F0F7EC] py-[6rem] px-6">
            <InViewWrapper animation={fadeIn} className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-6">
                <div className="flex flex-col items-center gap-6">
                    <h2 className="text-3xl sm:text-4xl font-semibold dark:text-white text-themeBlack">
                        Not sure where to start?
                    </h2>
                    <p className="dark:text-white/70 text-themeBlack/70 leading-relaxed max-w-[700px]">
                        Take the Parent Caregiver Scorecard and we&apos;ll help point you toward resources that may be most useful for your family.
                    </p>
                    <CustomBtn
                        text="START MY SCORECARD"
                        linkHref="/scorecard"
                        noBorder
                        inHero
                        customClass="sm:py-4 py-3"
                    />
                </div>
            </InViewWrapper>
        </section>
    )
}
