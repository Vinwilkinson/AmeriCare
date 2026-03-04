import TopSection from "./sections/TopSection";
import AboutUsSection from "./sections/AboutUsSection";
import OurMissionSection from "./sections/OurMissionSection";
import MeetTeamSection from "./sections/MeetTeamSection";
import OurVisionSection from "./sections/OurVisionSection";
import OurProcessSection from "./sections/OurProcessSection";
import NavigationComponent from "@/app/components/NavSection";
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
                <MeetTeamSection />
                <OurMissionSection />
                <OurVisionSection />
            </div>
        </>
    )
}