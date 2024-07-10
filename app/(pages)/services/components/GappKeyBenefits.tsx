import clsx from "clsx";
import Image from "next/image";
import nurseSvg from "./components/health-medical-plester-svgrepo-com.svg";
import careSvg from "./components/health-health-insurance-medical-svgrepo-com.svg";
import familySvg from "./components/family-svgrepo-com.svg";
import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn, cardInAlt } from "@/lib/AnimationVariants";

const benefitsList: { title: string, content: string, count: number, svg: string }[] = [
    { svg: nurseSvg, title: "Skilled Nursing", content: "In-home skilled nursing care", count: 1 },
    { svg: careSvg, title: "Care Coordination", content: "Care coordination and support services", count: 2 },
    { svg: familySvg, title: "Family Support", content: "Allows children to stay with their families", count: 3 },
]

export default function GappKeyBenefits() {
    return (
        <section className={clsx("sm:pt-10 pt-6 w-full mb-12")}>
            <div className="flex flex-wrap gap-4 justify-center w-full perspective overflow-x-hidden">
                {benefitsList.map(({ content, count, svg, title }) => (
                    <InViewWrapper animation={count % 2 === 0 ? cardIn : cardInAlt} key={count} className="md:min-w-[30%] min-w-[20rem] rounded-xl gap-3 flex-1 flex flex-col items-center p-6 text-center dark:bg-white/5 bg-primary/5 smooth rotate-y dark:hover:bg-white/10 hover:bg-primary/10 border hover:border-primary/50 shadow-lg shadow-transparent hover:bg-gradient-to-r from-white/10 to-transparent hover:shadow-primary/5 border-transparent">
                        <>
                            <Image
                                src={svg}
                                alt="Icon"
                                height={100}
                                width={100}
                                className="sm:w-24 w-20"
                            />

                            <span className="md:text-2xl sm:text-xl text-primary text-lg font-semibold">{title}</span>
                            <span>
                                {content}
                            </span>
                        </>
                    </InViewWrapper>
                ))}
            </div>
        </section>
    )
}
