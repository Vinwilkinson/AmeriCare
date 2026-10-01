export type ServiceCardIcon =
    | "pediatric-nursing"
    | "rehabilitation"
    | "skilled-nursing"
    | "personal-care"
    | "companionship"
    | "specialty-care";

export interface ServiceCardData {
    icon: ServiceCardIcon;
    label: string;
    title: string;
    description: string;
    bullets: string[];
}

export interface ServiceCategory {
    id: "child" | "adult";
    anchors: string[];
    tabLabel: string;
    tabHint: string;
    programLabel: string;
    heading: string;
    description: string;
    benefits: string[];
    ctaPrimary: { text: string; href: string };
    ctaSecondary: { text: string; href: string };
    ctaInfo: { text: string; href: string };
    image: { src: string; alt: string; width: number; height: number };
    accent: "primary" | "secondary";
    cards: ServiceCardData[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        id: "child",
        anchors: ["gapp"],
        tabLabel: "Care for a Child",
        tabHint: "Children with medical needs & pediatric nursing",
        programLabel: "Georgia Medicaid · GAPP",
        heading: "Care for children with complex medical needs, at home.",
        description:
            "The Georgia Pediatric Program (GAPP) provides in-home nursing services for medically fragile children under 21. It ensures children with complex medical needs receive continuous, high-quality care in the place they feel most comfortable — home.",
        benefits: ["Skilled Nursing", "Care Coordination", "Family Support"],
        ctaPrimary: { text: "Check Eligibility", href: "#check_eligibility" },
        ctaSecondary: { text: "Speak with a Coordinator", href: "/speak-with-coordinator" },
        ctaInfo: { text: "More Information", href: "/services/gapp" },
        image: {
            src: "https://americare.sirv.com/pexels-ron-lach-10638078.jpg",
            alt: "Smiling schoolchildren in uniform enjoying a treat together",
            width: 3174,
            height: 4761,
        },
        accent: "primary",
        cards: [
            {
                icon: "pediatric-nursing",
                label: "In-Home Nursing",
                title: "Pediatric Nursing",
                description:
                    "Our skilled pediatric nurses are specially trained to provide medical care, administer medications, and monitor the health of children with medical needs.",
                bullets: ["Medication administration", "Health monitoring", "Care coordination with families"],
            },
            {
                icon: "personal-care",
                label: "Daily Support",
                title: "Personal Care Assistance",
                description:
                    "We assist with activities of daily living (ADLs) such as bathing, dressing, and meal preparation, promoting independence and comfort.",
                bullets: ["Bathing and dressing support", "Meal preparation", "Mobility support"],
            },
        ],
    },
    {
        id: "adult",
        anchors: ["ccsp", "source"],
        tabLabel: "Care for an Adult",
        tabHint: "Older adults & people with disabilities",
        programLabel: "Medicaid Waiver · CCSP & SOURCE",
        heading: "Helping older adults and people with disabilities remain safely at home.",
        description:
            "The Community Care Services Program (CCSP) and Service Options Using Resources in a Community Environment (SOURCE) are Medicaid waiver programs designed to assist elderly and disabled individuals in Georgia with in-home support services that help them avoid long-term care facilities.",
        benefits: ["Personalized Care", "Comprehensive Support", "Wide Range of Services"],
        ctaPrimary: { text: "Check Eligibility", href: "#check_eligibility" },
        ctaSecondary: { text: "Speak with a Coordinator", href: "/speak-with-coordinator" },
        ctaInfo: { text: "More Information", href: "/services/ccsp-source" },
        image: {
            src: "https://americare.sirv.com/pexels-rollz-19971193.jpg",
            alt: "Older couple sharing a happy moment together on a park bench",
            width: 5602,
            height: 3735,
        },
        accent: "secondary",
        cards: [
            {
                icon: "personal-care",
                label: "Personal Care",
                title: "Personal Care Assistance",
                description:
                    "Compassionate help with daily activities so you can maintain independence while staying safe and comfortable in your own environment.",
                bullets: ["Bathing, dressing & grooming", "Meal preparation", "Mobility support"],
            },
            {
                icon: "companionship",
                label: "Companionship",
                title: "Companionship Services",
                description:
                    "Companionship is key to emotional well-being. Our caregivers are friendly faces, listeners, and companions — bringing warmth through conversation, games, and shared meals.",
                bullets: ["Conversation & shared activities", "Mealtime companionship", "Staying active and engaged"],
            },
        ],
    },
];
