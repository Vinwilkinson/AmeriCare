import Link from "next/link";
import InViewWrapper from "../components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";

const programs = [
    {
        mark: "GAPP",
        title: "Georgia Pediatric Program",
        body: "Learn about GAPP and in-home nursing services for eligible medically fragile children. Program eligibility and authorized services depend on individual requirements.",
        href: "/services/gapp",
        cta: "Learn About GAPP",
    },
    {
        mark: "CCSP / SOURCE",
        title: "CCSP / SOURCE",
        body: "Explore Georgia Medicaid waiver programs that may support eligible older adults and people with disabilities in the community.",
        href: "/services/ccsp-source",
        cta: "Learn About CCSP / SOURCE",
    },
];

export default function ProgramsSection() {
    return (
        <section className="bg-forest text-white py-20 px-6">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto">
                <div className="max-w-[740px] mb-12">
                    <span className="text-mint font-bold text-[0.8rem] tracking-[0.14em] uppercase">Understand your options</span>
                    <h2 className="font-extrabold tracking-[-0.02em] text-[clamp(1.9rem,3.5vw,2.6rem)] leading-tight mt-2">
                        Medicaid Programs &amp; Care Guidance
                    </h2>
                    <p className="text-white/80 mt-3 text-[1.05rem] leading-relaxed">
                        Program names and requirements can be confusing. Start with these pathways to learn more about services and potential eligibility.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {programs.map((program, index) => (
                        <InViewWrapper key={program.title} animation={index % 2 === 0 ? cardIn : cardInAlt}>
                            <article className="h-full bg-white/10 border border-white/15 rounded-[22px] p-8 backdrop-blur-sm hover:bg-white/15 smooth flex gap-6 items-start">
                                <div className="shrink-0 w-[92px] h-[92px] rounded-2xl bg-mint text-forest grid place-items-center text-center font-extrabold text-[0.78rem] leading-tight px-2">
                                    {program.mark}
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="font-extrabold text-[1.3rem] tracking-tight">{program.title}</h3>
                                    <p className="text-white/80 leading-relaxed text-[0.95rem]">{program.body}</p>
                                    <Link
                                        href={program.href}
                                        className="text-mint font-bold text-[0.95rem] hover:underline underline-offset-4"
                                    >
                                        {program.cta} →
                                    </Link>
                                </div>
                            </article>
                        </InViewWrapper>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/speak-with-coordinator"
                        className="inline-flex items-center gap-2 rounded-full bg-white text-forest font-bold px-8 py-4 hover:bg-mint smooth"
                    >
                        Ask About Your Options →
                    </Link>
                </div>
            </div>
        </section>
    );
}
