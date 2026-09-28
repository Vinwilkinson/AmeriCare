import clsx from "clsx";
import { fadeIn, cardIn, cardInAlt } from "@/lib/AnimationVariants";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import InViewWrapper from "../components/InViewWrapper";

const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

const featureCards = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
        ),
        title: "Licensed & Accredited",
        description: "State-licensed, ACHC accredited, and committed to the highest standards of care.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        title: "Specialized Care",
        description: "From seniors to children with complex medical needs, we offer programs like GAPP, CCSP, and SOURCE.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
        ),
        title: "Experienced Caregivers",
        description: "Compassionate, vetted professionals trained to provide safe, reliable, high-quality care.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
            </svg>
        ),
        title: "Personalized Support",
        description: "Care plans tailored to your loved one's unique needs, with a team that treats your family like our own.",
    },
];

export default function OurMissionSection() {
    return (
        <div className="dark:bg-darkBg dark:text-white bg-white overflow-hidden">
            {/* Top section: text + image */}
            <div className="relative 2xl:px-[10vw] sm:px-[8vw] px-6 pt-24 pb-0">
                <div className="flex gap-12 flex-wrap items-start">
                    {/* Left: eyebrow + heading + quote + description */}
                    <InViewWrapper animation={cardIn} className="min-w-[20rem] flex-[2] flex flex-col gap-6 relative z-10 pb-16">
                        <>
                            <span className="text-xs tracking-[0.25em] uppercase text-primary/70 font-semibold">
                                Compassionate Care. Stronger Families.
                            </span>

                            <h1 className={clsx(FontFamily.className, "sm:text-[5vw] text-5xl font-bold leading-tight")}>
                                <span className="text-gray-800 dark:text-white">Why </span>
                                <span className="text-primary">AmeriCare</span>
                            </h1>

                            <p className="2xl:text-2xl sm:text-xl text-base leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl">
                                We understand that every family&apos;s care journey is different. Whether you&apos;re seeking
                                support for a child or an aging loved one, AmeriCare provides compassionate,
                                dependable care designed around their needs — and your family.
                            </p>

                            <InViewWrapper animation={cardInAlt} className="border-l-4 border-primary pl-5 max-w-sm opacity-80 sm:text-base text-sm text-gray-600 dark:text-gray-400">
                                <span>
                                    From personal support for seniors to skilled nursing for children with complex medical
                                    needs, our team works closely with families to provide consistent, high-quality
                                    care at home.
                                </span>
                            </InViewWrapper>
                        </>
                    </InViewWrapper>

                    {/* Right: hero image */}
                    <InViewWrapper animation={cardInAlt} className="min-w-[18rem] flex-1 relative z-10 self-end">
                        <div className="rounded-tl-[3rem] overflow-hidden w-full">
                            <Image
                                src={"https://americare.sirv.com/rusty-watson-yIGinlYA6t8-unsplash.jpg"}
                                alt="AmeriCare nurse with child"
                                height={800}
                                width={1200}
                                priority
                                className="w-full h-[28rem] object-cover object-top"
                            />
                        </div>
                    </InViewWrapper>
                </div>
            </div>

            {/* Bottom: 4 feature cards */}
            <InViewWrapper animation={fadeIn} className="2xl:px-[10vw] sm:px-[8vw] px-6 pb-24 pt-12">
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-6">
                    {featureCards.map(({ icon, title, description }) => (
                        <div
                            key={title}
                            className="flex flex-col gap-4 p-6 rounded-2xl bg-[#f4f8f1] dark:bg-primary/10 border border-primary/10"
                        >
                            <div className="w-14 h-14 rounded-full bg-white dark:bg-darkBg flex items-center justify-center shadow-sm">
                                {icon}
                            </div>
                            <span className={clsx(FontFamily.className, "text-primary font-bold sm:text-lg text-base")}>
                                {title}
                            </span>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {description}
                            </p>
                        </div>
                    ))}
                </div>
            </InViewWrapper>
        </div>
    );
}
