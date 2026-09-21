"use client";

import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaAsterisk, FaCheck, FaSpinner } from "react-icons/fa6";
import { fadeIn } from "@/lib/AnimationVariants";
import InViewWrapper from "@/app/components/InViewWrapper";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

interface CoordinatorData {
    audience: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    bestTime: string;
    preference: string;
    consent: boolean;
}

export default function CoordinatorWizard() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState<CoordinatorData>({
        audience: "", firstName: "", lastName: "", phone: "", email: "", bestTime: "", preference: "", consent: false,
    });

    const update = (field: keyof CoordinatorData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const canSubmit = formData.audience && formData.firstName && formData.lastName && formData.phone && formData.email && formData.bestTime && formData.preference && formData.consent;

    const handleSubmit = async () => {
        if (!canSubmit) {
            toast.error("Please fill in all fields and provide consent.");
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch("/api/coordinator", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Submission failed");
            router.push("/speak-with-coordinator/confirmation?submitted=1");
        } catch {
            toast.error("Something went wrong. Please try again or call us at (404) 494-2187.");
            setSubmitting(false);
        }
    };

    const inputClass = clsx("peer dark:bg-white/5 bg-primary/5 outline-none bg-transparent w-full py-4 px-12 sm:text-lg");
    const fieldWrapperClass = clsx("relative smooth rounded-xl overflow-hidden", "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70");

    return (
        <InViewWrapper animation={fadeIn} className="dark:bg-darkBg dark:text-white py-16 sm:px-[8vw] px-6 relative z-40">
            <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Request personal guidance</span>
                    <h2 className={clsx(FontFamily.className, "text-4xl sm:text-5xl font-bold mt-2")}>Let a care coordinator guide you</h2>
                    <p className="text-sm opacity-60 mt-2">Share only basic contact information. We will call, text, or email you within one business day.</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-3">
                        <span className="font-semibold">Who needs care?</span>
                        <div className="grid grid-cols-3 gap-3">
                            {[["pediatric", "A child"], ["adult", "An adult or senior"], ["unsure", "I'm not sure"]].map(([v, l]) => (
                                <button key={v} type="button" onClick={() => update("audience", v)} className={clsx(
                                    "p-4 rounded-xl border-2 text-center font-semibold transition-all cursor-pointer",
                                    formData.audience === v ? "border-primary bg-primary/10 shadow-md" : "border-black/10 dark:border-white/10 hover:border-primary/50"
                                )}>{l}</button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="flex gap-1 sm:text-base text-sm">First name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                            <div className={fieldWrapperClass}>
                                <FaUser className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" />
                                <input type="text" placeholder="First name" className={inputClass} value={formData.firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => update("firstName", e.target.value)} required />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="flex gap-1 sm:text-base text-sm">Last name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                            <div className={fieldWrapperClass}>
                                <FaUser className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" />
                                <input type="text" placeholder="Last name" className={inputClass} value={formData.lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => update("lastName", e.target.value)} required />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Phone number <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className={fieldWrapperClass}>
                            <FaPhone className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" />
                            <input type="tel" placeholder="(404) 555-0123" className={inputClass} value={formData.phone} onChange={(e: ChangeEvent<HTMLInputElement>) => update("phone", e.target.value)} required />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Email address <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className={fieldWrapperClass}>
                            <FaEnvelope className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" />
                            <input type="email" placeholder="name@example.com" className={inputClass} value={formData.email} onChange={(e: ChangeEvent<HTMLInputElement>) => update("email", e.target.value)} required />
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Best time to contact you <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className={fieldWrapperClass}>
                            <select title="Best time" className={clsx(inputClass, "appearance-none")} value={formData.bestTime} onChange={(e) => update("bestTime", e.target.value)} required>
                                <option value="">Select one...</option>
                                <option value="morning">Morning (8am - 12pm)</option>
                                <option value="afternoon">Afternoon (12pm - 5pm)</option>
                                <option value="evening">Evening (5pm - 8pm)</option>
                                <option value="anytime">Anytime</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <span className="font-semibold">Preferred contact method?</span>
                        <div className="grid grid-cols-3 gap-3">
                            {[["call", "Phone call"], ["text", "Text message"], ["email", "Email"]].map(([v, l]) => (
                                <button key={v} type="button" onClick={() => update("preference", v)} className={clsx(
                                    "p-4 rounded-xl border-2 text-center font-semibold transition-all cursor-pointer",
                                    formData.preference === v ? "border-primary bg-primary/10 shadow-md" : "border-black/10 dark:border-white/10 hover:border-primary/50"
                                )}>{l}</button>
                            ))}
                        </div>
                    </div>

                    <label className="flex gap-3 items-start p-4 border border-black/10 dark:border-white/10 rounded-xl cursor-pointer">
                        <input type="checkbox" checked={formData.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 w-4 h-4" />
                        <span className="text-sm leading-relaxed">I agree that AmeriCare may contact me using the method selected above. Consent is not a condition of any purchase. Message and data rates may apply.</span>
                    </label>

                    <button type="button" onClick={handleSubmit} disabled={submitting || !canSubmit} className={clsx(
                        "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all cursor-pointer",
                        submitting || !canSubmit ? "bg-primary/30 text-white/50 cursor-not-allowed" : "bg-primary text-white hover:bg-primary/90 active:scale-95"
                    )}>
                        {submitting ? <><FaSpinner className="animate-spin" /> Submitting...</> : <><FaCheck /> Request My Callback</>}
                    </button>
                </div>
            </div>
        </InViewWrapper>
    );
}
