import Link from "next/link";
import CustomBtn from "@/app/components/CustomBtn";

export default function FaqSection() {

    return (
        <>
            <div className="wrap">
                <section className="faqs">
                    <div>
                        <div className="eyebrow">QUESTIONS FAMILIES ASK</div>
                        <h2>Start with clarity.</h2>
                    </div>
                    <div>
                        <details>
                            <summary>What does AmeriCare do?</summary>
                            <p>AmeriCare Services Inc. supports Georgia families exploring pediatric skilled nursing, personal support services, and companionship at home. Contact the team about individual needs and current service availability.</p>
                        </details>
                        <details>
                            <summary>Is AmeriCare licensed and accredited?</summary>
                            <p>AmeriCare identifies itself as a Georgia-licensed and ACHC-accredited provider. Ask our team for current licensing and accreditation information when choosing a provider.</p>
                        </details>
                        <details>
                            <summary>Does submitting an inquiry mean we qualify?</summary>
                            <p>No. An inquiry starts a conversation. Program eligibility, assessment, authorization, and service availability must be confirmed through the applicable process.</p>
                        </details>
                        <details>
                            <summary>How soon will someone respond?</summary>
                            <p>Our website inquiry response standard is within one business day. This is a response timeframe, not a promise that care can begin within one day.</p>
                        </details>
                        <details>
                            <summary>Can I speak with someone before filling out care forms?</summary>
                            <p>Yes. Call <a href="tel:+14044942187">(404) 494-2187</a> or <Link href="/speak-with-coordinator">request a callback</Link>. You can begin with questions and basic contact information.</p>
                        </details>
                        <details>
                            <summary>Where does AmeriCare provide care?</summary>
                            <p>AmeriCare is based in Georgia, with a Kennesaw office. Share the care location’s ZIP code so the team can confirm current service coverage and staffing for your area.</p>
                        </details>
                    </div>
                </section>
                <div className="final">
                    <div className="eyebrow">YOUR FAMILY’S NEXT STEP</div>
                    <h2>You don’t have to figure<br />it all out before you call.</h2>
                    <p>Tell us where you are starting. We’ll help you understand the next conversation to have.</p>
                    <div className="actions">
                        <CustomBtn text="Check Care Options" linkHref="/check-care-options" noBorder inHero />
                        <CustomBtn text="Call (404) 494-2187" linkHref="tel:+14044942187" noBorder />
                    </div>
                </div>
            </div>
        </>
    )
}
