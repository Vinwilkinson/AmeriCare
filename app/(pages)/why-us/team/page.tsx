import NavigationComponent from "@/app/components/NavSection";
import HeroSection from "./sections/HeroSection";
import GlanceSection from "./sections/GlanceSection";
import IntroSection from "./sections/IntroSection";
import LeadershipSection from "./sections/LeadershipSection";
import SupportSection from "./sections/SupportSection";
import OrganizationSection from "./sections/OrganizationSection";
import StandardsSection from "./sections/StandardsSection";
import CareSection from "./sections/CareSection";
import PartnersSection from "./sections/PartnersSection";
import ProofSection from "./sections/ProofSection";
import MilestonesSection from "./sections/MilestonesSection";
import FoundationSection from "./sections/FoundationSection";
import FaqSection from "./sections/FaqSection";
import ClosingSection from "./sections/ClosingSection";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";
import "./team-design.css";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "Our Leadership & Home Care Team in Georgia | AmeriCare",
    description:
        "Meet AmeriCare’s executive, nursing, and support teams behind pediatric skilled nursing, GAPP, and adult CCSP/SOURCE home care in Georgia.",
};

export default function TeamPage() {
    return (
        <>
            <NavigationComponent />

            <main id="main" className="relative z-10 team-page pt-[7rem]">
                <HeroSection />
                <GlanceSection />
                <IntroSection />
                <LeadershipSection />
                <SupportSection />
                <OrganizationSection />
                <StandardsSection />
                <CareSection />
                <PartnersSection />
                <ProofSection />
                <MilestonesSection />
                <FoundationSection />
                <FaqSection />
                <ClosingSection />
            </main>
        </>
    );
}
