import Image from "next/image";
import clsx from "clsx";
import Link from "next/link";
import { FaArrowRight, FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { fadeIn } from "@/lib/AnimationVariants";
import InViewWrapper from "./InViewWrapper";

type FooterLink = { text: string; href: string };

const findCareLinks: FooterLink[] = [
    { text: "Our Services", href: "/services" },
    { text: "Check Care Options", href: "/check-care-options" },
    { text: "Pediatric Care - GAPP", href: "/services/gapp" },
    { text: "Adult Care - CCSP / SOURCE", href: "/services/ccsp-source" },
];

const aboutLinks: FooterLink[] = [
    { text: "Our Story", href: "/why-us#mission" },
    { text: "Why AmeriCare", href: "/why-us" },
    { text: "Meet Our Team", href: "/why-us/team" },
    { text: "Testimonials", href: "/testimonials" },
];

const resourceLinks: FooterLink[] = [
    { text: "Care Resources", href: "/resources" },
    { text: "Careers", href: "/careers" },
    { text: "Contact Us", href: "/speak-with-coordinator" },
];

const socialLinks = [
    { href: "https://facebook.com/AmeriCareHealthServices", label: "Facebook", Icon: FaFacebookF },
    { href: "https://www.instagram.com/americarehealth", label: "Instagram", Icon: FaInstagram },
    { href: "https://linkedin.com/company/americare-health-inc", label: "LinkedIn", Icon: FaLinkedin },
];

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
    return (
        <div className="flex flex-col gap-3">
            <span className="font-semibold text-white/55 text-xs uppercase tracking-[0.18em]">{title}</span>
            {links.map((link) => (
                <Link key={link.text} className="hover:text-mint smooth w-fit" href={link.href}>
                    {link.text}
                </Link>
            ))}
        </div>
    );
}

export default function FooterSection() {

    return (
        <div className={clsx(
            "dark:bg-darkBg bg-white/90 text-white sm:text-base text-sm"
        )}>
            {/* Tagline strip */}
            <div className="bg-cream text-ink text-center py-4 px-6 sm:text-base text-sm">
                Compassionate care. Stronger families.
            </div>

            <InViewWrapper animation={fadeIn} className="pt-10 pb-6 sm:px-[5vw] px-4 bg-forest">
                <>
                    {/* Top row: Logo + CTA */}
                    <div className="border-b border-white/20 pb-6 flex flex-wrap justify-between gap-4 items-center">
                        <Image
                            src={"https://americare.sirv.com/icons/logo-png.png"}
                            alt="AmeriCare Logo"
                            height={300}
                            width={300}
                            priority
                            className="w-40 smooth"
                        />
                        <Link
                            href="/speak-with-coordinator"
                            className="group flex items-center gap-2 bg-mint text-forest font-semibold rounded-full sm:px-6 px-5 sm:py-3 py-2.5 hover:bg-white smooth w-fit"
                        >
                            Speak With a Coordinator
                            <FaArrowRight className="smooth group-hover:translate-x-1" />
                        </Link>
                    </div>

                    {/* Columns */}
                    <div className="py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Contact */}
                        <div className="flex flex-col gap-4">
                            <span className="font-semibold text-white/55 text-xs uppercase tracking-[0.18em]">Contact</span>
                            <div className="flex flex-col gap-3">
                                <Link className="flex gap-3 items-center hover:text-mint smooth" href={"tel:4044942187"}>
                                    <FaPhone className="text-base shrink-0" />
                                    <span>(404) 494-2187</span>
                                </Link>
                                <Link className="flex gap-3 items-center hover:text-mint smooth break-all" href={"mailto:support@americareinhome.com"}>
                                    <FaEnvelope className="text-base shrink-0" />
                                    <span>support@americareinhome.com</span>
                                </Link>
                                <span className="flex gap-3 items-start leading-relaxed">
                                    <FaMapMarkerAlt className="text-base shrink-0 mt-1" />
                                    <span>2950 Cherokee St, NW, Suite 626, Kennesaw, GA 30144</span>
                                </span>
                            </div>
                            <div className="flex gap-4 mt-1">
                                {socialLinks.map(({ href, label, Icon }) => (
                                    <Link
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        aria-label={label}
                                        className="hover:text-mint smooth"
                                    >
                                        <Icon className="text-lg" />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <LinkColumn title="Find Care" links={findCareLinks} />
                        <LinkColumn title="About AmeriCare" links={aboutLinks} />
                        <LinkColumn title="Resources" links={resourceLinks} />
                    </div>

                    {/* Bottom bar */}
                    <div className="flex py-5 border-t border-white/20 text-xs max-md:text-xs justify-center text-white/70">
                        <p className="flex items-center justify-between w-full flex-wrap gap-2">
                            <span>&copy; {new Date().getFullYear()} AmeriCare Services Inc. All rights reserved.</span>
                            <Link className="hover:text-mint smooth" href={"/policy"}>Privacy Policy</Link>
                        </p>
                    </div>
                </>
            </InViewWrapper>
        </div>
    )
}
