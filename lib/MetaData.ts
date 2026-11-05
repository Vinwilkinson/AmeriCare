import { Metadata } from "next";

// ─── Site constants ─────────────────────────────────────────────────────────
export const SITE_URL = "https://americareinhome.com";
export const SITE_NAME = "AmeriCare";
export const SITE_TAGLINE = "AmeriCare Home Health | Atlanta's Award-Winning Home Health Provider";
export const SITE_DESCRIPTION =
    "Experience personalized in-home care delivered to your doorstep. Atlanta's top-rated home health care provider — award-winning CNA, PCA, pediatric nursing, and senior care services for your family.";

export const OG_IMAGE = {
    url: "https://americare.sirv.com/americare-bg.jpg",
    width: 978,
    height: 782,
    alt: "AmeriCare caregiver assisting a senior client at home in Atlanta, Georgia",
};

// ─── Base metadata (shared by every page) ───────────────────────────────────
export const generalMetadata: Metadata = {
    // Resolves relative image/url paths against this base — required by Next.js
    metadataBase: new URL(SITE_URL),

    title: {
        default: SITE_TAGLINE,
        // Page-level overrides become: "<page title> | AmeriCare"
        template: "%s | AmeriCare",
    },
    description: SITE_DESCRIPTION,

    keywords: [
        // Brand & location
        "AmeriCare", "AmeriCare home health", "AmeriCare Atlanta", "americareinhome.com",
        // Service types
        "home healthcare Atlanta", "in-home care Atlanta", "home health services Georgia",
        "CNA jobs Georgia", "PCA jobs Atlanta", "personal care assistant Atlanta",
        "certified nursing assistant Atlanta", "registered nurse home care Atlanta",
        "LPN home care Georgia", "private duty nursing Atlanta",
        // Audiences
        "pediatric home care Atlanta", "GAPP Georgia", "Georgia Pediatric Program",
        "medically fragile children care Atlanta", "senior home care Atlanta",
        "elderly care Atlanta", "adult in-home care Atlanta",
        // Conditions
        "Alzheimer's care Atlanta", "dementia care Atlanta", "respite care Atlanta",
        "stroke recovery at home", "Parkinson's care at home",
        "multiple sclerosis care at home", "tracheostomy care", "G-tube care at home",
        "seizure care at home", "chronic illness management at home",
        // Services
        "personal care ADLs", "medication management at home", "companionship services",
        "home health aide Atlanta", "meal preparation services at home",
        "bathing grooming assistance", "mobility assistance at home",
        "light housekeeping home care", "transportation assistance seniors",
        "post-surgery home care", "post-hospitalization care",
        // Programs
        "CCSP Georgia", "Community Care Services Program Atlanta",
        "Medicaid home care Georgia", "Medicaid waiver Georgia",
        // Trust signals
        "award-winning home health Atlanta", "licensed home health providers Georgia",
        "trusted caregivers Atlanta", "compassionate home care",
    ],

    authors: [
        { name: "AmeriCare", url: SITE_URL },
        { name: "Fabiconcept", url: "https://fabiconcept.online" },
    ],
    creator: "Calvin Wilkinson MPH",
    publisher: "AmeriCare Services Inc.",

    // ── Open Graph ────────────────────────────────────────────────────────────
    openGraph: {
        type: "website",
        siteName: SITE_NAME,
        title: SITE_TAGLINE,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        locale: "en_US",
        images: [OG_IMAGE],
    },

    // ── Twitter / X card ─────────────────────────────────────────────────────
    twitter: {
        card: "summary_large_image",
        site: "@AmeriCareInHome",
        title: "Compassionate Home Healthcare | AmeriCare Atlanta",
        description:
            "AmeriCare provides personalized, compassionate home healthcare for seniors and medically fragile children across Georgia. Free in-home assessment.",
        images: [OG_IMAGE.url],
    },

    // ── Favicons & app icons ─────────────────────────────────────────────────
    icons: {
        icon: [
            {
                url: "https://americare.sirv.com/icons/Favicons/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                url: "https://americare.sirv.com/icons/Favicons/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                url: "https://americare.sirv.com/icons/Favicons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
        ],
        shortcut: "https://americare.sirv.com/icons/Favicons/favicon.ico",
        apple: [
            {
                url: "https://americare.sirv.com/icons/Favicons/apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    },

    // ── Crawl / robots ───────────────────────────────────────────────────────
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    // ── Canonical (relative paths resolved against metadataBase) ────────────
    alternates: {
        canonical: "/",
    },

    // ── App-specific ─────────────────────────────────────────────────────────
    applicationName: SITE_NAME,
    referrer: "origin-when-cross-origin",
    category: "health",
};

// ─── Helper: build page-level metadata in one call ──────────────────────────
// Usage in any page.tsx:
//
//   export const metadata = pageMetadata({
//     title: "Services",
//     description: "...",
//     path: "/services",
//   });
//
export function pageMetadata({
    title,
    description,
    path,
    ogImage,
}: {
    title: string;
    description: string;
    path: string;
    ogImage?: typeof OG_IMAGE;
}): Metadata {
    const image = ogImage ?? OG_IMAGE;
    const url = `${SITE_URL}${path}`;

    return {
        ...generalMetadata,
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            ...generalMetadata.openGraph,
            title,
            description,
            url,
            images: [image],
        },
        twitter: {
            ...generalMetadata.twitter,
            title,
            description,
            images: [image.url],
        },
    };
}
