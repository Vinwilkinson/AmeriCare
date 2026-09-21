import NavigationComponent from "@/app/components/NavSection";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";
import Link from "next/link";
import { FaCheck } from "react-icons/fa6";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "Request Received | AmeriCare Atlanta",
};

export default function ConfirmationPage() {
    return (
        <div>
            <NavigationComponent />
            <div className="relative z-10 pt-28 pb-20 sm:px-[8vw] px-6 dark:bg-darkBg">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="w-20 h-20 rounded-full bg-primary/20 text-primary text-3xl font-bold grid place-items-center mx-auto mb-6">
                        <FaCheck />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">AmeriCare received your request</h1>
                    <p className="text-lg text-white/70 mb-10">We will respond within one business day. A care coordinator will review your information and reach out to discuss next steps.</p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="tel:4044942187" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 active:scale-95 transition-all">
                            Call (404) 494-2187
                        </Link>
                        <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 border-white/10 text-white hover:border-primary/50 transition-all">
                            Return Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
