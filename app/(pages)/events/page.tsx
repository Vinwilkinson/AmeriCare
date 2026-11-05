import TopSection from "./components/TopSection";
import EventsCalendar from "./components/EventsCalendar";
import NavigationComponent from "@/app/components/NavSection";

import { pageMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
    title: "Community Events Calendar",
    description:
        "AmeriCare community events in Atlanta — caregiver support groups, family workshops, pediatric care webinars, and more.",
    path: "/events",
});

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
