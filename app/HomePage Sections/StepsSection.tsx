import InViewWrapper from "../components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";

const steps = [
    {
        n: "1",
        title: "Tell Us What You Need",
        body: "Share the general type of care or support you're looking for.",
    },
    {
        n: "2",
        title: "Explore Your Options",
        body: "Discuss relevant services and potential program pathways with our team.",
    },
    {
        n: "3",
        title: "Complete Required Steps",
        body: "Where appropriate, work through assessment and documentation requirements.",
    },
    {
        n: "4",
        title: "Plan What Comes Next",
        body: "If services are appropriate and approved, coordinate next steps for care.",
    },
];

export default function StepsSection() {
    return (
        <section className="bg-[#f7faf5] py-20 px-6">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto">
                <div className="max-w-[740px] mb-12">
                    <span className="text-leaf font-bold text-[0.8rem] tracking-[0.14em] uppercase">A clear next step</span>
                    <h2 className="text-forest font-extrabold tracking-[-0.02em] text-[clamp(1.9rem,3.5vw,2.6rem)] leading-tight mt-2">
                        Getting Started Is Simple
                    </h2>
                    <p className="text-muted mt-3 text-[1.05rem] leading-relaxed">
                        We can help you understand the process and identify what information may be needed next.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {steps.map((step, index) => (
                        <InViewWrapper key={step.title} animation={index % 2 === 0 ? cardIn : cardInAlt}>
                            <article className="h-full bg-white border border-[#e1e8e1] rounded-[20px] p-7 hover:shadow-[0_16px_45px_rgba(25,63,41,0.10)] smooth flex flex-col gap-3">
                                <span className="w-11 h-11 rounded-full bg-forest text-white grid place-items-center font-extrabold text-lg">
                                    {step.n}
                                </span>
                                <h3 className="text-forest font-extrabold text-[1.1rem] tracking-tight">{step.title}</h3>
                                <p className="text-muted leading-relaxed text-[0.95rem]">{step.body}</p>
                            </article>
                        </InViewWrapper>
                    ))}
                </div>
            </div>
        </section>
    );
}
