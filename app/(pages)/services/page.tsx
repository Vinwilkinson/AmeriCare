import TopSection from "./components/TopSection";
import ServiceCategories from "./components/ServiceCategories";
import NavigationComponent from "@/app/components/NavSection";
import { Toaster } from "react-hot-toast";

import { pageMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
    title: "Home Care Services in Atlanta",
    description:
        "Explore AmeriCare's full range of in-home care services — CNA and PCA personal care, pediatric nursing, senior companion care, GAPP, CCSP, and more across Georgia.",
    path: "/services",
});

export default function ServicesPage() {
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
                <ServiceCategories />
            </div>
        </div>
    )
}
