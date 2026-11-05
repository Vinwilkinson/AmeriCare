import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "AmeriCare Home Health",
        short_name: "AmeriCare",
        description:
            "Atlanta's award-winning in-home health care provider — CNA, PCA, pediatric nursing, and senior care services.",
        start_url: "/",
        display: "standalone",
        orientation: "portrait",
        background_color: "#ffffff",
        theme_color: "#b3262e",
        categories: ["health", "medical", "lifestyle"],
        lang: "en-US",
        scope: "/",
        icons: [
            {
                src: "https://americare.sirv.com/icons/Favicons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
                purpose: "maskable",
            },
            {
                src: "https://americare.sirv.com/icons/Favicons/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
                purpose: "any",
            },
        ],
        screenshots: [
            {
                src: "https://americare.sirv.com/americare-bg.jpg",
                sizes: "978x782",
                type: "image/jpeg",
            },
        ],
    };
}
