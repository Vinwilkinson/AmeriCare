"use client";

import NavigationComponent from "@/app/components/NavSection";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCalendarCheck, FaPhone, FaLocationDot, FaClock, FaUser, FaEnvelope } from "react-icons/fa6";
import { Playfair_Display } from "next/font/google";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

interface CarePathData {
    audience: string;
    need: string;
    coverage: string;
    status: string;
    zip: string;
    timeline: string;
    relationship: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    preference: string[];
    additionalNotes: string;
}

const needLabel = (n: string) => {
    const labels: Record<string, string> = {
        nursing: "Skilled nursing care",
        therapy: "Physical / occupational therapy",
        personal: "Personal care assistance",
        companionship: "Companionship / supervision",
        medical: "Medical equipment support",
        other: "Other services",
    };
    return labels[n] || n;
};

const coverageLabel = (c: string) => {
    const labels: Record<string, string> = {
        medicaid: "Medicaid",
        medicare: "Medicare",
        private: "Private insurance",
        private_pay: "Private pay",
        va: "VA benefits",
        unsure: "Not sure",
    };
    return labels[c] || c;
};

const statusLabel = (s: string) => {
    const labels: Record<string, string> = {
        applying: "Currently applying",
        approved: "Already approved",
        denied: "Previously denied",
        unsure: "Not sure",
        none: "No program enrollment",
    };
    return labels[s] || s;
};

const timelineLabel = (t: string) => {
    const labels: Record<string, string> = {
        asap: "As soon as possible",
        within_7: "Within 7 days",
        within_30: "Within 30 days",
        more_than_30: "More than 30 days",
    };
    return labels[t] || t;
};

const relationshipLabel = (r: string) => {
    const labels: Record<string, string> = {
        parent: "Parent / guardian",
        spouse: "Spouse / partner",
        child: "Adult child",
        sibling: "Sibling",
        self: "Self",
        other: "Other family member",
    };
    return labels[r] || r;
};

function getRecommendation(data: CarePathData) {
    if (data.audience === "pediatric") {
        return {
            title: "Pediatric care review",
            subtitle: "YOUR NEXT STEP",
            description: "Based on the general answers provided, these are the options AmeriCare's intake team should review with you.",
            cardTitle: "Pediatric care guidance",
            cardBullets: [
                `Care is needed in ZIP code ${data.zip || "provided"}.`,
                `Your requested timing: ${timelineLabel(data.timeline)}.`,
                "Eligibility, authorization, staffing, and service area must be confirmed.",
                `Coverage pathway: ${coverageLabel(data.coverage)}.`,
            ],
            cardNote: "AmeriCare should confirm the appropriate payment or Medicaid pathway during intake.",
        };
    }
    return {
        title: "Adult and senior care review",
        subtitle: "YOUR NEXT STEP",
        description: "Based on the general answers provided, these are the options AmeriCare's intake team should review with you.",
        cardTitle: "Personal support services",
        cardBullets: [
            `Care is needed in ZIP code ${data.zip || "provided"}.`,
            `Your requested timing: ${timelineLabel(data.timeline)}.`,
            "Eligibility, authorization, staffing, and service area must be confirmed.",
            `Coverage pathway: ${coverageLabel(data.coverage)}.`,
        ],
        cardNote: "AmeriCare should confirm the appropriate payment or Medicaid pathway during intake.",
    };
}

