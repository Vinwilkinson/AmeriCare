"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import InViewWrapper from "../components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";

const audiences = [
    {
        img: "/gapp-children.jpg",
        alt: "Child receiving in-home nursing support",
        title: "A Child",
        body: "Looking for pediatric nursing, therapy support, or programs like GAPP for a child with medical needs at home.",
        href: "/services/gapp",
        cta: "Explore Pediatric Care",
    },
    {
        img: "/senior-family-care.jpg",
        alt: "Senior receiving compassionate home care",
        title: "An Adult or Senior",
        body: "Exploring personal care, skilled nursing, companionship, or Medicaid waiver options such as CCSP / SOURCE.",
        href: "/services/ccsp-source",
        cta: "Explore Adult Care",
    },
    {
        img: "/why-ameri-care.jpg",
        alt: "Healthcare professional making a referral",
        title: "A Healthcare Professional",
        body: "Making a referral or connecting a patient or family with AmeriCare services and program pathways.",
        href: "/speak-with-coordinator",
        cta: "Refer a Family",
    },
];

export default function AudienceSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto">
                <div className="max-w-[740px] mb-12">
                    <span className="text-leaf font-bold text-[0.8rem] tracking-[0.14em] uppercase">Find your path</span>
                    <h2 className="text-forest font-extrabold tracking-[-0.02em] text-[clamp(1.9rem,3.5vw,2.6rem)] leading-tight mt-2">
                        Who Are You Looking for Care For?
                    </h2>
                    <p className="text-muted mt-3 text-[1.05rem] leading-relaxed">
                        Start with the situation that best describes your needs. We&apos;ll help you find the most relevant services and information.
                    </p>
                </div>

                <div className="grid gap-7 md:grid-cols-3">
                    {audiences.map((item, index) => (
                        <InViewWrapper key={item.title} animation={index % 2 === 0 ? cardIn : cardInAlt}>
                            <article className="h-full bg-cream border border-[#e1e8e1] rounded-[22px] overflow-hidden hover:shadow-[0_16px_45px_rgba(25,63,41,0.10)] hover:-translate-y-1 smooth flex flex-col">
                                <div className="h-[200px] bg-[#e6f1e7] overflow-hidden">
                                    <Image
                                        src={item.img}
                                        alt={item.alt}
                                        width={800}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-7 flex-1 flex flex-col gap-3">
                                    <h3 className="text-forest font-extrabold text-[1.35rem] tracking-tight">{item.title}</h3>
                                    <p className="text-muted leading-relaxed text-[0.98rem] flex-1">{item.body}</p>
                                    <Link
                                        href={item.href}
                                        className="inline-flex items-center gap-2 text-leaf font-bold text-[0.92rem] mt-2 hover:gap-3 smooth"
                                    >
                                        {item.cta} <FaArrowRight />
                                    </Link>
                                </div>
                            </article>
                        </InViewWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
