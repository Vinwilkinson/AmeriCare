import TopSection from "./components/TopSection";
import ResourceCards from "./components/ResourceCards";
import BottomCTA from "./components/BottomCTA";
import NavigationComponent from "@/app/components/NavSection";
import { Toaster } from "react-hot-toast";

import { pageMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
    title: "Caregiver Resources & Guides",
    description:
        "Free home care guides, checklists, and resources for families navigating in-home care for seniors, medically fragile children, and adults across Atlanta.",
    path: "/resources",
});

export default function ResourcesPage() {
    return (
        <div>
            <Toaster
                position="bottom-right"
                toastOptions={
                    {
                        style: {
                            background: '#363636',
                            color: '#fff',
                        }
                    }
                }
            />
            <NavigationComponent />

            <div className="relative z-10">
                <TopSection />
                <ResourceCards />
                <BottomCTA />
            </div>
        </div>
    )
}
