import NavigationComponent from "@/app/components/NavSection";
import HeroSection from "./sections/HeroSection";
import MissionSection from "./sections/MissionSection";
import ValuesSection from "./sections/ValuesSection";
import PathwaysSection from "./sections/PathwaysSection";
import ProcessSection from "./sections/ProcessSection";
import PeopleSection from "./sections/PeopleSection";
import ExpectSection from "./sections/ExpectSection";
import FaqSection from "./sections/FaqSection";
import "./why-design.css";

import { pageMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
    title: "Why Choose AmeriCare",
    description:
        "Meet AmeriCare's mission and approach to pediatric skilled nursing, adult personal support, and companionship in Georgia. Understand your next step toward care at home.",
    path: "/why-us",
});

export default function WhyUsPage() {
    return (
        <>
            <NavigationComponent />

            <main id="main" className="relative z-10 why-page pt-[8rem]">
                <HeroSection />
                <MissionSection />
                <ValuesSection />
                <PathwaysSection />
                <ProcessSection />
                <PeopleSection />
                <ExpectSection />
                <FaqSection />
            </main>
        </>
    )
}
