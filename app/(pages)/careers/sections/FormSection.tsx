"use client"
import { isValidName, isValidEmail, isValidPhone } from "@/lib";
import useDebounce from "@/lib/Hooks/UseDebounce";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
    FaUser, FaEnvelope, FaPhone, FaList, FaPaperclip,
    FaAngleDown, FaAsterisk, FaMapPin, FaCalendar,
    FaCommentDots, FaBriefcase, FaClock,
} from "react-icons/fa6";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

enum ErrorState {
    IDLE = "idle",
    GOOD = "good",
    BAD = "bad",
}

interface ErrorStateObj {
    status: ErrorState;
    error: string;
}

interface ErrorObj {
    [key: string]: ErrorStateObj;
}

// ─── helpers ────────────────────────────────────────────────────────────────

function FieldWrapper({ error, children }: { error: ErrorState; children: React.ReactNode }) {
    return (
        <div className={clsx(
            "relative smooth rounded-lg overflow-hidden",
            error === ErrorState.BAD
                ? "border-2 border-red-500"
                : "border dark:border-white/10 border-[#d7d5d1] bg-white dark:bg-white/5 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(111,173,69,0.12)] group",
        )}>
            {children}
        </div>
    );
}

function FieldLabel({ label, required, error, optional }: { label: string; required?: boolean; error?: string; optional?: string }) {
    return (
        <span className="flex flex-wrap gap-1 items-baseline text-[13px] font-bold text-gray-800 dark:text-gray-200">
            {label}
            {required && <sup className="text-primary"><FaAsterisk className="text-[0.65em]" /></sup>}
            {optional && <span className="font-normal text-gray-500 dark:text-gray-400">({optional})</span>}
            {error && <span className="text-red-500 ml-1 font-medium normal-case">{error}</span>}
        </span>
    );
}

function SectionTag({ step, label }: { step: string; label: string }) {
    return (
        <>
            <div className="text-xs font-extrabold uppercase tracking-[0.15em] text-primary">{step}</div>
            <h2 className={clsx(FontFamily.className, "mt-1 text-[1.6rem] sm:text-[1.7rem] leading-tight tracking-tight font-semibold text-gray-900 dark:text-white")}>
                {label}
            </h2>
        </>
    );
}

function CheckboxItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
    return (
        <label className="flex gap-2.5 items-start border dark:border-white/10 border-[#e6e3df] bg-white dark:bg-white/[0.03] p-3 rounded-lg cursor-pointer hover:border-primary/50 smooth text-sm font-medium select-none text-gray-800 dark:text-gray-200">
            <input
                type="checkbox"
                className="accent-primary w-4 h-4 mt-0.5 flex-shrink-0"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            {label}
        </label>
    );
}

function Card({ step, title, intro, children }: { step: string; title: string; intro?: string; children: React.ReactNode }) {
    return (
        <section className="bg-white dark:bg-white/[0.03] border dark:border-white/10 border-[#e6e3df] rounded-xl p-5 sm:p-8 mb-4">
            <SectionTag step={step} label={title} />
            {intro && <p className="mt-1.5 mb-6 text-sm sm:text-[15px] text-muted dark:text-gray-400">{intro}</p>}
            {!intro && <div className="h-4" />}
            {children}
        </section>
    );
}

// ─── component ───────────────────────────────────────────────────────────────

