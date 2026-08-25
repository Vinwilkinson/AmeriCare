"use client"
import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";
import { FaClipboardCheck, FaVideo, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";

export default function ResourceCards() {
    const cards = [
        {
            label: "POPULAR STARTING POINT",
            title: "Discover Your Caregiving Stage",
            description: "Take our quick Parent Caregiver Scorecard to understand where you are in your caregiving journey and receive personalized resources based on your current needs.",
            meta: "Takes about 2 minutes.",
            cta: "TAKE THE SCORECARD",
            href: "https://family-support-score.lovable.app/parents",
            external: true,
            icon: <FaClipboardCheck className="text-4xl text-primary" />,
            animation: cardIn
        },
        {
            label: "LIVE MONTHLY",
            title: "Join Our Monthly Parent Webinar",
            description: "Get practical guidance from nurses, care experts, and community professionals on topics that matter to families caring for children with complex needs.",
            meta: "Free - Online - New topic every month",
            cta: "RESERVE YOUR SPOT",
            href: "https://family-support-score.lovable.app/webinar",
            external: true,
            icon: <FaVideo className="text-4xl text-primary" />,
            animation: cardInAlt
        },
        {
            label: "STAY CONNECTED",
            title: "Explore Upcoming Events",
            description: "Find AmeriCare family events, community programs, educational sessions, and opportunities to connect with caregivers and local resources.",
            meta: "See what's happening near you.",
            cta: "VIEW EVENTS",
            href: "/events",
            icon: <FaCalendarAlt className="text-4xl text-primary" />,
            animation: cardIn
        }
    ];

    return (
        <section className="dark:bg-darkBg dark:text-white bg-white py-[6rem] px-6">
            <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 grid-cols-1 gap-8">
                {cards.map((card, index) => (
                    <InViewWrapper 
                        key={card.title} 
                        animation={card.animation} 
                        className={index === 1 ? "sm:translate-y-6" : ""}
                    >
                        <Link href={card.href} target={card.external ? "_blank" : undefined} rel={card.external ? "noopener noreferrer" : undefined} className="block h-full">
                            <div className="h-full flex flex-col shadow-lg group smooth hover:-translate-y-1 dark:bg-darkBg bg-white border border-primary/10 dark:border-white/10 rounded-[24px] overflow-hidden cursor-pointer">
                                <div className="py-6 px-8 border-b border-dashed border-primary/25 dark:border-white/10 bg-primary/5 backdrop-blur flex items-center gap-4">
                                    {card.icon}
                                    <span className="text-sm font-semibold tracking-wider text-primary uppercase">{card.label}</span>
                                </div>
                                <div className="flex-1 py-6 px-8 flex flex-col gap-4">
                                    <h3 className="text-2xl font-semibold dark:text-white text-themeBlack">{card.title}</h3>
                                    <p className="dark:text-white/70 text-themeBlack/70 leading-relaxed">{card.description}</p>
                                    <span className="text-sm dark:text-white/50 text-themeBlack/50 mt-auto">{card.meta}</span>
                                </div>
                                <div className="py-4 px-8 border-t border-dashed border-primary/25 dark:border-white/10 bg-primary/10 dark:bg-white/5 group-hover:bg-primary group-hover:text-white smooth flex items-center justify-center">
                                    <span className="font-semibold tracking-wider">{card.cta} →</span>
                                </div>
                            </div>
                        </Link>
                    </InViewWrapper>
                ))}
            </div>
        </section>
    )
}
