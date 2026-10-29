import Link from "next/link";
import InViewWrapper from "../components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

export default function TeamBandSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto">
                <div className="max-w-[740px] mb-10">
                    <span className="text-leaf font-bold text-[0.8rem] tracking-[0.14em] uppercase">People behind the care</span>
                    <h2 className="text-forest font-extrabold tracking-[-0.02em] text-[clamp(1.9rem,3.5vw,2.6rem)] leading-tight mt-2">
                        Meet the Team Behind AmeriCare
                    </h2>
                    <p className="text-muted mt-3 text-[1.05rem] leading-relaxed">
                        Our team works to help families navigate care with clear communication, compassion, and personalized support.
                    </p>
                </div>

                <InViewWrapper animation={fadeIn}>
                    <div className="bg-forest text-white rounded-[28px] p-10 sm:p-12 flex sm:flex-row flex-col sm:items-center justify-between gap-8">
                        <div className="max-w-[36rem] flex flex-col gap-4">
                            <span className="inline-flex w-fit items-center rounded-full bg-white/15 text-mint text-[0.78rem] font-bold tracking-[0.1em] uppercase px-4 py-1.5">
                                Our people
                            </span>
                            <h3 className="font-extrabold tracking-[-0.02em] text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">
                                Here to help you take the next step.
                            </h3>
                            <p className="text-white/80 leading-relaxed">
                                Get to know the people behind AmeriCare, from clinical leadership to the team members who help families and partners connect with services.
                            </p>
                        </div>
                        <Link
                            href="/why-us/team"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-forest font-bold px-8 py-4 hover:bg-mint smooth shrink-0"
                        >
                            Meet Our Team →
                        </Link>
                    </div>
                </InViewWrapper>
            </div>
        </section>
    );
}
