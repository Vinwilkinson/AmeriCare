import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./stylesheets/globals.css";
import "./stylesheets/animations.css";
import clsx from "clsx";
import FooterSection from "./components/FooterSection";
import Chatbot from "./components/Chatbot";
import NextTopLoader from "nextjs-toploader";
import { generalMetadata } from "@/lib/MetaData";
import GoogleAnalytics from "./components/GoogleAnalytics";

const FontFamily = Raleway({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = { ...generalMetadata };

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    FontFamily.className,
                    "overflow-x-hidden sm:text-base text-sm dark:bg-darkBg bg-white",
                )}
            >
                <NextTopLoader color="#b3262e" showSpinner={false} />
                <GoogleAnalytics />
                {children}
                <Chatbot />
                <FooterSection />
            </body>
        </html>
    );
}
