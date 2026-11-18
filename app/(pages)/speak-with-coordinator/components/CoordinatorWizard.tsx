"use client";

import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useRef, useState } from "react";
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

type FieldKey = keyof CoordinatorData;
type FieldErrors = Partial<Record<FieldKey, string>>;

const FIELD_ORDER: FieldKey[] = ["audience", "firstName", "lastName", "phone", "email", "bestTime", "preference", "consent"];

export default function CoordinatorWizard() {
    const router = useRouter();
    const [submitting, setSubmitting] = useState(false);
    const [errors, setErrors] = useState<FieldErrors>({});
    const fieldRefs = useRef<Partial<Record<FieldKey, HTMLElement | null>>>({});
    const [formData, setFormData] = useState<CoordinatorData>({
        audience: "", firstName: "", lastName: "", phone: "", email: "", bestTime: "", preference: "", consent: false,
    });

    const update = (field: keyof CoordinatorData, value: string | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
    };

    const setFieldRef = (field: FieldKey) => (el: HTMLElement | null) => {
        fieldRefs.current[field] = el;
    };

    const validate = (): FieldErrors => {
        const next: FieldErrors = {};
        if (!formData.audience) next.audience = "Choose who needs care.";
        if (!formData.firstName.trim()) next.firstName = "Enter a first name.";
        if (!formData.lastName.trim()) next.lastName = "Enter a last name.";
        if (!formData.phone.trim()) next.phone = "Enter a phone number.";
        if (!formData.email.trim()) next.email = "Enter an email address.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) next.email = "Enter a valid email address.";
        if (!formData.bestTime) next.bestTime = "Choose a best time to be contacted.";
        if (!formData.preference) next.preference = "Choose a preferred contact method.";
        if (!formData.consent) next.consent = "Please agree to be contacted before submitting.";
        return next;
    };

    const focusField = (key: FieldKey) => {
        const el = fieldRefs.current[key];
        if (!el) return;
        const inner = el.querySelector<HTMLElement>("button, input, select");
        const target = inner ?? el;
        target.focus({ preventScroll: true });
        el.scrollIntoView({ behavior: "smooth", block: "center" });
    };

    const handleSubmit = async () => {
        const found = validate();
        setErrors(found);
        const firstInvalid = FIELD_ORDER.find((key) => found[key]);
        if (firstInvalid) {
            toast.error("Please complete the highlighted fields.");
            focusField(firstInvalid);
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
    const baseWrapperClass = clsx("relative smooth rounded-xl overflow-hidden", "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70");
    const wrapperClass = (key: FieldKey) => clsx(baseWrapperClass, errors[key] && "border-red-500 dark:border-red-500 focus-within:border-red-600 focus-within:dark:border-red-500");
    const errorText = (key: FieldKey) => errors[key] ? (
        <span id={`${key}-error`} role="alert" className="text-red-600 dark:text-red-400 text-sm font-medium">{errors[key]}</span>
    ) : null;
    const inputA11y = (key: FieldKey) => ({
        "aria-invalid": errors[key] ? true : undefined,
        "aria-describedby": errors[key] ? `${key}-error` : undefined,
    });

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
                        <div ref={setFieldRef("audience")} className="grid grid-cols-3 gap-3">
                            {[["pediatric", "A child"], ["adult", "An adult or senior"], ["unsure", "I'm not sure"]].map(([v, l]) => (
                                <button key={v} type="button" onClick={() => update("audience", v)} className={clsx(
                                    "p-4 rounded-xl border-2 text-center font-semibold transition-all cursor-pointer",
                                    formData.audience === v ? "border-primary bg-primary/10 shadow-md" : "border-black/10 dark:border-white/10 hover:border-primary/50",
                                    errors.audience && formData.audience !== v && "border-red-300 dark:border-red-500/50"
                                )}>{l}</button>
                            ))}
                        </div>
                        {errorText("audience")}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <span className="flex gap-1 sm:text-base text-sm">First name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                            <div className={wrapperClass("firstName")}>
                                <FaUser className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" />
                                <input ref={setFieldRef("firstName")} type="text" placeholder="First name" className={inputClass} value={formData.firstName} onChange={(e: ChangeEvent<HTMLInputElement>) => update("firstName", e.target.value)} required {...inputA11y("firstName")} />
                            </div>
                            {errorText("firstName")}
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="flex gap-1 sm:text-base text-sm">Last name <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                            <div className={wrapperClass("lastName")}>
                                <FaUser className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" />
                                <input ref={setFieldRef("lastName")} type="text" placeholder="Last name" className={inputClass} value={formData.lastName} onChange={(e: ChangeEvent<HTMLInputElement>) => update("lastName", e.target.value)} required {...inputA11y("lastName")} />
                            </div>
                            {errorText("lastName")}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Phone number <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className={wrapperClass("phone")}>
                            <FaPhone className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" />
                            <input ref={setFieldRef("phone")} type="tel" placeholder="(404) 555-0123" className={inputClass} value={formData.phone} onChange={(e: ChangeEvent<HTMLInputElement>) => update("phone", e.target.value)} required {...inputA11y("phone")} />
                        </div>
                        {errorText("phone")}
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Email address <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className={wrapperClass("email")}>
                            <FaEnvelope className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" />
                            <input ref={setFieldRef("email")} type="email" placeholder="name@example.com" className={inputClass} value={formData.email} onChange={(e: ChangeEvent<HTMLInputElement>) => update("email", e.target.value)} required {...inputA11y("email")} />
                        </div>
                        {errorText("email")}
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className="flex gap-1 sm:text-base text-sm">Best time to contact you <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                        <div className={wrapperClass("bestTime")}>
                            <select ref={setFieldRef("bestTime")} title="Best time" className={clsx(inputClass, "appearance-none")} value={formData.bestTime} onChange={(e) => update("bestTime", e.target.value)} required {...inputA11y("bestTime")}>
                                <option value="">Select one...</option>
                                <option value="morning">Morning (8am - 12pm)</option>
                                <option value="afternoon">Afternoon (12pm - 5pm)</option>
                                <option value="evening">Evening (5pm - 8pm)</option>
                                <option value="anytime">Anytime</option>
                            </select>
                        </div>
                        {errorText("bestTime")}
                    </div>

                    <div className="space-y-3">
                        <span className="font-semibold">Preferred contact method?</span>
                        <div ref={setFieldRef("preference")} className="grid grid-cols-3 gap-3">
                            {[["call", "Phone call"], ["text", "Text message"], ["email", "Email"]].map(([v, l]) => (
                                <button key={v} type="button" onClick={() => update("preference", v)} className={clsx(
                                    "p-4 rounded-xl border-2 text-center font-semibold transition-all cursor-pointer",
                                    formData.preference === v ? "border-primary bg-primary/10 shadow-md" : "border-black/10 dark:border-white/10 hover:border-primary/50",
                                    errors.preference && formData.preference !== v && "border-red-300 dark:border-red-500/50"
                                )}>{l}</button>
                            ))}
                        </div>
                        {errorText("preference")}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className={clsx("flex gap-3 items-start p-4 border rounded-xl cursor-pointer", errors.consent ? "border-red-500 dark:border-red-500" : "border-black/10 dark:border-white/10")}>
                            <input ref={setFieldRef("consent")} type="checkbox" checked={formData.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 w-4 h-4" {...inputA11y("consent")} />
                            <span className="text-sm leading-relaxed">I agree that AmeriCare may contact me using the method selected above. Consent is not a condition of any purchase. Message and data rates may apply.</span>
                        </label>
                        {errorText("consent")}
                    </div>

                    <button type="button" onClick={handleSubmit} disabled={submitting} className={clsx(
                        "w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all cursor-pointer",
                        submitting ? "bg-primary/30 text-white/50 cursor-not-allowed" : "bg-primary text-white hover:bg-primary/90 active:scale-95"
                    )}>
                        {submitting ? <><FaSpinner className="animate-spin" /> Submitting...</> : <><FaCheck /> Request My Callback</>}
                    </button>
                </div>
            </div>
        </InViewWrapper>
    );
}
