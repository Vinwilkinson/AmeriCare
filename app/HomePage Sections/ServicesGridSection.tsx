import Link from "next/link";
import { FaPlus, FaHome, FaHeart, FaSun, FaStethoscope, FaFlask } from "react-icons/fa";
import InViewWrapper from "../components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";

const services = [
    { icon: <FaPlus />, title: "Pediatric Nursing", body: "In-home nursing support for eligible children with complex medical needs.", href: "/services/gapp" },
    { icon: <FaHome />, title: "Pediatric Rehabilitation", body: "Explore information about pediatric therapy and developmental support services.", href: "/services" },
    { icon: <FaHeart />, title: "Personal Care", body: "Help with everyday activities, routines, and maintaining comfort at home.", href: "/services" },
    { icon: <FaSun />, title: "Companionship", body: "Social connection and everyday support that can help reduce isolation.", href: "/services" },
    { icon: <FaStethoscope />, title: "Skilled Nursing", body: "Learn about nursing services and care options based on individual needs.", href: "/services" },
    { icon: <FaFlask />, title: "Specialty Care", body: "Explore support options for people living with complex or changing care needs.", href: "/services" },
];

export default function ServicesGridSection() {
    return (
        <section className="bg-[#f7faf5] py-20 px-6">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto">
                <div className="max-w-[740px] mb-12">
                    <span className="text-leaf font-bold text-[0.8rem] tracking-[0.14em] uppercase">Our services</span>
                    <h2 className="text-forest font-extrabold tracking-[-0.02em] text-[clamp(1.9rem,3.5vw,2.6rem)] leading-tight mt-2">
                        Care Designed Around Your Needs
                    </h2>
                    <p className="text-muted mt-3 text-[1.05rem] leading-relaxed">
                        Every family&apos;s situation is different. Explore the services AmeriCare offers and learn more about the options that may be right for your loved one.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <InViewWrapper key={service.title} animation={index % 2 === 0 ? cardIn : cardInAlt}>
                            <article className="h-full bg-white border border-[#e1e8e1] rounded-[20px] p-7 hover:shadow-[0_16px_45px_rgba(25,63,41,0.10)] hover:-translate-y-1 smooth flex flex-col gap-3">
                                <span className="w-12 h-12 rounded-full bg-mint text-leaf grid place-items-center text-lg">
                                    {service.icon}
                                </span>
                                <h3 className="text-forest font-extrabold text-[1.2rem] tracking-tight">{service.title}</h3>
                                <p className="text-muted leading-relaxed text-[0.95rem] flex-1">{service.body}</p>
                                <Link
                                    href={service.href}
                                    className="text-leaf font-bold text-[0.82rem] tracking-[0.08em] uppercase mt-2 hover:tracking-[0.12em] smooth"
                                >
                                    Learn more →
                                </Link>
                            </article>
                        </InViewWrapper>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 rounded-full bg-forest text-white font-bold px-8 py-4 hover:bg-[#174528] smooth"
                    >
                        View All Services →
                    </Link>
                </div>
            </div>
        </section>
    );
}
