import InViewWrapper from "@/app/components/InViewWrapper";
import { cardIn, cardInAlt, fadeIn } from "@/lib/AnimationVariants";
import clsx from "clsx";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
const FontFamily = Playfair_Display({ subsets: ["latin"], weight: "600" });

export default function OurCaregivers() {
    return (
        <>
            <div className="dark:bg-darkBg dark:text-white grid place-items-center sm:py-24 py-12 2xl:px-[10vw] sm:px-[8vw]  px-6 relative z-40 bg-white">
                <Image
                    src={"https://americare.sirv.com/icons/bbblurry.svg"}
                    alt={"blur shape"}
                    height={800}
                    width={800}
                    className="sm:w-[70rem] w-[80rem] absolute sm:-top-[20rem] -top-[8rem] sm:-left-[20rem] -left-[12rem] dark:opacity-50 max-md:dark:opacity-25"
                />
                <div>
                    <InViewWrapper animation={fadeIn} className="mb-12">
                        <>
                            <h1 className={clsx(FontFamily.className, "sm:text-[4vw] text-5xl text-primary font-semibold")}>Our Caregivers</h1>
                            <p className="opacity-60 text-[0.97rem] font-semibold">Consistently Kind, Every Time</p>
                        </>
                    </InViewWrapper>

                    <div className="flex gap-12 flex-wrap dark:mix-blend-screen mix-blend-multiply overflow-x-hidden">
                        <InViewWrapper animation={cardIn} className="min-w-[20rem] flex-[2]">
                            <>
                                <p className=" h-fit 2xl:text-5xl sm:text-4xl text-2xl sm:font-normal font-semibold opacity-80 relative">
                                    <Image
                                        src={"https://americare.sirv.com/icons/quote-icon.svg"}
                                        alt="Quote icon"
                                        height={300}
                                        width={300}
                                        priority
                                        className={clsx(
                                            "w-[8vw] opacity-40 smooth absolute -top-[2.5vw] -left-[6vw] -rotate-3 -z-[1]"
                                        )}
                                    />
                                    <span className="sm:text-left text-center">
                                        Our compassionate and experienced caregivers undergo excellent training to ensure they provide the highest quality care.
                                    </span>
                                    <Image
                                        src={"https://americare.sirv.com/icons/quote-icon.svg"}
                                        alt="Quote icon"
                                        height={300}
                                        width={300}
                                        priority
                                        className={clsx(
                                            "w-[8vw] opacity-40 smooth absolute -bottom-[2.5vw] rotate-3 mix-blend-lighten scale-x-[-1] -right-[2vw] -z-[1]"
                                        )}
                                    />
                                </p>

                                <Image
                                    src={"https://americare.sirv.com/icons/healt-tray.jpg"}
                                    alt={"Nurse photo 002"}
                                    height={480}
                                    width={1920}
                                    priority
                                    className={clsx(
                                        "sm:visible invisible",
                                        "md:w-[90%] sm:px-6 pt-7  opacity-50 smooth dark:invert",
                                    )}
                                />
                            </>
                        </InViewWrapper>

                        <InViewWrapper animation={cardInAlt} className="min-w-[20rem] flex-1 opacity-70 flex flex-col gap-4">
                            <>
                                <span>
                                    We understand that the quality of care depends on the training and education our caregivers receive. This is why all of our caregivers are experienced and skilled in handling your loved ones&apos; particular needs. We pride ourselves on hiring people for their compassion, experience, and flexibility.
                                </span>
                                <span>
                                    However, we know this isn&apos;t all it takes to provide the best care possible. Caregivers also need excellent skills and competency, which come from comprehensive training. Trained caregivers provide the highest quality of care, recognize when medical care is needed, and help clients avoid injury around the home.
                                </span>
                                <span>
                                    Ultimately, our focus is on ensuring our caregivers are well-trained so they can offer the best care, meeting the specific needs of your loved ones with both skill and compassion.
                                </span>
                            </>
                        </InViewWrapper>
                    </div>
                </div>
            </div>
        </>
    );
}