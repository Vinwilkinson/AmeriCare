import Link from "next/link";

export default function CareSection() {

    return (
        <section className="section scroll-mt-32" id="care">
            <div className="wrap">
                <p className="eyebrow">Pediatric &amp; adult home care in Georgia</p>
                <h2>Two care pathways.<br />One place to start.</h2>
                <div className="services">
                    <article className="service">
                        <p className="label">FOR CHILDREN &amp; FAMILIES</p>
                        <h3>Pediatric skilled nursing &amp; GAPP.</h3>
                        <p>Explore home nursing services and learn about the Georgia Pediatric Program (GAPP). Our team can discuss your child’s care needs, service availability, and the steps involved in getting started.</p>
                        <Link className="text-link" href="/services/gapp">Explore pediatric home care &amp; GAPP ↗</Link>
                    </article>
                    <article className="service">
                        <p className="label">FOR ADULTS &amp; OLDER ADULTS</p>
                        <h3>Personal support, CCSP &amp; SOURCE.</h3>
                        <p>Explore assistance with daily activities and home care options for an adult or older loved one. Learn about CCSP and SOURCE, and connect with our team about available services.</p>
                        <Link className="text-link" href="/services/ccsp-source">Explore adult home care &amp; CCSP/SOURCE ↗</Link>
                    </article>
                </div>
                <p className="service-note">Services depend on individual needs, assessment, program eligibility, authorization, and staffing availability. The applicable program determines eligibility and approval.</p>
                <div className="local-band">
                    <div>
                        <h3>Georgia roots.<br />Local conversations.</h3>
                    </div>
                    <div>
                        <p>Our office is at 2950 Cherokee Street NW, Suite 626, Kennesaw, GA 30144. Share your county, ZIP code, and requested schedule so our team can discuss current availability for your location.</p>
                        <a className="text-link" href="tel:+14044942187">Speak with AmeriCare: (404) 494-2187 ↗</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
