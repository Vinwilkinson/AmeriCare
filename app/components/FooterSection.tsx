import Image from "next/image";
import clsx from "clsx";
import CustomBtn from "./CustomBtn";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
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
                    {/* Top row: Logo + CTAs */}
                    <div className="border-b border-b-white/25 pb-6 flex flex-wrap justify-between gap-4 items-center">
                        <Image
                            src={"https://americare.sirv.com/icons/logo-png.png"}
                            alt="AmeriCare Logo"
                            height={300}
                            width={300}
                            priority
                            className="w-44 smooth"
                        />
                        <div className="flex gap-2">
                            <CustomBtn
                                customClass="bg-black/10"
                                linkHref="/careers"
                                text="Join Us"
                                noBorder={true}
                            />
                            <CustomBtn
                                customClass="after:h-[105%] after:w-[105%] opacity-100 after:bg-primary text-white"
                                linkHref="tel:4044942187"
                                noBorder={true}
                                external
                                text="Speak with Coordinator"
                            />
                        </div>
                    </div>

                    {/* Middle row: Contact + Link columns */}
                    <div className="py-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                        {/* Contact info — left side */}
                        <div className="md:col-span-4 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <span className="font-semibold">Address</span>
                                <span className="opacity-80 leading-relaxed">2950 Cherokee St, NW Suite 626, Kennesaw, GA 30144</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="flex gap-2 items-center">
                                    <FaPhoneSquareAlt className="text-2xl smooth group-hover:text-primary shrink-0" />
                                    Call <Link className="text-primary" href={"tel:4044942187"}>(404)-494-2187</Link> for a free consultation
                                </span>
                                <span className="flex gap-2 items-center">
                                    <FaMailBulk className="text-2xl smooth group-hover:text-primary shrink-0" />
                                    <Link className="text-primary" href={"mailto:support@americareinhome.com"}>support@americareinhome.com</Link>
                                </span>
                            </div>
                            <div className="flex gap-4 mt-2">
                                <Link href={"https://facebook.com/AmeriCareHealthServices"} target="_blank">
                                    <FaFacebookF className="text-2xl hover:text-primary smooth" />
                                </Link>
                                <Link href={"https://linkedin.com/company/americare-health-inc"} target="_blank">
                                    <FaLinkedin className="text-2xl hover:text-primary smooth" />
                                </Link>
                                <Link href={"https://www.instagram.com/americarehealth"} target="_blank">
                                    <FaInstagram className="text-2xl hover:text-primary smooth" />
                                </Link>
                                <Link href={"tel:4044942187"}>
                                    <FaPhoneSquareAlt className="text-2xl hover:text-primary smooth" />
                                </Link>
                            </div>
                        </div>

                        {/* Link columns — right side */}
                        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                            {/* Care */}
                            <div className="flex flex-col gap-3">
                                <span className="font-semibold text-white/60 text-sm uppercase tracking-wider">Care</span>
                                <Link className="hover:text-primary smooth" href="/services">Services</Link>
                                <Link className="hover:text-primary smooth" href="/check-care-options">Check Care Options</Link>
                                <Link className="hover:text-primary smooth" href="/speak-with-coordinator">Speak with Coordinator</Link>
                                <Link className="hover:text-primary smooth" href="/book-an-appointment">Book an Appointment</Link>
                            </div>

                            {/* About */}
                            <div className="flex flex-col gap-3">
                                <span className="font-semibold text-white/60 text-sm uppercase tracking-wider">About</span>
                                <Link className="hover:text-primary smooth" href="/why-us">Why AmeriCare</Link>
                                <Link className="hover:text-primary smooth" href="/testimonials">Testimonials</Link>
                                <Link className="hover:text-primary smooth" href="/resources">Resources</Link>
                                <Link className="hover:text-primary smooth" href="/careers">Careers</Link>
                                <Link className="hover:text-primary smooth" href="/policy">Privacy Policy</Link>
                            </div>

                            {/* Programs */}
                            <div className="flex flex-col gap-3">
                                <span className="font-semibold text-white/60 text-sm uppercase tracking-wider">Programs</span>
                                <Link className="hover:text-primary smooth" href="/services#gapp">GAPP</Link>
                                <Link className="hover:text-primary smooth" href="/services#ccsp">CCSP</Link>
                                <Link className="hover:text-primary smooth" href="/services#source">SOURCE</Link>
                            </div>
                        </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="flex py-6 border-t border-t-white/25 text-base max-md:text-sm justify-center">
                        <p className="flex items-center justify-between w-full">
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
