import NavigationComponent from "@/app/components/NavSection";
import TopSection from "./Components/TopSection";
import Testimonials from "./Components/Testimonials";

import { pageMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
    title: "Client Testimonials",
    description:
        "Read what Atlanta families say about AmeriCare's home health services. Real stories from clients and caregivers across Georgia.",
    path: "/testimonials",
});

export default function page() {
    return (
        <div className="">
            <NavigationComponent />
            <TopSection />
            <Testimonials />
        </div>
    )
}