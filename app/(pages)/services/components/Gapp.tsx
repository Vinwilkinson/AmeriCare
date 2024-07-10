import CustomBtn from "@/app/components/CustomBtn";
import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn, cardInAlt, fadeIn } from "@/lib/AnimationVariants";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });


export default function Gapp() {
    return (
        <>
            <InViewWrapper animation={fadeIn}  className="grid place-items-center sm:py-6 py-4 relative z-10 overflow-x-hidden">
                <div>
                    <div className="mb-4 mt-10">
                        <h1 className={clsx(FontFamily.className, "sm:text-[3vw] text-4xl text-primary font-semibold")}>
                            What is GAPP?
                        </h1>
                    </div>

                    <div className="flex gap-8 flex-wrap dark:mix-blend-screen mix-blend-multiply mt-12 ">
                        <InViewWrapper animation={cardIn} className="sm:min-w-[30rem] min-w-[20rem] flex-1">
                            <>
                                <p className="flex flex-col gap-6">
                                    <span className=" h-fit 2xl:text-5xl sm:text-3xl text-xl sm:font-normal font-semibold opacity-80 relative">
                                        <span className="sm:text-left text-center">
                                            &quot;The Georgia Pediatric Program (GAPP) offers in-home nursing services for medically fragile children under 21, ensuring continuous, high-quality care.&quot;
                                        </span>
                                    </span>
                                    <span className="opacity-70">
                                        The Georgia Pediatric Program (GAPP) provides in-home nursing services for medically fragile
                                        children under 21. This program ensures that children with complex medical needs receive
                                        continuous, high-quality care in their homes.
                                    </span>

                                    <CustomBtn
                                        linkHref="#check_eligibility"
                                        text="Check Eligibility"

                                    />
                                </p>
                            </>
                        </InViewWrapper>
                        <InViewWrapper animation={cardInAlt} className="min-w-[20rem] flex-1">
                            <>
                                <div className="rounded-lg overflow-hidden">
                                    <Image
                                        src={"https://americare.sirv.com/pexels-mart-production-7162989.jpg"}
                                        alt={"Happy teens"}
                                        height={3735}
                                        width={5602}
                                        priority
                                        className={clsx(
                                            "w-full object-cover smooth",
                                        )}
                                    />
                                </div>
                            </>
                        </InViewWrapper>
                    </div>
                </div>
            </InViewWrapper>
        </>
    );
}