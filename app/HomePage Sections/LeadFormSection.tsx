"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { FaCheck, FaPhoneAlt } from "react-icons/fa";
import InViewWrapper from "../components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";

export default function LeadFormSection() {
    const [submitted, setSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (submitting) return;

        const form = e.currentTarget;
        const data = new FormData(form);

        setSubmitting(true);
        setError(null);

        try {
            const res = await fetch("/api/call-back", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: data.get("first"),
                    lastName: data.get("last"),
                    phone: data.get("phone"),
                    email: data.get("email") || "",
                    who: data.get("who"),
                    help: data.get("help") || "",
                    consent: data.get("consent") === "on",
                }),
            });

            if (!res.ok) throw new Error("Submission failed");

            form.reset();
            setSubmitted(true);
        } catch {
            setError("Something went wrong. Please try again or call us at (404) 494-2187.");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section id="contact" className="bg-[#f7faf5] py-20 px-6">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto grid lg:grid-cols-2 gap-12 items-start">
                <InViewWrapper animation={cardIn}>
                    <div className="flex flex-col gap-5">
                        <span className="text-leaf font-bold text-[0.8rem] tracking-[0.14em] uppercase">Let&apos;s talk</span>
                        <h2 className="text-forest font-extrabold tracking-[-0.02em] text-[clamp(1.9rem,3.5vw,2.75rem)] leading-tight">
                            Let&apos;s Find the Right Next Step for Your Family.
                        </h2>
                        <p className="text-muted leading-relaxed text-[1.05rem]">
                            Tell us a little about what you&apos;re looking for. Our team can help you understand where to start and which information may be relevant to your situation.
                        </p>
                        <div className="flex flex-col gap-3 mt-1">
                            {[
                                "A simple way to start the conversation",
                                "Help finding the right information",
                                "No guarantee of eligibility or service authorization",
                            ].map((point) => (
                                <div key={point} className="flex gap-3 items-start text-ink/90">
                                    <span className="text-leaf font-bold shrink-0">✓</span>
                                    {point}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-muted mt-2 flex items-center gap-2">
                            Prefer to talk?{" "}
                            <Link href="tel:4044942187" className="inline-flex items-center gap-1.5 text-leaf font-bold hover:underline underline-offset-4">
                                <FaPhoneAlt /> (404) 494-2187
                            </Link>
                        </p>
                    </div>
                </InViewWrapper>

                <InViewWrapper animation={cardInAlt}>
                    <div className="bg-white border border-[#e1e8e1] rounded-[24px] p-8 sm:p-9 shadow-[0_16px_45px_rgba(25,63,41,0.08)]">
                        <h3 className="text-forest font-extrabold text-[1.4rem] tracking-tight">Request a Call Back</h3>
                        <p className="text-muted text-[0.92rem] mt-1 mb-6">
                            Complete the form below and our team can follow up.
                        </p>

                        {submitted ? (
                            <div className="rounded-2xl bg-mint border border-[#b9d4c0] p-6 text-forest flex gap-3 items-start" role="status">
                                <FaCheck className="text-leaf mt-1 shrink-0" />
                                <div>
                                    <p className="font-bold">Thanks! Your request has been received.</p>
                                    <p className="text-ink/80 mt-1 text-[0.95rem]">
                                        A coordinator will follow up soon. If you need help sooner, call{" "}
                                        <Link href="tel:4044942187" className="text-leaf font-bold underline underline-offset-4">(404) 494-2187</Link>.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <label className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink">
                                        First name *
                                        <input
                                            required
                                            name="first"
                                            autoComplete="given-name"
                                            className="rounded-xl border border-[#d5e0d6] bg-white px-4 py-3 text-base font-normal text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink">
                                        Last name *
                                        <input
                                            required
                                            name="last"
                                            autoComplete="family-name"
                                            className="rounded-xl border border-[#d5e0d6] bg-white px-4 py-3 text-base font-normal text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink">
                                        Phone number *
                                        <input
                                            required
                                            name="phone"
                                            type="tel"
                                            autoComplete="tel"
                                            className="rounded-xl border border-[#d5e0d6] bg-white px-4 py-3 text-base font-normal text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink">
                                        Email address
                                        <input
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            className="rounded-xl border border-[#d5e0d6] bg-white px-4 py-3 text-base font-normal text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink sm:col-span-2">
                                        Who needs care? *
                                        <select
                                            required
                                            name="who"
                                            defaultValue=""
                                            className="rounded-xl border border-[#d5e0d6] bg-white px-4 py-3 text-base font-normal text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
                                        >
                                            <option value="" disabled>Choose one</option>
                                            <option>A child</option>
                                            <option>An adult or senior</option>
                                            <option>I&apos;m a healthcare professional making a referral</option>
                                            <option>Other / not sure yet</option>
                                        </select>
                                    </label>
                                    <label className="flex flex-col gap-1.5 text-[0.85rem] font-semibold text-ink sm:col-span-2">
                                        What are you looking for?
                                        <select
                                            name="help"
                                            defaultValue=""
                                            className="rounded-xl border border-[#d5e0d6] bg-white px-4 py-3 text-base font-normal text-ink outline-none focus:border-leaf focus:ring-2 focus:ring-leaf/20"
                                        >
                                            <option value="">Choose a topic (optional)</option>
                                            <option>Pediatric nursing / GAPP</option>
                                            <option>Personal care</option>
                                            <option>CCSP / SOURCE</option>
                                            <option>Skilled nursing</option>
                                            <option>Specialty care</option>
                                            <option>General questions</option>
                                        </select>
                                    </label>
                                </div>

                                <label className="flex gap-3 items-start text-[0.88rem] text-muted leading-relaxed cursor-pointer">
                                    <input type="checkbox" name="consent" required className="mt-1 accent-[#397b4b] w-4 h-4 shrink-0" />
                                    <span>
                                        I agree that AmeriCare may contact me about this inquiry. I understand this form should not include private medical details.
                                    </span>
                                </label>

                                {error && (
                                    <p role="alert" className="text-sm text-red-700 leading-relaxed">
                                        {error}
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-forest text-white font-bold px-8 py-4 hover:bg-[#174528] smooth mt-1 disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {submitting ? "Sending…" : "Request a Call Back →"}
                                </button>

                                <p className="text-[0.78rem] text-muted leading-relaxed">
                                    Privacy note: Please do not include sensitive medical or Medicaid identifiers in this form.
                                </p>
                            </form>
                        )}
                    </div>
                </InViewWrapper>
            </div>
        </section>
    );
}
