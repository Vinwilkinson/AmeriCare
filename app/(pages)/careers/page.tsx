import CareersHero from "./sections/CareersHero";
import FormSection from "./sections/FormSection";
import { Toaster } from "react-hot-toast";
import NavigationComponent from "@/app/components/NavSection";

import { pageMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
    title: "CNA, PCA & Nursing Jobs in Georgia",
    description:
        "Explore CNA, PCA, family caregiver, RN, and LPN careers with AmeriCare in Georgia. Learn about qualifications, onboarding, and local training opportunities.",
    path: "/careers",
});

export default function CareersPage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <CareersHero />
                <FormSection />
                <Toaster
                    position="bottom-right"
                    toastOptions={{
                        style: {
                            background: "#363636",
                            color: "#fff",
                        },
                    }}
                />
            </div>
        </>
    );
}
