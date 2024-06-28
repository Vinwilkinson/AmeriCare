import TopSection from "./components/TopSection";
import OurCareGivers from "./components/OurCaregivers";
import MedicarePrograms from "./components/MedicarePrograms";
import InfoTextSection from "./components/InfoTextSection";
import NavigationComponent from "@/app/components/NavSection";
import ServicesOfferedSection from "@/app/HomePage Sections/ServicesOfferedSection";
import { ServiceOffered } from "@/lib/ServiceOffered";
import FormSection from "@/app/HomePage Sections/FormSection";
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
                <InfoTextSection />
                <MedicarePrograms />
                <>
                {ServiceOffered.slice(1).map(({ blob, btnText, btnUrl, description, imgAlt, imgSrc, title }) => (
                    <ServicesOfferedSection
                        blob={blob}
                        btnText={btnText}
                        btnUrl={btnUrl}
                        description={description}
                        imgAlt={imgAlt}
                        imgSrc={imgSrc}
                        title={title}
                        key={title}
                    />
                ))}
            </>
                <OurCareGivers /> 
                <FormSection />
            </div>
        </div>
    )
}