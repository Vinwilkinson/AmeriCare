"use client"
import { isValidName, isValidEmail, isValidPhone } from "@/lib";
import useDebounce from "@/lib/Hooks/UseDebounce";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
    FaUser, FaEnvelope, FaPhone, FaList, FaPaperclip,
    FaAngleDown, FaStar, FaAsterisk, FaMapPin, FaCalendar,
    FaCommentDots, FaBriefcase, FaClock,
} from "react-icons/fa6";
import { BrevoEmailClient } from "@/lib/Classes/Email";
import { applicationReceivedEmail, onlineApplication } from "@/lib/Email Templates";
import { FaTimes } from "react-icons/fa";
import PopUp from "@/app/components/PopUp";
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
            "relative smooth rounded-xl overflow-hidden",
            error === ErrorState.BAD
                ? "border-2 border-red-500"
                : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70",
        )}>
            {children}
        </div>
    );
}

function FieldLabel({ label, required, error }: { label: string; required?: boolean; error?: string }) {
    return (
        <span className="flex gap-1 sm:text-base text-sm capitalize">
            {label}
            <span className="text-primary">:</span>
            {required && <sup className="text-red-600 sm:text-sm text-xs"><FaAsterisk /></sup>}
            {error && <span className="text-red-500 ml-1 normal-case">{error}</span>}
        </span>
    );
}

function SectionTag({ step, label }: { step: string; label: string }) {
    return (
        <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-primary opacity-70">{step}</span>
            <span className="flex-1 h-px bg-primary/20" />
            <h2 className="text-xl font-bold">{label}</h2>
        </div>
    );
}

function CheckboxItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
    return (
        <label className="flex gap-3 items-center border dark:border-white/10 border-black/15 p-3 rounded-lg cursor-pointer hover:border-primary/50 smooth text-sm font-medium select-none">
            <input
                type="checkbox"
                className="accent-primary w-4 h-4 flex-shrink-0"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            {label}
        </label>
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
        if (file.size > 10 * 1024 * 1024) { setFileError("File too large (max 10 MB)"); return; }
        if (file.type !== "application/pdf") { setFileError("Please upload a PDF"); return; }
        setFileError("");
        setAttachFile(file);
    };

    // ── submit ────────────────────────────────────────────────────────────────
    const performSubmit = async () => {
        setIsLoading(true);
        const SendWithBrevo = new BrevoEmailClient();

        let resumeUrl = "";
        if (attachFile) {
            resumeUrl = await SendWithBrevo.uploadAttachment(attachFile);
        }

        const payload = {
            firstName: firstNameText.trim(),
            lastName: lastNameText.trim(),
            email: emailText.trim(),
            phone: phoneText.trim(),
            position,
            employmentPref,
            startDate,
            preferredShifts: preferredShifts.join(", ") || "Not specified",
            city: city.trim(),
            zip: zip.trim(),
            hasTransport,
            travelRange,
            yearsExp,
            credential,
            skills: skills.join(", ") || "None selected",
            experienceSummary: experienceSummary.trim(),
            daysAvailable: daysAvailable.join(", ") || "Not specified",
            hoursPerWeek,
            hearAboutUs,
            additionalNotes: additionalNotes.trim(),
            resumeUrl,
        };

        const ORGANISATION_EMAIL = process.env.NEXT_PUBLIC_ORGANISATION_EMAIL!;
        const ORGANISATION_NAME = process.env.NEXT_PUBLIC_ORGANISATION_NAME!;

        const hrEmail = onlineApplication({
            firstName: payload.firstName,
            lastName: payload.lastName,
            email: payload.email,
            phone: payload.phone,
            position: payload.position,
            employmentPref: payload.employmentPref,
            startDate: payload.startDate,
            preferredShifts: payload.preferredShifts,
            city: payload.city,
            zip: payload.zip,
            hasTransport: payload.hasTransport,
            travelRange: payload.travelRange,
            yearsExp: payload.yearsExp,
            credential: payload.credential,
            skills: payload.skills,
            experienceSummary: payload.experienceSummary,
            daysAvailable: payload.daysAvailable,
            hoursPerWeek: payload.hoursPerWeek,
            hearAboutUs: payload.hearAboutUs,
            additionalNotes: payload.additionalNotes,
            resume: payload.resumeUrl,
            coverLetter: payload.additionalNotes,
        });

        const clientEmail = applicationReceivedEmail({
            firstName: payload.firstName,
            lastName: payload.lastName,
            position: payload.position,
        });

        await SendWithBrevo.sendEmail(
            ORGANISATION_NAME, ORGANISATION_EMAIL,
            `${payload.firstName} ${payload.lastName}`, payload.email,
            "Online Application", hrEmail,
        );

        await SendWithBrevo.sendEmail(
            `${payload.firstName} ${payload.lastName}`, payload.email,
            ORGANISATION_NAME, ORGANISATION_EMAIL,
            "Application Received - AmeriCare", clientEmail,
        );

        setIsLoading(false);
        setShowThanks(true);
        handleReset();
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (isLoading || !canSubmit) return;
        toast.promise(performSubmit(), {
            error: "Oops! Failed to submit application",
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
    const inputBase = "peer dark:bg-white/5 bg-primary/5 outline-none bg-transparent w-full py-4 px-12 sm:text-base";
    const selectBase = "peer dark:bg-white/5 bg-primary/5 outline-none bg-transparent appearance-none w-full py-4 px-12 sm:text-base dark:text-white";
    const iconBase = "absolute top-1/2 -translate-y-1/2 pointer-events-none select-none left-4 opacity-50 smooth group-focus-within:opacity-100";

    return (
        <>
            {/* Thank-you popup */}
            <PopUp closeFunction={() => setShowThanks(false)} isVisible={showThanks}>
                <div className="relative max-sm:-translate-y-[3.25rem] flex flex-col dark:bg-darkBg sm:max-w-[40rem] max-w-full bg-white overflow-hidden sm:rounded-t-2xl rounded-b-2xl border dark:border-white/25 border-primary/5 shadow-2xl shadow-black/10">
                    <div className="grid place-items-center relative">
                        <Image
                            src="https://americare.sirv.com/icons/Team%20spirit.png"
                            alt="Team spirit"
                            height={2000}
                            width={2000}
                            priority
                            className="w-[20rem] translate-y-2"
                        />
                    </div>
                    <div className="sm:p-8 p-6 text-center mt-3 max-xl:text-sm">
                        <h2 className="sm:text-4xl text-3xl font-bold p-2 text-primary">Application Received!</h2>
                        <p className="dark:text-white text-black">
                            Thanks for submitting your application! We&apos;ll review it and get back to you within 24 hours.
                        </p>
                        <div
                            onClick={() => setShowThanks(false)}
                            className={clsx(
                                "mx-auto mt-5 font-semibold smooth text-primary dark:bg-primary/25 dark:text-white bg-primary/5 sm:py-3 py-2 sm:px-10 whitespace-nowrap px-6 active:rotate-3 hover:text-white cursor-pointer active:scale-90 outline-primary w-fit select-none border-4 dark:border-darkBg border-white outline-2 outline-dashed relative overflow-hidden h-fit",
                                "after:h-2 after:w-2 sm:rounded-xl rounded-lg hover:after:bg-primary hover:after:h-[105%] hover:after:w-full smooth-after after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2",
                            )}
                        >
                            <span className="relative z-50">Okay</span>
                        </div>
                    </div>
                    <span onClick={() => setShowThanks(false)} className="absolute smooth top-4 right-4 text-3xl text-primary hover:text-red-600 cursor-pointer">
                        <FaTimes />
                    </span>
                </div>
            </PopUp>

            <InViewWrapper animation={fadeIn}>
                <form
                    onSubmit={handleSubmit}
                    className={clsx(
                        isLoading ? "pointer-events-none" : "",
                        "dark:bg-darkBg dark:text-white py-14 2xl:px-[10vw] sm:px-[8vw] px-6 relative bg-white z-10",
                    )}
                >
                    {/* Background blur shape */}
                    <Image
                        src="https://americare.sirv.com/icons/bbblurry.svg"
                        alt="blur shape"
                        height={800}
                        width={800}
                        className="sm:w-[70rem] w-[80rem] absolute sm:-top-[20rem] -top-[8rem] sm:-left-[20rem] -left-[12rem] dark:opacity-50 max-md:dark:opacity-25 pointer-events-none"
                    />

                    {/* Heading */}
                    <div className="sm:mb-12 mb-8 relative">
                        <h1 className={clsx(FontFamily.className, "2xl:text-[3vw] sm:text-5xl text-4xl text-primary font-semibold")}>
                            Employment Application
                        </h1>
                        <p className="sm:text-base text-sm py-3 grid">
                            <span>Join the AmeriCare team — good care starts with good people.</span>
                            <span className="opacity-50">
                                Complete all required fields. Opportunities depend on current openings, client needs, qualifications, and availability.
                            </span>
                        </p>

                        {/* Progress bar — 5 steps */}
                        <div className="grid grid-cols-5 gap-2 mt-2 max-w-xs">
                            {[1, 2, 3, 4, 5].map((n) => (
                                <span key={n} className="h-1 rounded-full bg-primary/20 overflow-hidden">
                                    <span className="block h-full bg-primary w-0" />
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* ─── SECTION 1: Opportunity ─────────────────────────────────────────── */}
                    <div className="mb-10 p-6 sm:p-8 rounded-2xl border dark:border-white/10 border-black/10 bg-primary/[0.02] dark:bg-white/[0.02]">
                        <SectionTag step="01 · Your opportunity" label="What role are you interested in?" />

                        <div className="grid sm:grid-cols-2 gap-5">
                            {/* Position */}
                            <div className="sm:col-span-2 flex flex-col gap-2">
                                <FieldLabel label="Position applying for" required error={position === "" ? undefined : undefined} />
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

                            {/* Employment preference */}
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

                            {/* Start date */}
                            <div className="flex flex-col gap-2">
                                <FieldLabel label="Available start date" />
                                <FieldWrapper error={ErrorState.IDLE}>
                                    <FaCalendar className={iconBase} />
                                    <input
                                        type="date"
                                        className={clsx(inputBase, "dark:text-white")}
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </FieldWrapper>
                            </div>

                            {/* Preferred shifts */}
                            <div className="sm:col-span-2 flex flex-col gap-2">
                                <FieldLabel label="Preferred shifts" />
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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
                    </div>

                    {/* ─── SECTION 2: About you ────────────────────────────────────────────── */}
                    <div className="mb-10 p-6 sm:p-8 rounded-2xl border dark:border-white/10 border-black/10 bg-primary/[0.02] dark:bg-white/[0.02]">
                        <SectionTag step="02 · About you" label="Tell us about yourself." />

                        <div className="grid sm:grid-cols-2 gap-5">
                            {/* First name */}
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

                            {/* Last name */}
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

                            {/* Email */}
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

                            {/* Phone */}
                            <div className="flex flex-col gap-2">
                                <FieldLabel label="Phone number" required error={phoneError} />
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

                            {/* City */}
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

                            {/* ZIP */}
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

                            {/* Reliable transportation */}
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

                            {/* Travel range */}
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
                    </div>

                    {/* ─── SECTION 3: Experience & Credentials ───────────────────────────── */}
                    <div className="mb-10 p-6 sm:p-8 rounded-2xl border dark:border-white/10 border-black/10 bg-primary/[0.02] dark:bg-white/[0.02]">
                        <SectionTag step="03 · Experience & credentials" label="Share your care experience." />

                        <div className="grid sm:grid-cols-2 gap-5">
                            {/* Years of experience */}
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

                            {/* Current credential */}
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

                            {/* Skills checkboxes */}
                            <div className="sm:col-span-2 flex flex-col gap-2">
                                <FieldLabel label="Experience & skills" />
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
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

                            {/* Experience summary */}
                            <div className="sm:col-span-2 flex flex-col gap-2">
                                <FieldLabel label="Tell us about your experience" />
                                <div className={clsx(
                                    "relative smooth rounded-xl overflow-hidden",
                                    "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70",
                                )}>
                                    <textarea
                                        className="peer dark:bg-white/5 bg-primary/5 outline-none bg-transparent w-full py-4 px-5 sm:text-base resize-none min-h-[7rem]"
                                        placeholder="Include the types of clients you've supported and any relevant skills or training."
                                        value={experienceSummary}
                                        rows={4}
                                        onChange={(e) => setExperienceSummary(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ─── SECTION 4: Availability ─────────────────────────────────────────── */}
                    <div className="mb-10 p-6 sm:p-8 rounded-2xl border dark:border-white/10 border-black/10 bg-primary/[0.02] dark:bg-white/[0.02]">
                        <SectionTag step="04 · Availability" label="When can you work?" />

                        <div className="grid sm:grid-cols-2 gap-5">
                            {/* Days available */}
                            <div className="sm:col-span-2 flex flex-col gap-2">
                                <FieldLabel label="Days available" />
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
                                        <CheckboxItem
                                            key={d} label={d}
                                            checked={daysAvailable.includes(d)}
                                            onChange={() => toggleItem(daysAvailable, d, setDaysAvailable)}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Hours per week */}
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

                            {/* How did you hear about us */}
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

                    {/* ─── SECTION 5: Finish ───────────────────────────────────────────────── */}
                    <div className="mb-10 p-6 sm:p-8 rounded-2xl border dark:border-white/10 border-black/10 bg-primary/[0.02] dark:bg-white/[0.02]">
                        <SectionTag step="05 · Finish" label="You're almost done." />

                        <div className="grid sm:grid-cols-2 gap-5">
                            {/* Resume upload */}
                            <div className="sm:col-span-2 flex flex-col gap-2">
                                <FieldLabel
                                    label="Upload résumé"
                                    error={fileError}
                                />
                                <span className="text-xs opacity-50 -mt-1">Optional — PDF only, max 10 MB</span>
                                <div className={clsx(
                                    "relative smooth rounded-xl overflow-hidden flex",
                                    fileError
                                        ? "border-2 border-red-500"
                                        : "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70",
                                )}>
                                    <FaPaperclip className={iconBase} />
                                    <div className="peer dark:bg-white/5 bg-primary/5 outline-none bg-transparent w-full py-4 px-12 sm:text-base">
                                        <p className="truncate max-w-[calc(100%-6rem)]">
                                            {attachFile ? attachFile.name : "No file selected"}
                                        </p>
                                    </div>
                                    <input
                                        type="file"
                                        hidden
                                        accept=".pdf"
                                        ref={fileUploadRef}
                                        onChange={(e) => handleFileChange(e.target.files)}
                                    />
                                    <span
                                        className="absolute top-1/2 -translate-y-1/2 right-3 px-3 py-2 bg-primary/10 rounded-xl cursor-pointer hover:bg-primary/50 smooth active:scale-90 border dark:border-white/10 border-darkBg/10 text-sm font-medium select-none"
                                        onClick={() => fileUploadRef.current?.click()}
                                    >
                                        Browse
                                    </span>
                                </div>
                            </div>

                            {/* Additional notes */}
                            <div className="sm:col-span-2 flex flex-col gap-2">
                                <FieldLabel label="Anything else you'd like us to know?" />
                                <div className={clsx(
                                    "relative smooth rounded-xl overflow-hidden",
                                    "border-2 dark:border-white/10 border-black/15 focus-within:shadow-md dark:focus-within:shadow-primary/15 group dark:focus-within:border-white/50 focus-within:border-primary/70",
                                )}>
                                    <textarea
                                        className="peer dark:bg-white/5 bg-primary/5 outline-none bg-transparent w-full py-4 px-5 sm:text-base resize-none min-h-[7rem]"
                                        placeholder="Optional additional information…"
                                        value={additionalNotes}
                                        rows={4}
                                        onChange={(e) => setAdditionalNotes(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Certify checkbox */}
                            <div className="sm:col-span-2">
                                <label className="flex gap-3 items-start cursor-pointer text-sm">
                                    <input
                                        type="checkbox"
                                        className="accent-primary w-4 h-4 mt-1 flex-shrink-0"
                                        checked={certify}
                                        required
                                        onChange={(e) => setCertify(e.target.checked)}
                                    />
                                    <span>
                                        I certify that the information provided is true and complete to the best of my knowledge and understand that submitting an application does not guarantee employment.{" "}
                                        <span className="text-primary font-semibold">*</span>
                                    </span>
                                </label>
                            </div>

                            {/* SMS consent */}
                            <div className="sm:col-span-2">
                                <label className="flex gap-3 items-start cursor-pointer text-sm opacity-70">
                                    <input
                                        type="checkbox"
                                        className="accent-primary w-4 h-4 mt-1 flex-shrink-0"
                                        checked={smsConsent}
                                        onChange={(e) => setSmsConsent(e.target.checked)}
                                    />
                                    <span>
                                        I agree to receive calls and text messages from AmeriCare Services Inc. regarding my application and employment opportunities. Message and data rates may apply. Consent to receive text messages is not a condition of employment.
                                    </span>
                                </label>
                            </div>

                            {/* Privacy note */}
                            <p className="sm:col-span-2 text-xs opacity-40 text-center">
                                Please do not submit Social Security numbers, banking information, medical records, or photo ID through this public form.
                            </p>
                        </div>
                    </div>

                    {/* ─── Submit button ────────────────────────────────────────────────────── */}
                    <div className="flex flex-col gap-2 mt-2 group sm:w-fit">
                        <button
                            className={clsx(
                                "smooth border-2 border-dashed",
                                "border-primary text-primary bg-transparent",
                                canSubmit
                                    ? "grayscale-0 hover:bg-primary hover:text-white hover:border-dotted active:scale-90"
                                    : "grayscale cursor-not-allowed opacity-50",
                                "sm:w-fit py-4 px-8 sm:text-lg rounded-lg outline-none",
                                isLoading && "opacity-65",
                            )}
                            type={canSubmit && !isLoading ? "submit" : "button"}
                        >
                            {canSubmit ? (
                                <span className="flex gap-2 items-center justify-center">
                                    {isLoading ? (
                                        <>
                                            <Image
                                                src="https://americare.sirv.com/icons/spinner.svg"
                                                alt="spinner"
                                                height={20}
                                                width={20}
                                                className="dark:invert-0 invert"
                                            />
                                            Submitting…
                                        </>
                                    ) : (
                                        <>
                                            Submit Application <FaStar className="group-hover:text-yellow-300" />
                                        </>
                                    )}
                                </span>
                            ) : (
                                <span className="flex gap-2 items-center justify-center">Complete required fields</span>
                            )}
                        </button>
                    </div>
                </form>
            </InViewWrapper>
        </>
    );
}
