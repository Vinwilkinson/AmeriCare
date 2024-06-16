import BackgroundLayer from "./HomePage Sections/BackgroundLayer";
import ServicesOfferedSection from "./HomePage Sections/ServicesOfferedSection";
import HeroSection from "./HomePage Sections/HeroSection";
import { ServiceOffered } from "@/lib/ServiceOffered";
import OurServicesSection from "./HomePage Sections/OurServicesSection";
import MottoSection from "./HomePage Sections/MottoSection";
import OurMissionSection from "./HomePage Sections/OurMissionSection";
import TestimonialMarquee from "./HomePage Sections/TestimonialMarquee";
import FormSection from "./HomePage Sections/FormSection";
import JoinTeamSection from "./HomePage Sections/JoinTeamSection";
import OurServiceSection from "./HomePage Sections/OurServiceMiniSection";

export default function page() {
    return (
        <>
            <BackgroundLayer />
            <HeroSection />
            <OurServiceSection />
            <OurServicesSection />
            <MottoSection />
            <OurMissionSection />
            <TestimonialMarquee />
            <>
                {ServiceOffered.slice(0, 1).map(({ blob, btnText, btnUrl, description, imgAlt, imgSrc, title }) => (
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
            <FormSection />
            <JoinTeamSection />
        </>
    )
}