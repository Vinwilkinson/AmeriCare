import Script from "next/script";

// Drop this into the <body> in app/layout.tsx.
// Set NEXT_PUBLIC_GA_MEASUREMENT_ID in your .env.local (and Vercel env vars) to
// your GA4 Measurement ID (e.g. G-XXXXXXXXXX).
export default function GoogleAnalytics() {
    const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

    if (!GA_ID || GA_ID === "G-XXXXXXXXXX") return null;

    return (
        <>
            {/* Load the gtag.js library */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            {/* Initialize the data layer */}
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
        </>
    );
}
