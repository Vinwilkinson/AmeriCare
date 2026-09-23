"use client";

import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaAsterisk, FaAddressBook, FaAngleRight, FaAngleLeft, FaCheck, FaSpinner } from "react-icons/fa6";
import { fadeIn } from "@/lib/AnimationVariants";
import InViewWrapper from "@/app/components/InViewWrapper";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

type Step = { id: string; title: string; options?: [string, string, string?][]; fields?: [string, string, string, string][]; multi?: boolean; help?: string };

interface FormData {
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
    consent: boolean;
    additionalNotes: string;
}

const pediatricFlowSteps: Step[] = [
    { id: "audience", title: "Who needs care?", options: [["pediatric", "A child", "Explore pediatric skilled nursing and GAPP"], ["adult", "An adult or senior", "Explore personal support, companionship, CCSP, and SOURCE"], ["unsure", "I'm not sure yet", "AmeriCare can help choose the right path"]] },
    { id: "need", title: "What kind of help are you exploring?", options: [["nursing", "Skilled nursing at home", "Ongoing care from an RN or LPN"], ["personal", "Personal support", "Help with daily activities or supervision"], ["respite", "Respite support", "Relief and support for the family caregiver"], ["unsure", "I'm not sure", "I would like AmeriCare to guide me"]] },
    { id: "coverage", title: "Which program or payment option applies right now?", help: "It is okay if you are unsure. AmeriCare will verify eligibility and authorization.", options: [["gapp", "GAPP"], ["medicaid", "Georgia Medicaid, but not GAPP"], ["private", "Private insurance"], ["none", "No current coverage"], ["unsure", "I'm not sure"]] },
    { id: "status", title: "Where are you in the GAPP process?", options: [["approved", "Already approved or receiving services"], ["applying", "Application or assessment in progress"], ["new", "Have not started yet"], ["transfer", "Looking to transfer agencies"], ["unsure", "I'm not sure"]] },
    { id: "location", title: "Where and when is care needed?", fields: [["zip", "Care ZIP code", "text", "Enter 5-digit ZIP code"], ["timeline", "When would you like help to begin?", "select", "As soon as possible|Within 30 days|More than 30 days|Just gathering information"]] },
    { id: "relationship", title: "What is your relationship to the child?", options: [["parent", "Parent or guardian"], ["family", "Other family member"], ["professional", "Case manager or professional"], ["other", "Other"]] },
    { id: "contact", title: "Who should AmeriCare contact?", fields: [["firstName", "First name", "text", "First name"], ["lastName", "Last name", "text", "Last name"], ["phone", "Phone number", "tel", "(404) 555-0123"], ["email", "Email address", "email", "name@example.com"]] },
    { id: "preference", title: "How may AmeriCare contact you?", help: "Choose every method you authorize.", options: [["call", "Phone call"], ["text", "Text message"], ["email", "Email"]], multi: true },
    { id: "review", title: "Review your request" },
];

