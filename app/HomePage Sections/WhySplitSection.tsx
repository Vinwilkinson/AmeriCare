import Image from "next/image";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import InViewWrapper from "../components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";

const checklist = [
    "Guidance to help you understand possible care pathways",
    "Services considered around individual needs and care plans",
    "A team focused on compassionate, respectful support",
    "Resources to help families navigate the process",
];

export default function WhySplitSection() {
    return (
        <section className="bg-white py-20 px-6">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto grid lg:grid-cols-2 gap-12 items-center">
                <InViewWrapper animation={cardIn}>
                    <div className="rounded-[28px] overflow-hidden bg-[#e6f1e7] min-h-[360px] h-full">
                        <Image
                            src="/why-ameri-care.jpg"
                            alt="Care and support in a home setting"
                            width={1200}
                            height={900}
                            className="w-full h-full object-cover min-h-[360px]"
                        />
                    </div>
                </InViewWrapper>

                <InViewWrapper animation={cardInAlt}>
                    <div className="flex flex-col gap-5">
                        <span className="text-leaf font-bold text-[0.8rem] tracking-[0.14em] uppercase">Why AmeriCare</span>
                        <h2 className="text-forest font-extrabold tracking-[-0.02em] text-[clamp(1.9rem,3.5vw,2.6rem)] leading-tight">
                            Care Is Personal. So Is Our Approach.
                        </h2>
                        <p className="text-muted leading-relaxed text-[1.05rem]">
                            Choosing home healthcare is an important decision. We believe families deserve clear information, respectful communication, and support as they explore the options available to them.
                        </p>
                        <ul className="flex flex-col gap-3 mt-1">
                            {checklist.map((item) => (
                                <li key={item} className="flex gap-3 items-start text-ink/90 leading-relaxed">
                                    <span className="w-6 h-6 rounded-full bg-mint text-leaf grid place-items-center text-[0.7rem] shrink-0 mt-0.5">
                                        <FaCheck />
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-3">
                            <Link
                                href="/why-us"
                                className="inline-flex items-center gap-2 rounded-full bg-forest text-white font-bold px-8 py-4 hover:bg-[#174528] smooth"
                            >
                                Why AmeriCare →
                            </Link>
                        </div>
                    </div>
                </InViewWrapper>
            </div>
        </section>
    );
}
