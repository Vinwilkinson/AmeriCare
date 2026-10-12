import TopSection from "./components/TopSection";
import ServiceCategories from "./components/ServiceCategories";
import OurCareGivers from "./components/OurCaregivers";
import NavigationComponent from "@/app/components/NavSection";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {...generalMetadata, title: "Services | AmeriCare Atlanta"};

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
                <OurCareGivers />
            </div>
        </div>
    )
}