const adultFlowSteps: Step[] = [
    { id: "audience", title: "Who needs care?", options: [["pediatric", "A child", "Explore pediatric skilled nursing and GAPP"], ["adult", "An adult or senior", "Explore personal support, companionship, CCSP, and SOURCE"], ["unsure", "I'm not sure yet", "AmeriCare can help choose the right path"]] },
    { id: "need", title: "What type of support are you looking for?", options: [["personal", "Personal support", "Bathing, dressing, meals, mobility, or supervision"], ["companionship", "Companionship", "Conversation, routines, and social support"], ["both", "Both services", "Personal support and companionship"], ["unsure", "I'm not sure", "I would like AmeriCare to guide me"]] },
    { id: "coverage", title: "Which program or payment option applies right now?", help: "It is okay if you are unsure. AmeriCare will verify eligibility and authorization.", options: [["ccsp", "CCSP"], ["source", "SOURCE"], ["medicaid", "Georgia Medicaid, but not CCSP or SOURCE"], ["private", "Private pay or insurance"], ["unsure", "I'm not sure"]] },
    { id: "status", title: "Where are you in the CCSP or SOURCE process?", options: [["approved", "Already approved or receiving services"], ["applying", "Application or assessment in progress"], ["new", "Have not started yet"], ["transfer", "Looking to transfer agencies"], ["unsure", "I'm not sure"]] },
    { id: "location", title: "Where and when is care needed?", fields: [["zip", "Care ZIP code", "text", "Enter 5-digit ZIP code"], ["timeline", "When would you like help to begin?", "select", "As soon as possible|Within 30 days|More than 30 days|Just gathering information"]] },
    { id: "relationship", title: "What is your relationship to the person needing care?", options: [["self", "I need care for myself"], ["family", "Family member or caregiver"], ["professional", "Case manager or professional"], ["other", "Other"]] },
    { id: "contact", title: "Who should AmeriCare contact?", fields: [["firstName", "First name", "text", "First name"], ["lastName", "Last name", "text", "Last name"], ["phone", "Phone number", "tel", "(404) 555-0123"], ["email", "Email address", "email", "name@example.com"]] },
    { id: "preference", title: "How may AmeriCare contact you?", help: "Choose every method you authorize.", options: [["call", "Phone call"], ["text", "Text message"], ["email", "Email"]], multi: true },
    { id: "review", title: "Review your request" },
];

const unsureFlowSteps: Step[] = [
    { id: "audience", title: "Who needs care?", options: [["pediatric", "A child", "Explore pediatric skilled nursing and GAPP"], ["adult", "An adult or senior", "Explore personal support, companionship, CCSP, and SOURCE"], ["unsure", "I'm not sure yet", "AmeriCare can help choose the right path"]] },
    { id: "unsureNeed", title: "Which statement sounds closest to what you need?", options: [["pediatric", "Care for a child"], ["adult", "Care for an adult or senior"], ["talk", "I would rather speak with a coordinator"]] },
    { id: "location", title: "Where is care needed?", fields: [["zip", "Care ZIP code", "text", "Enter 5-digit ZIP code"], ["timeline", "When would you like help to begin?", "select", "As soon as possible|Within 30 days|More than 30 days|Just gathering information"]] },
    { id: "contact", title: "Who should AmeriCare contact?", fields: [["firstName", "First name", "text", "First name"], ["lastName", "Last name", "text", "Last name"], ["phone", "Phone number", "tel", "(404) 555-0123"], ["email", "Email address", "email", "name@example.com"]] },
    { id: "preference", title: "How may AmeriCare contact you?", options: [["call", "Phone call"], ["text", "Text message"], ["email", "Email"]], multi: true },
    { id: "review", title: "Review your request" },
];

function getSteps(audience: string): Step[] {
    if (audience === "pediatric") return pediatricFlowSteps;
    if (audience === "adult") return adultFlowSteps;
    return unsureFlowSteps;
}

function labelFor(value: string): string {
    const labels: Record<string, string> = {
        pediatric: "Child / pediatric care", adult: "Adult or senior care", unsure: "Not sure",
        nursing: "Skilled nursing at home", personal: "Personal support", respite: "Respite support",
        companionship: "Companionship", both: "Personal support and companionship",
        gapp: "GAPP", ccsp: "CCSP", source: "SOURCE", medicaid: "Georgia Medicaid",
        private: "Private pay or insurance", none: "No current coverage",
        approved: "Already approved", applying: "Application in progress",
        new: "Have not started", transfer: "Transfer agencies",
        parent: "Parent or guardian", family: "Family member or caregiver",
        professional: "Case manager or professional", self: "Care for myself", other: "Other",
        call: "Phone call", text: "Text message", email: "Email",
    };
    return labels[value] || value || "Not answered";
}

