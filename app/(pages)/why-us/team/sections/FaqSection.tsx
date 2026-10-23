import Link from "next/link";
import CustomBtn from "@/app/components/CustomBtn";

export default function FaqSection() {

    return (
        <section className="section scroll-mt-32" id="questions">
            <div className="wrap faq-grid">
                <div>
                    <p className="eyebrow">Frequently asked questions</p>
                    <h2>Get to know<br />your home care team.</h2>
                    <p style={{ marginTop: "23px" }}>A clearer picture of the people behind AmeriCare and where to begin.</p>
                </div>
                <div>
                    <details>
                        <summary>Who leads AmeriCare Services Inc.?</summary>
                        <p>Calvin Wilkinson, MPH, is Founder and Chief Executive Officer. AmeriCare’s leadership also includes Nursing Supervisor Christine Regis, RN; Vice President of Business Development Chris Wilkinson; and Vice President of Finance Tyler Traylor.</p>
                    </details>
                    <details>
                        <summary>Who oversees nursing at AmeriCare?</summary>
                        <p>Christine Regis, RN, serves as Nursing Supervisor. Contact our care coordination team to direct a nursing question to the appropriate professional.</p>
                    </details>
                    <details>
                        <summary>What home care services does AmeriCare offer in Georgia?</summary>
                        <p>AmeriCare offers pediatric skilled nursing and adult personal support. Learn more about <Link href="/services/gapp">GAPP and pediatric home care</Link> or <Link href="/services/ccsp-source">CCSP/SOURCE and adult home care</Link>. Services depend on individual needs, approval, and availability.</p>
                    </details>
                    <details>
                        <summary>Is AmeriCare licensed and accredited?</summary>
                        <p>AmeriCare is state licensed and ACHC accredited. Contact our team if you need licensing or accreditation information for a family decision or professional referral.</p>
                    </details>
                    <details>
                        <summary>How can I find out whether AmeriCare serves my area?</summary>
                        <p>Call <a href="tel:+14044942187">(404) 494-2187</a> or <Link href="/check-care-options">check care options</Link>. Share your county, ZIP code, the type of care requested, and your preferred schedule. Availability depends on location, care needs, and staffing.</p>
                    </details>
                    <details>
                        <summary>How can a case manager or organization contact AmeriCare?</summary>
                        <p>Call our team or email <a href="mailto:support@americareinhome.com">support@americareinhome.com</a> with your organization, contact details, and a brief description of the inquiry. Ask for a secure method before providing patient records.</p>
                    </details>
                    <details>
                        <summary>Can nurses and care professionals apply to join AmeriCare?</summary>
                        <p>Yes. Visit <Link href="/careers">AmeriCare careers</Link> to explore opportunities and application information. Requirements vary by role.</p>
                    </details>
                </div>
            </div>
            <div className="wrap">
                <div className="careers">
                    <div>
                        <p className="eyebrow">Build your career with AmeriCare</p>
                        <h3>Your work matters here.</h3>
                        <p>Explore opportunities for nurses, personal care professionals, and the people supporting care behind the scenes.</p>
                    </div>
                    <CustomBtn text="Explore Careers" linkHref="/careers" noBorder customClass="mt-6 lg:mt-0" />
                </div>
            </div>
        </section>
    )
}
