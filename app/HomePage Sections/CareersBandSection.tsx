import Link from "next/link";
import InViewWrapper from "../components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";

export default function CareersBandSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto">
                <InViewWrapper animation={fadeIn}>
                    <div className="bg-forest text-white rounded-[28px] p-10 sm:p-12 flex sm:flex-row flex-col sm:items-center justify-between gap-8">
                        <div className="max-w-[36rem] flex flex-col gap-4">
                            <span className="inline-flex w-fit items-center rounded-full bg-white/15 text-mint text-[0.78rem] font-bold tracking-[0.1em] uppercase px-4 py-1.5">
                                Careers & partnerships
                            </span>
                            <h2 className="font-extrabold tracking-[-0.02em] text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">
                                Be Part of Better Care.
                            </h2>
                            <p className="text-white/80 leading-relaxed">
                                Interested in joining AmeriCare or connecting as a healthcare professional? Find the right path to reach our team.
                            </p>
                        </div>
                        <div className="flex gap-3 flex-wrap shrink-0">
                            <Link
                                href="/careers"
                                className="inline-flex items-center gap-2 rounded-full bg-white text-forest font-bold px-8 py-4 hover:bg-mint smooth"
                            >
                                Explore Careers
                            </Link>
                            <Link
                                href="/speak-with-coordinator"
                                className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white border border-white/40 font-bold px-8 py-4 hover:bg-white/20 smooth"
                            >
                                Professional Referrals
                            </Link>
                        </div>
                    </div>
                </InViewWrapper>
            </div>
        </section>
    );
}
