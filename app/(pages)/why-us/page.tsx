import TopSection from "./sections/TopSection";
// import AboutUsSection from "./sections/AboutUsSection";
import OurMissionSection from "./sections/OurMissionSection";
import OurVisionSection from "./sections/OurVisionSection";
import OurProcessSection from "./sections/OurProcessSection";
import NavigationComponent from "@/app/components/NavSection";
import Link from "next/link";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = {...generalMetadata, title: "Why AmeriCare | AmeriCare Atlanta"};


export default function WhyUsPage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <TopSection />
                <OurProcessSection />
                {/* <AboutUsSection /> */}
                <div className="dark:bg-darkBg bg-white grid-bg text-center sm:py-16 py-10 px-6">
                    <Link
                        href="/why-us/team"
                        className="inline-flex items-center gap-2 text-primary font-semibold sm:text-2xl text-xl hover:gap-4 smooth"
                    >
                        Meet Our Team <span aria-hidden="true">→</span>
                    </Link>
                </div>
                <OurMissionSection />
                <OurVisionSection />
            </div>
        </>
    )
}