function reviewRows(a: FormData) {
    const rows: [string, string][] = [
        ["Care path", labelFor(a.audience)],
        ["Support needed", labelFor(a.need)],
        ["Program / coverage", labelFor(a.coverage)],
        ["Application status", labelFor(a.status)],
        ["Care location", a.zip || "Not provided"],
        ["Timing", a.timeline || "Not provided"],
        ["Relationship", labelFor(a.relationship)],
        ["Contact", `${a.firstName} ${a.lastName}`.trim() || "Not provided"],
        ["Phone", a.phone || "Not provided"],
        ["Email", a.email || "Not provided"],
        ["Authorized contact", a.preference.map(labelFor).join(", ") || "Not selected"],
    ];
    return rows.filter(([, v]) => v !== "Not answered");
}

function getRecommendation(a: FormData) {
    const isPediatric = a.audience === "pediatric";
    const program = a.coverage;
    const need = a.need;

    if (isPediatric) {
        const service = need === "nursing" ? "Pediatric skilled nursing" : "Pediatric care guidance";
        const prog = program === "gapp" ? "GAPP" : null;
        return { title: "Pediatric care review", service, program: prog };
    }
    const service = need === "companionship" ? "Companionship" : need === "both" ? "Personal support and companionship" : "Personal support services";
    const prog = program === "ccsp" ? "CCSP" : program === "source" ? "SOURCE" : null;
    return { title: "Adult and senior care review", service, program: prog };
}

