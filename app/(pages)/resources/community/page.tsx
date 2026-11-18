import NavigationComponent from "@/app/components/NavSection";
import CommunityResources from "./CommunityResources";

import { pageMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
    title: "Community Resources",
    description:
        "Trusted Georgia nonprofits for caregiver support, benefits and applications, school and IEP advocacy, life planning, jobs, and community programs — vetted by AmeriCare.",
    path: "/resources/community",
});

export default function CommunityResourcesPage() {
    return (
        <div>
            <NavigationComponent />

            <div className="relative z-10">
                <CommunityResources />
            </div>
        </div>
    );
}
