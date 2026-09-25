import TopSection from "./components/TopSection";
import EventsCalendar from "./components/EventsCalendar";
import NavigationComponent from "@/app/components/NavSection";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "Events | AmeriCare Atlanta",
    description: "AmeriCare's community events calendar for October 2026 through January 2027 - support groups, workshops, family activities, and our monthly parent webinar.",
};

export default function EventsPage() {
    return (
        <div>
            <NavigationComponent />

            <div className="relative z-10">
                <TopSection />
                <EventsCalendar />
            </div>
        </div>
    )
}
