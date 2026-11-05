import { MetadataRoute } from "next";

const BASE = "https://americareinhome.com";

// Use a fixed date per page so the sitemap is stable between builds.
// Update a page's date string whenever its content significantly changes.
export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE,
            lastModified: "2026-11-01",
            changeFrequency: "weekly",
            priority: 1.0,
        },
        // ── High-intent conversion pages ─────────────────────────────────────
        {
            url: `${BASE}/book-an-appointment`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 1.0,
        },
        {
            url: `${BASE}/check-care-options`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 0.95,
        },
        {
            url: `${BASE}/speak-with-coordinator`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 0.95,
        },
        // ── Core service pages ───────────────────────────────────────────────
        {
            url: `${BASE}/services`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 0.9,
        },
        {
            url: `${BASE}/services/gapp`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${BASE}/services/ccsp-source`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 0.85,
        },
        // ── Trust & why us ───────────────────────────────────────────────────
        {
            url: `${BASE}/why-us`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${BASE}/why-us/team`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE}/testimonials`,
            lastModified: "2026-11-01",
            changeFrequency: "weekly",
            priority: 0.7,
        },
        // ── Resources & events ───────────────────────────────────────────────
        {
            url: `${BASE}/resources`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 0.7,
        },
        {
            url: `${BASE}/events`,
            lastModified: "2026-11-01",
            changeFrequency: "weekly",
            priority: 0.65,
        },
        // ── Careers ──────────────────────────────────────────────────────────
        {
            url: `${BASE}/careers`,
            lastModified: "2026-11-01",
            changeFrequency: "monthly",
            priority: 0.7,
        },
        // ── Legal ────────────────────────────────────────────────────────────
        {
            url: `${BASE}/policy`,
            lastModified: "2026-01-01",
            changeFrequency: "yearly",
            priority: 0.2,
        },
    ];
}
