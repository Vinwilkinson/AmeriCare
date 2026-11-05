import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: [
                    "/thank-you",
                    "/parallax",
                    "/check-care-options/confirmation",
                    "/speak-with-coordinator/confirmation",
                    "/api/",
                ],
            },
        ],
        sitemap: "https://americareinhome.com/sitemap.xml",
        host: "https://americareinhome.com",
    };
}