function ConfirmationContent() {
    const searchParams = useSearchParams();
    const submitted = searchParams.get("submitted");
    const router = useRouter();
    const [data, setData] = useState<CarePathData | null>(null);

    useEffect(() => {
        if (!submitted) {
            router.replace("/check-care-options");
            return;
        }
        const stored = sessionStorage.getItem("carePathResult");
        if (stored) {
            setData(JSON.parse(stored));
        }
    }, [submitted, router]);

    if (!submitted || !data) return null;

    const rec = getRecommendation(data);

    return (
        <div className="relative z-10 dark:bg-darkBg min-h-screen">
            {/* Breadcrumb */}
            <div className="pt-28 pb-4 sm:px-[8vw] px-6">
                <div className="max-w-4xl mx-auto">
                    <nav className="text-sm">
                        <Link href="/check-care-options" className="text-primary hover:underline">Check Care Options</Link>
                        <span className="text-white/40 mx-2">/</span>
                        <span className="text-white/60">Results</span>
                    </nav>
                </div>
            </div>

            {/* Hero Section */}
            <div className="pb-12 sm:px-[8vw] px-6">
                <div className="max-w-4xl mx-auto">
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">{rec.subtitle}</span>
                    <h1 className={`${FontFamily.className} text-4xl sm:text-5xl lg:text-6xl font-bold mt-3 mb-6 text-white leading-tight`}>{rec.title}</h1>
                    <p className="text-lg text-white/60 max-w-2xl">{rec.description}</p>
                </div>
            </div>

            {/* Recommendation Card */}
            <div className="pb-12 sm:px-[8vw] px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(135deg, #1a3a2a 0%, #0d261a 50%, #1a4a3a 100%)" }}>
                        <div className="p-8 sm:p-10">
                            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Primary match</span>
                            <h2 className={`${FontFamily.className} text-3xl sm:text-4xl font-bold text-white mb-4`}>{rec.cardTitle}</h2>
                            <p className="text-white/80 mb-6">{rec.cardNote}</p>
                            <ul className="space-y-3">
                                {rec.cardBullets.map((bullet, i) => (
                                    <li key={i} className="flex items-start gap-3 text-white/90">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Thank You + Summary */}
            <div className="pb-12 sm:px-[8vw] px-6">
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                    {/* Thank You Card */}
                    <div className="rounded-2xl border-2 border-white/10 p-8">
                        <h2 className={`${FontFamily.className} text-3xl font-bold text-white mb-3`}>Thank you, {data.firstName}.</h2>
                        <p className="text-white/60 mb-8">A care coordinator will review your information and respond within one business day.</p>
                        <div className="flex flex-col gap-3">
                            <Link href="/book-an-appointment" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 active:scale-95 transition-all">
                                <FaCalendarCheck /> Schedule a Consultation
                            </Link>
                            <Link href="/check-care-options" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-white/10 text-white hover:border-primary/50 transition-all">
                                Check another path
                            </Link>
                        </div>
                    </div>

                    {/* Summary Card */}
                    <div className="rounded-2xl border-2 border-white/10 p-8">
                        <h3 className="text-lg font-semibold text-white mb-6">Your submitted details</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-white/50 text-sm">Care path</span>
                                <span className="text-white font-medium">{data.audience === "pediatric" ? "Child / Pediatric care" : "Adult / Senior care"}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-white/50 text-sm">Support needed</span>
                                <span className="text-white font-medium">{needLabel(data.need)}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-white/50 text-sm">Program / coverage</span>
                                <span className="text-white font-medium">{coverageLabel(data.coverage)}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-white/50 text-sm">Application status</span>
                                <span className="text-white font-medium">{statusLabel(data.status)}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-white/50 text-sm">ZIP code</span>
                                <span className="text-white font-medium flex items-center gap-1.5"><FaLocationDot className="text-primary" /> {data.zip}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-white/50 text-sm">Timeline</span>
                                <span className="text-white font-medium flex items-center gap-1.5"><FaClock className="text-primary" /> {timelineLabel(data.timeline)}</span>
                            </div>
                            <div className="flex justify-between items-center py-3 border-b border-white/5">
                                <span className="text-white/50 text-sm">Relationship</span>
                                <span className="text-white font-medium flex items-center gap-1.5"><FaUser className="text-primary" /> {relationshipLabel(data.relationship)}</span>
                            </div>
                            <div className="flex justify-between items-center py-3">
                                <span className="text-white/50 text-sm">Contact</span>
                                <span className="text-white font-medium flex items-center gap-1.5"><FaEnvelope className="text-primary" /> {data.email}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom CTA */}
            <div className="pb-20 sm:px-[8vw] px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-white/40 text-sm mb-4">Need immediate help?</p>
                    <Link href="tel:4044942187" className="inline-flex items-center gap-2 text-primary hover:underline font-semibold">
                        <FaPhone /> Call (404) 494-2187
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function ConfirmationPage() {
    return (
        <div>
            <NavigationComponent />
            <Suspense>
                <ConfirmationContent />
            </Suspense>
        </div>
    );
}
