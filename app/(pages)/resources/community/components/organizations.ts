export type CategoryId = "caregiver" | "benefits" | "school" | "life" | "jobs" | "community";

export interface Category {
    id: CategoryId;
    label: string;
}

export const categories: Category[] = [
    { id: "caregiver", label: "Caregiver support" },
    { id: "benefits", label: "Benefits & applications" },
    { id: "school", label: "School & IEP advocacy" },
    { id: "life", label: "Life & future planning" },
    { id: "jobs", label: "Jobs & day programs" },
    { id: "community", label: "Community & belonging" },
];

export interface Organization {
    id: string;
    name: string;
    type: string;
    location: string;
    description: string;
    tags: string[];
    categories: CategoryId[];
    contactName?: string;
    phone?: string;
    email?: string;
    text?: string;
    website: string;
    websiteUrl: string;
    eventsUrl?: string;
}

export const organizations: Organization[] = [
    {
        id: "together-we-care",
        name: "Together We Care",
        type: "Nonprofit",
        location: "Acworth, GA",
        description:
            "Caregiver support, benefits and application help, educational advocacy, and resource navigation for families across North Georgia — from first questions to long-term planning.",
        tags: [
            "Life planning",
            "Caregiver support",
            "Application help",
            "Educational advocacy",
            "Resource navigation",
            "Employment",
            "Community programs",
        ],
        categories: ["caregiver", "benefits", "school", "life", "jobs", "community"],
        contactName: "Jamil Stocks",
        phone: "(205) 617-7228",
        email: "jamil.stocks@togetherwecarega.org",
        website: "togetherwecarega.org",
        websiteUrl: "https://togetherwecarega.org",
    },
    {
        id: "blazesports-america",
        name: "BlazeSports America",
        type: "Nonprofit",
        location: "Atlanta, GA",
        description:
            "Adaptive sports, recreation, and life-skills programs for youth, adults, and veterans with physical disabilities across Metro Atlanta.",
        tags: ["Adaptive sports", "Youth programs", "Adult programs", "Veteran programs"],
        categories: ["community"],
        phone: "(404) 270-2000",
        email: "info@blazesports.org",
        website: "blazesports.org",
        websiteUrl: "https://blazesports.org",
    },
    {
        id: "childkind",
        name: "Childkind",
        type: "Nonprofit",
        location: "Tucker, GA",
        description:
            "Support for foster, adoptive, and kinship families caring for children with medical, emotional, and behavioral needs — including training, respite, and family services.",
        tags: ["Foster care", "Adoption support", "Medical needs", "Family services"],
        categories: ["caregiver"],
        phone: "(404) 248-1980",
        email: "info@childkind.org",
        website: "childkind.org",
        websiteUrl: "https://childkind.org",
    },
    {
        id: "covenant-care-adoptions",
        name: "Covenant Care Adoptions",
        type: "Nonprofit adoption agency",
        location: "Macon, GA",
        description:
            "Adoption guidance and lifelong support for expectant parents and families considering adoption in Middle Georgia.",
        tags: ["Adoption", "Pregnancy support", "Family services"],
        categories: ["life"],
        contactName: "Allison Fernandez",
        phone: "(478) 475-4990",
        text: "(478) 731-4565",
        website: "covenantcareadoptions.com",
        websiteUrl: "https://covenantcareadoptions.com",
    },
];
