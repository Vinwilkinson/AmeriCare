import { FaHome, FaHeart, FaHandsHelping, FaPhoneAlt } from "react-icons/fa";

const proofs = [
    { icon: <FaHome />, title: "Care at Home", sub: "Support in familiar surroundings" },
    { icon: <FaHeart />, title: "Family-Centered", sub: "People and needs come first" },
    { icon: <FaHandsHelping />, title: "Multiple Care Options", sub: "Explore services that may fit" },
    { icon: <FaPhoneAlt />, title: "Help Getting Started", sub: "A clear next step for families" },
];

export default function ProofStripSection() {
    return (
        <section className="bg-white border-y border-[#e1e8e1]">
            <div className="w-[min(1160px,calc(100%-40px))] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
                {proofs.map((item) => (
                    <div key={item.title} className="flex items-start gap-3.5 px-2">
                        <span className="w-11 h-11 rounded-full bg-mint text-leaf grid place-items-center text-lg shrink-0">
                            {item.icon}
                        </span>
                        <div className="flex flex-col">
                            <strong className="text-ink font-bold text-[0.98rem] leading-snug">{item.title}</strong>
                            <small className="text-muted text-[0.85rem] leading-snug mt-0.5">{item.sub}</small>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
