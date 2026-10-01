import NavigationComponent from "@/app/components/NavSection";
import TopSection from "./components/TopSection";
import MeetTeamSection from "./sections/MeetTeamSection";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "Meet Our Team | AmeriCare Atlanta",
    description:
        "Meet the dedicated caregivers, nurses, and professionals behind AmeriCare — the team that brings compassion and quality home healthcare to every family we serve.",
};

export default function TeamPage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <TopSection />
                <MeetTeamSection />
            </div>
        </>
    );
}
