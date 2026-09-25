"use client";

import NavigationComponent from "@/app/components/NavSection";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { FaCheck } from "react-icons/fa6";
import { Suspense } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ConfirmationContent() {
    const searchParams = useSearchParams();
    const submitted = searchParams.get("submitted");
    const router = useRouter();

    useEffect(() => {
        if (!submitted) {
            router.replace("/speak-with-coordinator");
        }
    }, [submitted, router]);

    if (!submitted) return null;

    return (
        <div className="relative z-10 pt-28 pb-20 sm:px-[8vw] px-6 dark:bg-darkBg bg-white">
            <div className="max-w-2xl mx-auto text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 text-primary text-3xl font-bold grid place-items-center mx-auto mb-6">
                    <FaCheck />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-4 dark:text-white text-themeBlack">Callback requested</h1>
                <p className="text-lg dark:text-white/70 text-themeBlack/70 mb-10">A care coordinator will contact you within one business day. We look forward to speaking with you.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="tel:4044942187" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 active:scale-95 transition-all">
                        Call (404) 494-2187
                    </Link>
                    <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl border-2 dark:border-white/10 border-primary/25 dark:text-white text-themeBlack hover:border-primary/50 transition-all">
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function CoordinatorConfirmationPage() {
    return (
        <div>
            <NavigationComponent />
            <Suspense>
                <ConfirmationContent />
            </Suspense>
        </div>
    );
}
