import HeroSection from "./HomePage Sections/HeroSection";
import OurServicesSection from "./HomePage Sections/OurServicesSection";
import MottoSection from "./HomePage Sections/MottoSection";
import OurMissionSection from "./HomePage Sections/OurMissionSection";
import TestimonialMarquee from "./HomePage Sections/TestimonialMarquee";
import FormSection from "./HomePage Sections/FormSection";
import JoinTeamSection from "./HomePage Sections/JoinTeamSection";
import OurServiceMiniSection from "./HomePage Sections/OurServiceMiniSection";
import { Toaster } from "react-hot-toast";
import ResourceCards from "./(pages)/resources/components/ResourceCards";


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
            <ResourceCards />
            <OurServiceMiniSection />
            <OurServicesSection />
            <MottoSection />
            <OurMissionSection />
            <TestimonialMarquee />
            <FormSection />
            <JoinTeamSection />
        </>
    )
}