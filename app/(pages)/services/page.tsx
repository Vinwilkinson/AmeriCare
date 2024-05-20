import Image from "next/image";
import TopSection from "./components/TopSection";
import OurCaregivers from "./components/OurCaregivers";
import InfoTextSection from "./components/InfoTextSection";
import WhatWeCanDoForYouSection from "./components/WhatWeCanDoForYouSection";
import Link from "next/link";
import clsx from "clsx";

export default function ServicesPage() {
    return (
        <div>
            <Link href={"/"} className="smooth fixed top-5 left-9 z-[60]">
                <Image
                    src={"https://americare.sirv.com/icons/logo-alone-colour.svg"}
                    alt="AmeriCare Logo"
                    height={300}
                    width={300}
                    priority
                    className={clsx(
                        "w-16",
                    )}
                />
            </Link>

            <div className={clsx(
                "dark:text-white fixed top-5 sm:right-9 right-4 z-[60] shadow cursor-pointer px-8 py-4 border active:scale-90 smooth select-none active:opacity-50",
            )}>
                Contact us
            </div>
            <div className="relative z-10">
                <TopSection />
                <InfoTextSection />
                <WhatWeCanDoForYouSection />
                <OurCaregivers />
            </div>
        </div>
    )
}