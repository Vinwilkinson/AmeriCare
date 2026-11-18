"use client";

import clsx from "clsx";
import { IconType } from "react-icons";
import {
    FaBriefcase,
    FaClipboard,
    FaCompass,
    FaGraduationCap,
    FaHeart,
    FaPeopleGroup,
} from "react-icons/fa6";
import InViewWrapper from "@/app/components/InViewWrapper";
import { fadeIn } from "@/lib/AnimationVariants";
import { categories, CategoryId } from "./organizations";

const categoryIcons: Record<CategoryId, IconType> = {
    caregiver: FaHeart,
    benefits: FaClipboard,
    school: FaGraduationCap,
    life: FaCompass,
    jobs: FaBriefcase,
    community: FaPeopleGroup,
};

interface CommunityHeroProps {
    activeCategory: CategoryId | null;
    onSelect: (id: CategoryId | null) => void;
}

export default function CommunityHero({ activeCategory, onSelect }: CommunityHeroProps) {
    return (
        <div
            className="pt-[10rem] pb-14 px-6"
            style={{ background: "linear-gradient(135deg, #12352a 0%, #0d261a 55%, #143d2e 100%)" }}
        >
            <InViewWrapper animation={fadeIn} className="max-w-5xl mx-auto flex flex-col items-center text-center gap-5">
                <>
                <span className="text-[#e9c46a] font-bold tracking-[0.18em] text-xs uppercase">
                    Community Resources
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white text-balance">
                    You&apos;re not doing this alone.
                </h1>
                <p className="text-white/70 text-lg max-w-2xl leading-relaxed">
                    Trusted organizations across Georgia that help with caregiving, benefits, school
                    advocacy, planning, jobs, and belonging — vetted by the AmeriCare team.
                </p>

                <div className="flex flex-wrap justify-center gap-3 pt-4 w-full">
                    {categories.map((category) => {
                        const Icon = categoryIcons[category.id];
                        const active = activeCategory === category.id;
                        return (
                            <button
                                key={category.id}
                                type="button"
                                onClick={() => onSelect(active ? null : category.id)}
                                aria-pressed={active}
                                className={clsx(
                                    "flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold smooth cursor-pointer",
                                    active
                                        ? "bg-mint border-mint text-forest"
                                        : "bg-white/5 border-white/15 text-white/85 hover:bg-white/10"
                                )}
                            >
                                <Icon className="text-base" />
                                {category.label}
                            </button>
                        );
                    })}
                    </div>
                </>
            </InViewWrapper>
        </div>
    );
}
