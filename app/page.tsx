import HeroSection from "./HomePage Sections/HeroSection";
import ProofStripSection from "./HomePage Sections/ProofStripSection";
import AudienceSection from "./HomePage Sections/AudienceSection";
import ServicesGridSection from "./HomePage Sections/ServicesGridSection";
import ProgramsSection from "./HomePage Sections/ProgramsSection";
import WhySplitSection from "./HomePage Sections/WhySplitSection";
import StepsSection from "./HomePage Sections/StepsSection";
import TeamBandSection from "./HomePage Sections/TeamBandSection";
import ResourcesGridSection from "./HomePage Sections/ResourcesGridSection";
import CareersBandSection from "./HomePage Sections/CareersBandSection";
import LeadFormSection from "./HomePage Sections/LeadFormSection";
import { Toaster } from "react-hot-toast";


export default function page() {
    return (
        <>
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
            <HeroSection />
            <ProofStripSection />
            <AudienceSection />
            <ServicesGridSection />
            <ProgramsSection />
            <WhySplitSection />
            <StepsSection />
            <TeamBandSection />
            <ResourcesGridSection />
            <CareersBandSection />
            <LeadFormSection />
        </>
    )
}
