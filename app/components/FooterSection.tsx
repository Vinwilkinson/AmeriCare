import Image from "next/image";
import clsx from "clsx";
import CustomBtn from "./CustomBtn";
import Link from "next/link";
import { FaFacebookF, FaLinkedin } from "react-icons/fa6";
import { FaMailBulk, FaPhoneSquareAlt } from "react-icons/fa";
import { fadeIn } from "@/lib/AnimationVariants";
import InViewWrapper from "./InViewWrapper";

export default function FooterSection() {

    return (
        <div className={clsx(
            "dark:bg-darkBg bg-white/90 text-white sm:text-xl text-sm"
        )}>
            <InViewWrapper animation={fadeIn} className="pt-12 pb-6 sm:px-[5vw] px-4 bg-themeBlack sm:rounded-t-[3rem] rounded-t-3xl">
                <>
                    <div className="border-b border-b-white/25 pb-6 flex flex-wrap justify-between gap-4 items-center">
                        <Image
                            src={"https://americare.sirv.com/icons/logo-png.png"}
                            alt="AmeriCare Logo"
                            height={300}
                            width={300}
                            priority
                            className={clsx(
                                "w-44 sm:-ml-6 smooth sm:mx-0 mx-auto",
                            )}
                        />

                        <div className="flex gap-2 sm:mx-0 mx-auto">
                            <CustomBtn
                                customClass="bg-black/10"
                                linkHref="/careers"
                                text="Join Us"
                                noBorder={true}
                            />
                            <CustomBtn
                                customClass="after:h-[105%] after:w-[105%] opacity-100 after:bg-primary text-white"
                                linkHref="/book-an-appointment"
                                noBorder={true}
                                text="Book an Appointment"
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap-reverse py-6 gap-3 justify-between">
                        <div className="max-w-md flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold">Address</span>
                                <span className="opacity-80">1755 E Park Place Blvd Stone Mountain, GA 30087</span>
                            </div>

                            <div>
                                <span className="mt-6 flex gap-1 group items-end flex-wrap">
                                    <FaPhoneSquareAlt className="text-3xl smooth group-hover:text-primary" />
                                    Call <Link className="text-primary" href={"tel:4044942187"}>(404)-494-2187</Link> <span className="whitespace-normal">For</span> <span className="whitespace-normal">A</span> <span className="whitespace-normal">Free</span> <span className="whitespace-normal">Consultation!</span>
                                </span>
                                <span className="mt-3 flex gap-1 group items-end">
                                    <FaMailBulk className="text-3xl smooth group-hover:text-primary" />
                                    Email: <Link className="text-primary" href={"mailto:support@americareinhome.com"}>support@americareinhome.com</Link>.
                                </span>
                            </div>
                        </div>

                        <div className="grid gap-3 max-md:text-base sm:my-0 my-4 text-white">
                            <Link className="min-w-[10rem] sm:px-3 sm:hover:text-primary max-sm:text-primary smooth hover:font-semibold" href="#">About</Link>
                            <Link className="min-w-[10rem] sm:px-3 sm:hover:text-primary max-sm:text-primary smooth hover:font-semibold" href="#">Services</Link>
                            <Link className="min-w-[10rem] sm:px-3 sm:hover:text-primary max-sm:text-primary smooth hover:font-semibold" href="#">Career</Link>
                            <Link className="min-w-[10rem] sm:px-3 sm:hover:text-primary max-sm:text-primary smooth hover:font-semibold" href="#">Contact</Link>
                        </div>

                        <div className="grid sm:grid-cols-1 gap-3 sm:min-w-fit min-w-full grid-cols-4 text-white">
                            <Link href={"#"} className="grid place-items-center">
                                <FaFacebookF className="text-3xl hover:text-primary" />
                            </Link>
                            <Link href={"#"} className="grid place-items-center">
                                <FaLinkedin className="text-3xl hover:text-primary" />
                            </Link>
                            <Link href={"#"} className="grid place-items-center">
                                <FaMailBulk className="text-3xl hover:text-primary" />
                            </Link>
                            <Link href={"#"} className="grid place-items-center">
                                <FaPhoneSquareAlt className="text-3xl hover:text-primary" />
                            </Link>
                        </div>
                    </div>

                    <div className="flex py-6 border-t border-t-white/25 text-base max-md:text-sm justify-center">
                        <p className="flex items-center justify-between">
                            <span>Designed by: <Link href={"https://fabiconcept.online/"} className="text-primary">Fabiconcept</Link></span>
                            <span>
                                See our{" "} 
                                <Link className="text-primary" href={"/policy"}>Privacy Policy</Link>.
                            </span>
                        </p>
                    </div>
                </>
            </InViewWrapper>
        </div>
    )
}