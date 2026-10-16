import CareersHero from "./sections/CareersHero";
import CareersContent from "./sections/CareersContent";
import ApplicationIntro from "./sections/ApplicationIntro";
import FormSection from "./sections/FormSection";
import CareersCta from "./sections/CareersCta";
import { Toaster } from "react-hot-toast";
import NavigationComponent from "@/app/components/NavSection";
import { Metadata } from "next";
import { generalMetadata } from "@/lib/MetaData";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "CNA, PCA & Nursing Jobs in Georgia | AmeriCare Careers",
    description:
        "Explore CNA, PCA, family caregiver, RN and LPN careers with AmeriCare in Georgia. Learn about qualifications, onboarding documents and local training.",
};

export default function CareersPage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <CareersHero />
                <CareersContent />
                <ApplicationIntro />
                <FormSection />
                <CareersCta />
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
