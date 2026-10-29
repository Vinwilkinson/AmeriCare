import Link from "next/link";
import { FaClipboardList, FaVideo, FaCalendarAlt } from "react-icons/fa";
import InViewWrapper from "../components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";

const resources = [
    {
        icon: <FaClipboardList />,
        title: "Caregiver Resources",
        body: "Find helpful information and tools for navigating caregiving responsibilities.",
        href: "/resources",
        cta: "Explore Resources",
    },
    {
        icon: <FaVideo />,
        title: "Parent Webinars",
        body: "Discover educational opportunities and practical guidance for families.",
        href: "https://family-support-score.lovable.app/webinar",
        external: true,
        cta: "Explore Webinars",
    },
    {
        icon: <FaCalendarAlt />,
        title: "Events & Community",
        body: "See ways to learn, connect, and engage with the AmeriCare community.",
        href: "/events",
        cta: "View Events",
    },
];

export default function ResourcesGridSection() {
    return (
        <section className="bg-[#f7faf5] py-20 px-6">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto">
                <div className="max-w-[740px] mb-12">
                    <span className="text-leaf font-bold text-[0.8rem] tracking-[0.14em] uppercase">Helpful information</span>
                    <h2 className="text-forest font-extrabold tracking-[-0.02em] text-[clamp(1.9rem,3.5vw,2.6rem)] leading-tight mt-2">
                        Support Beyond the Care Plan
                    </h2>
                    <p className="text-muted mt-3 text-[1.05rem] leading-relaxed">
                        Explore resources and learning opportunities designed to help families and caregivers feel more informed.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {resources.map((item, index) => (
                        <InViewWrapper key={item.title} animation={index % 2 === 0 ? cardIn : cardInAlt}>
                            <article className="h-full bg-white border border-[#e1e8e1] rounded-[20px] overflow-hidden hover:shadow-[0_16px_45px_rgba(25,63,41,0.10)] hover:-translate-y-1 smooth flex flex-col">
                                <div className="h-14 bg-mint text-leaf grid place-items-center text-xl">
                                    {item.icon}
                                </div>
                                <div className="p-7 flex-1 flex flex-col gap-3">
                                    <h3 className="text-forest font-extrabold text-[1.2rem] tracking-tight">{item.title}</h3>
                                    <p className="text-muted leading-relaxed text-[0.95rem] flex-1">{item.body}</p>
                                    <Link
                                        href={item.href}
                                        target={item.external ? "_blank" : undefined}
                                        rel={item.external ? "noopener noreferrer" : undefined}
                                        className="text-leaf font-bold text-[0.92rem] mt-2 hover:underline underline-offset-4"
                                    >
                                        {item.cta} →
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
