import { serviceCategories, ServiceCardData } from "./ServiceCategories";

export type ProgramBenefitIcon =
    | "nurse"
    | "coordination"
    | "family"
    | "personal"
    | "support"
    | "services";

export interface ProgramBenefit {
    icon: ProgramBenefitIcon;
    title: string;
    text: string;
}

export interface ProgramPageData {
    id: "gapp" | "ccsp";
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    intro: string;
    quote: string;
    paragraphs: string[];
    aboutHeading: string;
    benefits: ProgramBenefit[];
    image: { src: string; alt: string; width: number; height: number };
    badgeLabel: string;
    badgeText: string;
    accent: "primary" | "secondary";
    cards: ServiceCardData[];
}

const childCards = serviceCategories.find((category) => category.id === "child")!.cards;
const adultCards = serviceCategories.find((category) => category.id === "adult")!.cards;

export const gappProgram: ProgramPageData = {
    id: "gapp",
    eyebrow: "For Kids · Georgia Medicaid",
    titleLead: "About ",
    titleAccent: "GAPP",
    intro:
        "The Georgia Pediatric Program (GAPP) provides in-home nursing services for medically fragile children under 21 — so children with complex medical needs can receive continuous, high-quality care in the place they feel most comfortable: home.",
    quote:
        "The Georgia Pediatric Program (GAPP) offers in-home nursing services for medically fragile children under 21, ensuring continuous, high-quality care.",
    paragraphs: [
        "The Georgia Pediatric Program (GAPP) provides in-home nursing services for medically fragile children under 21. This program ensures that children with complex medical needs receive continuous, high-quality care in their homes.",
        "At AmeriCare Home Health, we specialize in providing high-quality home health care services through Medicaid programs like CCSP, SOURCE, and GAPP. Our goal is to help you or your loved ones remain at home while receiving the care and support needed.",
    ],
    aboutHeading: "What is GAPP?",
    benefits: [
        { icon: "nurse", title: "Skilled Nursing", text: "In-home skilled nursing care" },
        { icon: "coordination", title: "Care Coordination", text: "Care coordination and support services" },
        { icon: "family", title: "Family Support", text: "Allows children to stay with their families" },
    ],
    image: {
        src: "https://americare.sirv.com/pexels-ron-lach-10638078.jpg",
        alt: "Smiling schoolchildren in uniform enjoying a treat together",
        width: 3174,
        height: 4761,
    },
    badgeLabel: "For Kids · GAPP",
    badgeText: "Care for children with medical needs",
    accent: "primary",
    cards: childCards,
};

export const ccspProgram: ProgramPageData = {
    id: "ccsp",
    eyebrow: "For Adults · Georgia Medicaid",
    titleLead: "About ",
    titleAccent: "CCSP & SOURCE",
    intro:
        "The Community Care Services Program (CCSP) and Service Options Using Resources in a Community Environment (SOURCE) are Medicaid waiver programs designed to assist elderly and disabled individuals in Georgia with in-home support services that help them avoid long-term care facilities.",
    quote:
        "CCSP and SOURCE are Georgia Medicaid programs offering in-home support to help elderly and disabled individuals avoid long-term care facilities.",
    paragraphs: [
        "The Community Care Services Program (CCSP) and Service Options Using Resources in a Community Environment (SOURCE) are Medicaid waiver programs designed to assist elderly and disabled individuals in Georgia. These programs offer in-home support services to help avoid long-term care facilities.",
        "At AmeriCare Home Health, we specialize in providing high-quality home health care services through Medicaid programs like CCSP, SOURCE, and GAPP. Our goal is to help you or your loved ones remain at home while receiving the care and support needed.",
    ],
    aboutHeading: "What is CCSP/SOURCE?",
    benefits: [
        { icon: "personal", title: "Personalized Care", text: "Personalized care tailored to individual needs" },
        { icon: "support", title: "Comprehensive Support", text: "Enhanced quality of life through comprehensive support" },
        { icon: "services", title: "Wide Range of Services", text: "Services include personal support, adult day health, and more" },
    ],
    image: {
        src: "https://americare.sirv.com/pexels-rollz-19971193.jpg",
        alt: "Older couple sharing a happy moment together on a park bench",
        width: 5602,
        height: 3735,
    },
    badgeLabel: "For Adults · CCSP & SOURCE",
    badgeText: "Care for older adults & people with disabilities",
    accent: "secondary",
    cards: adultCards,
};
