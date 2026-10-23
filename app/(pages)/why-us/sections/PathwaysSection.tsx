import Link from "next/link";

export default function PathwaysSection() {

    return (
        <div className="wrap">
            <section>
                <div className="sectionhead">
                    <div>
                        <div className="eyebrow">CARE FOR DIFFERENT STAGES OF LIFE</div>
                        <h2>One mission.<br />Individual paths to care.</h2>
                    </div>
                    <p>Explore the support that may fit your family. Our team can help you understand where to begin.</p>
                </div>
                <div className="pathways">
                    <article className="path">
                        <div className="eyebrow">CHILDREN &amp; FAMILIES</div>
                        <h3>Pediatric skilled nursing at home.</h3>
                        <p>For families exploring nursing support for a child, learn about the Georgia Pediatric Program (GAPP) and discuss care needs, documentation, authorization, and local availability.</p>
                        <Link className="textlink" href="/services/gapp">Explore pediatric care &amp; GAPP ↗</Link>
                    </article>
                    <article className="path">
                        <div className="eyebrow">ADULTS &amp; OLDER ADULTS</div>
                        <h3>Support for everyday life at home.</h3>
                        <p>For adults who need help with daily activities, explore personal support, companionship, and Georgia’s CCSP and SOURCE programs. Ask about the requirements and support available.</p>
                        <Link className="textlink" href="/services/ccsp-source">Explore adult care, CCSP &amp; SOURCE ↗</Link>
                    </article>
                </div>
                <p className="note">Services depend on individual needs, assessment, program eligibility, authorization, and staffing availability. A care inquiry does not establish approval or a start date.</p>
            </section>
        </div>
    )
}