export default function CarePathWizard() {
    const router = useRouter();
    const [flowStep, setFlowStep] = useState(0);
    const [submitting, setSubmitting] = useState(false);
    const [flowError, setFlowError] = useState("");
    const [formData, setFormData] = useState<FormData>({
        audience: "", need: "", coverage: "", status: "",
        zip: "", timeline: "", relationship: "",
        firstName: "", lastName: "", phone: "", email: "",
        preference: [], consent: false, additionalNotes: "",
    });

    const steps = getSteps(formData.audience);
    const currentStep = steps[flowStep] || steps[0];
    const pct = Math.round(((flowStep + 1) / steps.length) * 100);

    const update = (field: keyof FormData, value: string | string[] | boolean) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const togglePref = (value: string) => {
        setFormData((prev) => {
            const arr = prev.preference.includes(value)
                ? prev.preference.filter((v) => v !== value)
                : [...prev.preference, value];
            return { ...prev, preference: arr };
        });
    };

    const validate = (): string => {
        const a = formData;
        const step = currentStep;
        if (step.options) {
            if (step.multi) {
                if (!a.preference.length) return "Please choose at least one contact method.";
            } else {
                const val = a[step.id as keyof FormData];
                if (!val || (typeof val === "string" && !val)) return "Please choose an answer before continuing.";
            }
        }
        if (step.fields) {
            for (const [id, label] of step.fields) {
                const val = a[id as keyof FormData];
                if (!val || (typeof val === "string" && !val)) return `Please enter ${label.toLowerCase()}.`;
            }
            if (step.fields.some((f) => f[0] === "zip") && !/^\d{5}$/.test(a.zip)) return "Please enter a valid 5-digit ZIP code.";
            if (step.fields.some((f) => f[0] === "phone") && !/\d{7}/.test(a.phone.replace(/\D/g, ""))) return "Please enter a valid phone number.";
            if (step.fields.some((f) => f[0] === "email") && !/^\S+@\S+\.\S+$/.test(a.email)) return "Please enter a valid email address.";
        }
        if (step.id === "review" && !a.consent) return "Please check the consent box before sending the request.";
        return "";
    };

    const handleOptionClick = (value: string) => {
        const step = currentStep;
        if (step.multi) {
            togglePref(value);
            setFlowError("");
            return;
        }

        if (step.id === "audience") {
            const old = formData.audience;
            if (old && old !== value) {
                setFormData((prev) => ({ ...prev, audience: value, need: "", coverage: "", status: "", relationship: "" }));
            } else {
                update("audience", value);
            }
            const path = value === "pediatric" || value === "adult" ? value : "";
            setFormData((prev) => ({ ...prev, audience: value, need: "", coverage: "", status: "", relationship: "" }));
            setFlowStep(1);
            setFlowError("");
            return;
        }

        if (step.id === "unsureNeed") {
            if (value === "pediatric" || value === "adult") {
                setFormData((prev) => ({ ...prev, audience: value, need: "", coverage: "", status: "", relationship: "" }));
                setFlowStep(1);
            } else {
                setFlowStep(flowStep + 1);
            }
            setFlowError("");
            return;
        }

        update(step.id as keyof FormData, value);
        setFlowStep(flowStep + 1);
        setFlowError("");
    };

    const handleNext = () => {
        const err = validate();
        if (err) { setFlowError(err); return; }
        if (currentStep.id === "review") { handleSubmit(); return; }
        setFlowStep(flowStep + 1);
        setFlowError("");
    };

    const handleSubmit = async () => {
        setSubmitting(true);
        try {
            const res = await fetch("/api/care-path", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!res.ok) throw new Error("Submission failed");
            sessionStorage.setItem("carePathResult", JSON.stringify(formData));
            router.push("/check-care-options/confirmation?submitted=1");
        } catch {
            toast.error("Something went wrong. Please try again or call us at (404) 494-2187.");
            setSubmitting(false);
        }
    };

    const inputClass = clsx("peer dark:bg-white/5 bg-primary/5 outline-none bg-transparent w-full py-4 px-12 sm:text-lg");
    const fieldWrapperClass = clsx("relative smooth rounded-xl overflow-hidden", "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md focus-within:shadow-white/50 dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70");
    const labelClass = "font-semibold text-lg";

    return (
        <InViewWrapper animation={fadeIn} className="dark:bg-darkBg dark:text-white py-16 sm:px-[8vw] px-6 relative z-40">
            <>
            <div className="max-w-2xl mx-auto mb-8">
                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm opacity-60">Step {flowStep + 1} of {steps.length}</span>
                    <button type="button" onClick={() => { setFlowStep(0); setFormData({ audience: "", need: "", coverage: "", status: "", zip: "", timeline: "", relationship: "", firstName: "", lastName: "", phone: "", email: "", preference: [], consent: false, additionalNotes: "" }); }} className="text-sm text-primary hover:underline cursor-pointer">Start Over</button>
                </div>
                <div className="w-full h-2 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
                </div>
            </div>

            <div className="max-w-2xl mx-auto">
                {currentStep.id === "review" ? (
                    <div className="space-y-6">
                        <div><span className="text-sm font-semibold text-primary uppercase tracking-wider">Final review</span><h2 className={clsx(FontFamily.className, "text-4xl sm:text-5xl font-bold mt-2")}>Review your request</h2><p className="text-sm opacity-60 mt-2">Confirm these general details before sending. AmeriCare will discuss protected health information through an approved secure process.</p></div>
                        <div className="rounded-xl border-2 border-black/10 dark:border-white/10 overflow-hidden">
                            {reviewRows(formData).map(([k, v]) => (
                                <div key={k} className="flex justify-between items-center px-5 py-3 border-b border-black/5 dark:border-white/5 last:border-0">
                                    <span className="text-sm opacity-60">{k}</span>
                                    <span className="font-semibold text-right">{v}</span>
                                </div>
                            ))}
                        </div>
                        <label className="flex gap-3 items-start p-4 border border-black/10 dark:border-white/10 rounded-xl cursor-pointer">
                            <input type="checkbox" checked={formData.consent} onChange={(e) => update("consent", e.target.checked)} className="mt-1 w-4 h-4" />
                            <span className="text-sm leading-relaxed">I agree that AmeriCare may contact me using the method(s) selected above. I understand this form does not guarantee eligibility, authorization, or services.</span>
                        </label>
                    </div>
                ) : currentStep.fields ? (
                    <div className="space-y-6">
                        <div><span className="text-sm font-semibold text-primary uppercase tracking-wider">Question {flowStep + 1} of {steps.length - 1}</span><h2 className={clsx(FontFamily.className, "text-4xl sm:text-5xl font-bold mt-2")}>{currentStep.title}</h2></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {currentStep.fields.map(([id, label, type, placeholder]) => (
                                <div key={id} className="flex flex-col gap-2">
                                    <span className="flex gap-1 sm:text-base text-sm">{label} <span className="text-primary">:</span> <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup></span>
                                    <div className={fieldWrapperClass}>
                                        {type === "select" ? (
                                            <>
                                                <select title={label} className={clsx(inputClass, "appearance-none")} value={formData[id as keyof FormData] as string} onChange={(e) => update(id as keyof FormData, e.target.value)} required>
                                                    <option value="">Select one</option>
                                                    {placeholder.split("|").map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                                                </select>
                                            </>
                                        ) : (
                                            <>
                                                {id === "firstName" || id === "lastName" ? <FaUser className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" /> :
                                                 id === "phone" ? <FaPhone className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" /> :
                                                 id === "email" ? <FaEnvelope className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" /> :
                                                 <FaAddressBook className="absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 group-focus-within:opacity-100" />}
                                                <input
                                                    type={type}
                                                    placeholder={placeholder}
                                                    className={inputClass}
                                                    value={formData[id as keyof FormData] as string}
                                                    onChange={(e: ChangeEvent<HTMLInputElement>) => update(id as keyof FormData, e.target.value)}
                                                    maxLength={id === "zip" ? 5 : undefined}
                                                    inputMode={id === "zip" ? "numeric" : undefined}
                                                    required
                                                />
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div><span className="text-sm font-semibold text-primary uppercase tracking-wider">Question {flowStep + 1} of {steps.length - 1}</span><h2 className={clsx(FontFamily.className, "text-4xl sm:text-5xl font-bold mt-2")}>{currentStep.title}</h2></div>
                        {currentStep.help && <p className="text-sm opacity-60">{currentStep.help}</p>}
                        <div className="space-y-3">
                            {currentStep.options?.map(([value, label, desc]) => {
                                const isSelected = currentStep.multi
                                    ? formData.preference.includes(value)
                                    : formData[currentStep.id as keyof FormData] === value;
                                return (
                                    <button key={value} type="button" onClick={() => handleOptionClick(value)} className={clsx(
                                        "w-full text-left p-5 rounded-xl border-2 transition-all cursor-pointer",
                                        isSelected ? "border-primary bg-primary/10 shadow-md" : "border-black/10 dark:border-white/10 hover:border-primary/50"
                                    )}>
                                        <span className="font-semibold text-lg block">{label}</span>
                                        {desc && <span className="text-sm opacity-60">{desc}</span>}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                {flowError && <div className="mt-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm font-semibold" role="alert">{flowError}</div>}

                <div className="p-4 rounded-lg border-l-4 border-primary bg-primary/5 mt-6">
                    <p className="text-sm opacity-80">Please do not enter a diagnosis, Medicaid number, Social Security number, medications, or detailed medical information.</p>
                </div>

                <div className="flex justify-between mt-8">
                    {flowStep > 0 ? (
                        <button type="button" onClick={() => { setFlowError(""); setFlowStep(flowStep - 1); }} className="flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-black/10 dark:border-white/10 hover:border-primary/50 transition-all cursor-pointer">
                            <FaAngleLeft /> Back
                        </button>
                    ) : <div />}

                    <button type="button" onClick={handleNext} disabled={submitting} className={clsx(
                        "flex items-center gap-2 px-8 py-3 rounded-xl font-semibold transition-all cursor-pointer",
                        submitting ? "bg-primary/50 text-white/70 cursor-wait" : "bg-primary text-white hover:bg-primary/90 active:scale-95"
                    )}>
                        {submitting ? <><FaSpinner className="animate-spin" /> Submitting...</> :
                         currentStep.id === "review" ? <><FaCheck /> Send My Request</> :
                         <>Continue <FaAngleRight /></>}
                    </button>
                </div>
            </div>
            </>
        </InViewWrapper>
    );
}