export default function FormSection() {
    const fileUploadRef = useRef<HTMLInputElement>(null);

    // ── Section 1: opportunity ───────────────────────────────────────────────
    const [position, setPosition] = useState<string>("");
    const [employmentPref, setEmploymentPref] = useState<string>("Full-time");
    const [startDate, setStartDate] = useState<string>("");
    const [preferredShifts, setPreferredShifts] = useState<string[]>([]);

    // ── Section 2: about you ─────────────────────────────────────────────────
    const [firstNameText, setFirstNameText] = useState<string>("");
    const [lastNameText, setLastNameText] = useState<string>("");
    const [emailText, setEmailText] = useState<string>("");
    const [phoneText, setPhoneText] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [zip, setZip] = useState<string>("");
    const [hasTransport, setHasTransport] = useState<string>("");
    const [travelRange, setTravelRange] = useState<string>("Up to 10 miles");

    // ── Section 3: experience ─────────────────────────────────────────────────
    const [yearsExp, setYearsExp] = useState<string>("");
    const [credential, setCredential] = useState<string>("None / Not applicable");
    const [skills, setSkills] = useState<string[]>([]);
    const [experienceSummary, setExperienceSummary] = useState<string>("");

    // ── Section 4: availability ───────────────────────────────────────────────
    const [daysAvailable, setDaysAvailable] = useState<string[]>([]);
    const [hoursPerWeek, setHoursPerWeek] = useState<string>("Flexible");
    const [hearAboutUs, setHearAboutUs] = useState<string>("Google");

    // ── Section 5: finish ─────────────────────────────────────────────────────
    const [attachFile, setAttachFile] = useState<File | null>(null);
    const [additionalNotes, setAdditionalNotes] = useState<string>("");
    const [certify, setCertify] = useState<boolean>(false);
    const [smsConsent, setSmsConsent] = useState<boolean>(false);

    // ── UI state ──────────────────────────────────────────────────────────────
    const [showThanks, setShowThanks] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // ── debounced values ──────────────────────────────────────────────────────
    const debounceFirst = useDebounce(firstNameText);
    const debounceLast = useDebounce(lastNameText);
    const debounceEmail = useDebounce(emailText);
    const debouncePhone = useDebounce(phoneText);

    // ── inline errors ─────────────────────────────────────────────────────────
    const firstNameError = debounceFirst && !isValidName(debounceFirst) ? "Invalid first name" : "";
    const lastNameError = debounceLast && !isValidName(debounceLast) ? "Invalid last name" : "";
    const emailError = debounceEmail && !isValidEmail(debounceEmail) ? "Invalid email address" : "";
    const phoneError = debouncePhone && !isValidPhone(debouncePhone) ? "Invalid phone number" : "";

    const errorState = (val: string, msg: string): ErrorState =>
        !val ? ErrorState.IDLE : msg ? ErrorState.BAD : ErrorState.GOOD;

    // ── can submit ────────────────────────────────────────────────────────────
    const canSubmit =
        isValidName(firstNameText) &&
        isValidName(lastNameText) &&
        isValidEmail(emailText) &&
        isValidPhone(phoneText) &&
        position !== "" &&
        city.trim() !== "" &&
        zip.trim() !== "" &&
        hasTransport !== "" &&
        yearsExp !== "" &&
        certify;

    // ── checkbox helpers ──────────────────────────────────────────────────────
    const toggleItem = (arr: string[], item: string, setter: (v: string[]) => void) => {
        setter(arr.includes(item) ? arr.filter((x) => x !== item) : [...arr, item]);
    };

    // ── file handler ──────────────────────────────────────────────────────────
    const [fileError, setFileError] = useState<string>("");
    const handleFileChange = (files: FileList | null) => {
        if (!files || files.length === 0) { setAttachFile(null); return; }
        const file = files[0];
        if (file.size > 4 * 1024 * 1024) { setFileError("File too large (max 4 MB)"); return; }
        if (file.type !== "application/pdf") { setFileError("Please upload a PDF"); return; }
        setFileError("");
        setAttachFile(file);
    };

    // ── submit ────────────────────────────────────────────────────────────────
    const performSubmit = async () => {
        setIsLoading(true);
        try {
            const data = new FormData();
            data.append("firstName", firstNameText.trim());
            data.append("lastName", lastNameText.trim());
            data.append("email", emailText.trim());
            data.append("phone", phoneText.trim());
            data.append("position", position);
            data.append("employmentPref", employmentPref);
            data.append("startDate", startDate);
            data.append("preferredShifts", preferredShifts.join(", ") || "Not specified");
            data.append("city", city.trim());
            data.append("zip", zip.trim());
            data.append("hasTransport", hasTransport);
            data.append("travelRange", travelRange);
            data.append("yearsExp", yearsExp);
            data.append("credential", credential);
            data.append("skills", skills.join(", ") || "None selected");
            data.append("experienceSummary", experienceSummary.trim());
            data.append("daysAvailable", daysAvailable.join(", ") || "Not specified");
            data.append("hoursPerWeek", hoursPerWeek);
            data.append("hearAboutUs", hearAboutUs);
            data.append("additionalNotes", additionalNotes.trim());
            data.append("certify", String(certify));
            data.append("smsConsent", String(smsConsent));
            if (attachFile) data.append("resume", attachFile);

            const res = await fetch("/api/careers", { method: "POST", body: data });
            if (!res.ok) {
                const body = await res.json().catch(() => null);
                throw new Error(body?.error || "Submission failed");
            }

            setShowThanks(true);
            handleReset();
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isLoading || !canSubmit) return;
        toast.promise(performSubmit(), {
            error: (err: Error) => err?.message || "Oops! Failed to submit application",
            loading: "Submitting application...",
            success: "Application submitted ✨",
        });
    };

    const handleReset = () => {
        setPosition(""); setEmploymentPref("Full-time"); setStartDate(""); setPreferredShifts([]);
        setFirstNameText(""); setLastNameText(""); setEmailText(""); setPhoneText("");
        setCity(""); setZip(""); setHasTransport(""); setTravelRange("Up to 10 miles");
        setYearsExp(""); setCredential("None / Not applicable"); setSkills([]); setExperienceSummary("");
        setDaysAvailable([]); setHoursPerWeek("Flexible"); setHearAboutUs("Google");
        setAttachFile(null); setAdditionalNotes(""); setCertify(false); setSmsConsent(false);
        if (fileUploadRef.current) fileUploadRef.current.value = "";
    };

    // ── shared input classes ──────────────────────────────────────────────────
    const inputBase = "peer outline-none bg-transparent w-full py-3.5 px-4 sm:text-[15px] text-gray-900 dark:text-white placeholder:text-gray-400";
    const selectBase = "peer outline-none bg-transparent appearance-none w-full py-3.5 px-4 sm:text-[15px] text-gray-900 dark:text-white";
    const iconBase = "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-45 smooth group-focus-within:opacity-100 text-gray-600 dark:text-gray-300";
    const grid2 = "grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5";

    if (showThanks) {
        return (
            <section id="success" className="scroll-mt-28 bg-white dark:bg-darkBg dark:text-white">
                <div className="max-w-[940px] mx-auto px-5 pt-10 pb-20">
                    <InViewWrapper animation={fadeIn}>
                        <>
                            <div className="bg-white dark:bg-white/[0.03] border dark:border-white/10 border-[#e6e3df] rounded-xl px-6 py-14 text-center">
                                <div className="w-[58px] h-[58px] rounded-full grid place-items-center bg-mint dark:bg-primary/15 text-[#2f6b55] dark:text-primary text-2xl mx-auto mb-4">
                                    ✓
                                </div>
                                <div className="text-xs font-extrabold uppercase tracking-[0.15em] text-primary">Application received</div>
                                <h2 className={clsx(FontFamily.className, "mt-2 text-[1.7rem] sm:text-3xl font-semibold tracking-tight text-gray-900 dark:text-white")}>
                                    Thank you for applying.
                                </h2>
                                <p className="mt-3 text-muted dark:text-gray-400 max-w-xl mx-auto">
                                    Our team will review your information and contact qualified applicants regarding next steps.
                                </p>
                                <div className="mt-8">
                                    <button
                                        type="button"
                                        onClick={() => setShowThanks(false)}
                                        className="rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-white smooth hover:opacity-90 active:scale-90"
                                    >
                                        Back to careers
                                    </button>
                                </div>
                            </div>
                        </>
                    </InViewWrapper>
                </div>
            </section>
        );
    }

    return (
        <InViewWrapper animation={fadeIn}>
            <>
                <form
                    onSubmit={handleSubmit}
                    id="application"
                    className={clsx(
                        isLoading ? "pointer-events-none" : "",
                        "relative bg-cream dark:bg-darkBg dark:text-white scroll-mt-28",
                    )}
                >
                    <div className="max-w-[940px] mx-auto px-5 pt-10 pb-16">
                        {/* Application head */}
                        <div className="mb-6">
                            <div className="text-xs font-extrabold uppercase tracking-[0.15em] text-primary">Online application</div>
                            <h2 className={clsx(FontFamily.className, "mt-1.5 text-[1.75rem] sm:text-[2.1rem] tracking-tight font-semibold text-gray-900 dark:text-white")}>
                                Tell us about yourself.
                            </h2>
                            <p className="mt-1 text-muted dark:text-gray-400 max-w-[680px]">
                                Complete the application below. Opportunities depend on current openings, client needs, qualifications, and availability.
                            </p>
                        </div>

                        {/* Progress */}
                        <div className="grid grid-cols-5 gap-1.5 mb-6" aria-hidden="true">
                            {[0, 1, 2, 3, 4].map((n) => (
                                <span
                                    key={n}
                                    className={clsx(
                                        "h-1 rounded-full",
                                        n === 0 ? "bg-primary" : "bg-[#e7e4e0] dark:bg-white/15",
                                    )}
                                />
                            ))}
                        </div>

                        {/* ─── 01 · Your opportunity ─────────────────────────────────────── */}
                        <Card
                            step="01 · Your opportunity"
                            title="What role are you interested in?"
                            intro="Start with the position and schedule that fit you best."
                        >
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Position applying for" required />
                                    <FieldWrapper error={position === "" ? ErrorState.IDLE : ErrorState.GOOD}>
                                        <FaList className={iconBase} />
                                        <select
                                            title="Position"
                                            className={selectBase}
                                            value={position}
                                            required
                                            onChange={(e) => setPosition(e.target.value)}
                                        >
                                            <option value="">Select a role</option>
                                            <option>CNA — Certified Nursing Assistant</option>
                                            <option>PCA — Personal Care Assistant</option>
                                            <option>LPN — Licensed Practical Nurse</option>
                                            <option>RN — Registered Nurse</option>
                                            <option>Pediatric RN / LPN</option>
                                            <option>Family Caregiver</option>
                                            <option>Other / Future Opportunity</option>
                                        </select>
                                        <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none right-4 opacity-50" />
                                    </FieldWrapper>
                                </div>

                                <div className={grid2}>
                                    <div className="flex flex-col gap-2">
                                        <FieldLabel label="Employment preference" />
                                        <FieldWrapper error={ErrorState.IDLE}>
                                            <FaBriefcase className={iconBase} />
                                            <select className={selectBase} value={employmentPref} onChange={(e) => setEmploymentPref(e.target.value)}>
                                                <option>Full-time</option>
                                                <option>Part-time</option>
                                                <option>PRN</option>
                                                <option>Flexible / Any</option>
                                            </select>
                                            <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none right-4 opacity-50" />
                                        </FieldWrapper>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <FieldLabel label="Available start date" />
                                        <FieldWrapper error={ErrorState.IDLE}>
                                            <FaCalendar className={iconBase} />
                                            <input
                                                type="date"
                                                className={clsx(inputBase, "dark:[color-scheme:dark]")}
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                            />
                                        </FieldWrapper>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Preferred shifts" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {["Days", "Evenings", "Nights / Overnight", "Weekends"].map((s) => (
                                            <CheckboxItem
                                                key={s} label={s}
                                                checked={preferredShifts.includes(s)}
                                                onChange={() => toggleItem(preferredShifts, s, setPreferredShifts)}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* ─── 02 · About you ────────────────────────────────────────────── */}
                        <Card
                            step="02 · About you"
                            title="Tell us about yourself."
                            intro="We'll use this information to contact you about opportunities."
                        >
                            <div className={grid2}>
                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="First name" required error={firstNameError} />
                                    <FieldWrapper error={errorState(debounceFirst, firstNameError)}>
                                        <FaUser className={clsx(iconBase, firstNameError && "!text-red-500 !opacity-100")} />
                                        <input
                                            type="text" placeholder="John"
                                            className={inputBase}
                                            value={firstNameText} required
                                            onChange={(e) => setFirstNameText(e.target.value)}
                                        />
                                    </FieldWrapper>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Last name" required error={lastNameError} />
                                    <FieldWrapper error={errorState(debounceLast, lastNameError)}>
                                        <FaUser className={clsx(iconBase, lastNameError && "!text-red-500 !opacity-100")} />
                                        <input
                                            type="text" placeholder="Doe"
                                            className={inputBase}
                                            value={lastNameText} required
                                            onChange={(e) => setLastNameText(e.target.value)}
                                        />
                                    </FieldWrapper>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Email" required error={emailError} />
                                    <FieldWrapper error={errorState(debounceEmail, emailError)}>
                                        <FaEnvelope className={clsx(iconBase, emailError && "!text-red-500 !opacity-100")} />
                                        <input
                                            type="email" placeholder="example@gmail.com"
                                            className={inputBase}
                                            value={emailText} required
                                            onChange={(e) => setEmailText(e.target.value)}
                                        />
                                    </FieldWrapper>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Phone" required error={phoneError} />
                                    <FieldWrapper error={errorState(debouncePhone, phoneError)}>
                                        <FaPhone className={clsx(iconBase, phoneError && "!text-red-500 !opacity-100")} />
                                        <input
                                            type="tel" placeholder="(555) 555-5555"
                                            className={inputBase}
                                            value={phoneText} required
                                            onChange={(e) => setPhoneText(e.target.value)}
                                        />
                                    </FieldWrapper>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="City" required />
                                    <FieldWrapper error={city ? ErrorState.GOOD : ErrorState.IDLE}>
                                        <FaMapPin className={iconBase} />
                                        <input
                                            type="text" placeholder="Atlanta"
                                            className={inputBase}
                                            value={city} required
                                            onChange={(e) => setCity(e.target.value)}
                                        />
                                    </FieldWrapper>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="ZIP code" required />
                                    <FieldWrapper error={zip ? ErrorState.GOOD : ErrorState.IDLE}>
                                        <FaMapPin className={iconBase} />
                                        <input
                                            type="text" placeholder="30144" inputMode="numeric"
                                            className={inputBase}
                                            value={zip} required
                                            onChange={(e) => setZip(e.target.value)}
                                        />
                                    </FieldWrapper>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Reliable transportation?" required />
                                    <FieldWrapper error={hasTransport ? ErrorState.GOOD : ErrorState.IDLE}>
                                        <FaBriefcase className={iconBase} />
                                        <select
                                            className={selectBase} value={hasTransport} required
                                            onChange={(e) => setHasTransport(e.target.value)}
                                        >
                                            <option value="">Select</option>
                                            <option>Yes</option>
                                            <option>No</option>
                                        </select>
                                        <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none right-4 opacity-50" />
                                    </FieldWrapper>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="How far are you willing to travel?" />
                                    <FieldWrapper error={ErrorState.IDLE}>
                                        <FaMapPin className={iconBase} />
                                        <select className={selectBase} value={travelRange} onChange={(e) => setTravelRange(e.target.value)}>
                                            <option>Up to 10 miles</option>
                                            <option>Up to 20 miles</option>
                                            <option>Up to 30 miles</option>
                                            <option>30+ miles</option>
                                        </select>
                                        <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none right-4 opacity-50" />
                                    </FieldWrapper>
                                </div>
                            </div>
                        </Card>

                        {/* ─── 03 · Experience & credentials ───────────────────────────── */}
                        <Card
                            step="03 · Experience & credentials"
                            title="Share your care experience."
                            intro="Tell us what you've done. Credentials can be verified during the hiring process."
                        >
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <div className={grid2}>
                                    <div className="flex flex-col gap-2">
                                        <FieldLabel label="Years of caregiving / nursing experience" required />
                                        <FieldWrapper error={yearsExp ? ErrorState.GOOD : ErrorState.IDLE}>
                                            <FaClock className={iconBase} />
                                            <select className={selectBase} value={yearsExp} required onChange={(e) => setYearsExp(e.target.value)}>
                                                <option value="">Select</option>
                                                <option>Less than 1 year</option>
                                                <option>1–2 years</option>
                                                <option>3–5 years</option>
                                                <option>5+ years</option>
                                            </select>
                                            <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none right-4 opacity-50" />
                                        </FieldWrapper>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <FieldLabel label="Current credential" />
                                        <FieldWrapper error={ErrorState.IDLE}>
                                            <FaBriefcase className={iconBase} />
                                            <select className={selectBase} value={credential} onChange={(e) => setCredential(e.target.value)}>
                                                <option>None / Not applicable</option>
                                                <option>CNA</option>
                                                <option>PCA training</option>
                                                <option>LPN</option>
                                                <option>RN</option>
                                            </select>
                                            <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none right-4 opacity-50" />
                                        </FieldWrapper>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Experience & skills" />
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {[
                                            "Pediatric care / GAPP",
                                            "Senior / adult care",
                                            "Personal care / ADLs",
                                            "Dementia care",
                                            "G-tube / feeding support",
                                            "Tracheostomy / respiratory care",
                                            "Medication administration",
                                            "Seizure care",
                                        ].map((s) => (
                                            <CheckboxItem
                                                key={s} label={s}
                                                checked={skills.includes(s)}
                                                onChange={() => toggleItem(skills, s, setSkills)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Tell us briefly about your healthcare or caregiving experience." />
                                    <div className={clsx(
                                        "relative smooth rounded-lg overflow-hidden border dark:border-white/10 border-[#d7d5d1] bg-white dark:bg-white/5 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(111,173,69,0.12)]",
                                    )}>
                                        <textarea
                                            className="peer outline-none bg-transparent w-full py-3.5 px-4 sm:text-[15px] resize-y min-h-[110px] text-gray-900 dark:text-white placeholder:text-gray-400"
                                            placeholder="Include the types of clients you've supported and any relevant skills or training."
                                            value={experienceSummary}
                                            rows={4}
                                            onChange={(e) => setExperienceSummary(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* ─── 04 · Availability ─────────────────────────────────────────── */}
                        <Card step="04 · Availability" title="When can you work?">
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Days available" />
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
                                            <CheckboxItem
                                                key={d} label={d}
                                                checked={daysAvailable.includes(d)}
                                                onChange={() => toggleItem(daysAvailable, d, setDaysAvailable)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className={grid2}>
                                    <div className="flex flex-col gap-2">
                                        <FieldLabel label="Desired hours per week" />
                                        <FieldWrapper error={ErrorState.IDLE}>
                                            <FaClock className={iconBase} />
                                            <select className={selectBase} value={hoursPerWeek} onChange={(e) => setHoursPerWeek(e.target.value)}>
                                                <option>Under 20</option>
                                                <option>20–30</option>
                                                <option>30–40</option>
                                                <option>40+</option>
                                                <option>Flexible</option>
                                            </select>
                                            <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none right-4 opacity-50" />
                                        </FieldWrapper>
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <FieldLabel label="How did you hear about us?" />
                                        <FieldWrapper error={ErrorState.IDLE}>
                                            <FaCommentDots className={iconBase} />
                                            <select className={selectBase} value={hearAboutUs} onChange={(e) => setHearAboutUs(e.target.value)}>
                                                <option>Google</option>
                                                <option>Indeed</option>
                                                <option>Facebook / Instagram</option>
                                                <option>Employee referral</option>
                                                <option>Friend / Family</option>
                                                <option>School / Training Program</option>
                                                <option>Other</option>
                                            </select>
                                            <FaAngleDown className="absolute top-1/2 -translate-y-1/2 pointer-events-none right-4 opacity-50" />
                                        </FieldWrapper>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* ─── 05 · Finish ───────────────────────────────────────────────── */}
                        <Card
                            step="05 · Finish"
                            title="You're almost done."
                            intro="A résumé is helpful, but applicants should not be blocked from applying if they don't have every onboarding document ready."
                        >
                            <div className="flex flex-col gap-4 sm:gap-5">
                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Upload résumé" optional="optional" error={fileError} />
                                    <div className={clsx(
                                        "relative smooth rounded-lg overflow-hidden flex",
                                        fileError
                                            ? "border-2 border-red-500"
                                            : "border dark:border-white/10 border-[#d7d5d1] bg-white dark:bg-white/5 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(111,173,69,0.12)] group",
                                    )}>
                                        <FaPaperclip className={iconBase} />
                                        <div className="peer outline-none bg-transparent w-full py-3.5 px-4 sm:text-[15px] text-gray-700 dark:text-gray-300">
                                            <p className="truncate max-w-[calc(100%-6rem)]">
                                                {attachFile ? attachFile.name : "No file selected"}
                                            </p>
                                        </div>
                                        <input
                                            type="file"
                                            hidden
                                            accept=".pdf,.doc,.docx"
                                            ref={fileUploadRef}
                                            onChange={(e) => handleFileChange(e.target.files)}
                                        />
                                        <span
                                            className="absolute top-1/2 -translate-y-1/2 right-3 px-3 py-2 bg-primary/10 rounded-lg cursor-pointer hover:bg-primary/20 smooth active:scale-90 border border-primary/20 text-sm font-semibold text-primary select-none"
                                            onClick={() => fileUploadRef.current?.click()}
                                        >
                                            Browse
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <FieldLabel label="Anything else you'd like us to know?" />
                                    <div className={clsx(
                                        "relative smooth rounded-lg overflow-hidden border dark:border-white/10 border-[#d7d5d1] bg-white dark:bg-white/5 focus-within:border-primary focus-within:shadow-[0_0_0_3px_rgba(111,173,69,0.12)]",
                                    )}>
                                        <textarea
                                            className="peer outline-none bg-transparent w-full py-3.5 px-4 sm:text-[15px] resize-y min-h-[110px] text-gray-900 dark:text-white placeholder:text-gray-400"
                                            placeholder=""
                                            value={additionalNotes}
                                            rows={4}
                                            onChange={(e) => setAdditionalNotes(e.target.value)}
                                        />
                                    </div>
                                </div>

                                <label className="flex gap-2.5 items-start border dark:border-white/10 border-[#e6e3df] bg-white dark:bg-white/[0.03] p-3.5 rounded-lg cursor-pointer text-sm text-gray-800 dark:text-gray-200">
                                    <input
                                        type="checkbox"
                                        className="accent-primary w-4 h-4 mt-0.5 flex-shrink-0"
                                        checked={certify}
                                        required
                                        onChange={(e) => setCertify(e.target.checked)}
                                    />
                                    <span>
                                        I certify that the information provided is true and complete to the best of my knowledge and understand that submitting an application does not guarantee employment.
                                    </span>
                                </label>

                                <label className="flex gap-2.5 items-start border dark:border-white/10 border-[#e6e3df] bg-white dark:bg-white/[0.03] p-3.5 rounded-lg cursor-pointer text-sm text-gray-700 dark:text-gray-300">
                                    <input
                                        type="checkbox"
                                        className="accent-primary w-4 h-4 mt-0.5 flex-shrink-0"
                                        checked={smsConsent}
                                        onChange={(e) => setSmsConsent(e.target.checked)}
                                    />
                                    <span>
                                        I agree to receive calls and text messages from AmeriCare Services Inc. regarding my application and employment opportunities. Message and data rates may apply. Consent to receive text messages is not a condition of employment.
                                    </span>
                                </label>

                                <div className="flex flex-col gap-3 pt-1">
                                    <button
                                        className={clsx(
                                            "w-full rounded-lg px-6 py-4 text-base font-extrabold text-white smooth outline-none",
                                            canSubmit
                                                ? "bg-primary hover:bg-forest active:scale-[0.99]"
                                                : "bg-primary/40 cursor-not-allowed",
                                            isLoading && "opacity-65",
                                        )}
                                        type={canSubmit && !isLoading ? "submit" : "button"}
                                    >
                                        {canSubmit ? (
                                            isLoading ? "Submitting…" : "Submit Application →"
                                        ) : (
                                            "Complete required fields"
                                        )}
                                    </button>
                                    <p className="text-center text-xs text-gray-500 dark:text-gray-400">
                                        Please do not submit Social Security numbers, banking information, medical records, or photo ID through this public form.
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </form>
            </>
        </InViewWrapper>
    );
}
