import Image from "next/image";
import CustomBtn from "@/app/components/CustomBtn";

export default function HeroSection() {

    return (
        <div className="wrap">
            <div className="hero">
                <div>
                    <div className="eyebrow">WHY AMERICARE</div>
                    <h1>Care is personal.<br />So is the trust<br />behind it.</h1>
                    <p>Inviting someone into your home is a meaningful decision. You deserve to understand who is behind the care, what support may fit, and what comes next.</p>
                    <div className="actions">
                        <CustomBtn text="Speak With a Coordinator" linkHref="/speak-with-coordinator" noBorder inHero />
                        <CustomBtn text="Our Approach" linkHref="#approach" noBorder />
                    </div>
                </div>
                <div className="image">
                    <Image
                        src="/why/care.png"
                        alt="AmeriCare care professional providing support at home"
                        height={1346}
                        width={1896}
                        priority
                    />
                    <div className="caption">
                        <small>OUR PURPOSE</small>
                        More support at home.<br />
                        More clarity for your family.
                    </div>
                </div>
            </div>
            <div className="trust">
                <div>
                    <strong>Georgia licensed</strong>
                    <span>A local home care provider</span>
                </div>
                <div>
                    <strong>ACHC accredited</strong>
                    <span>Accreditation matters</span>
                </div>
                <div>
                    <strong>Pediatric &amp; adult care</strong>
                    <span>Different needs. Individual support.</span>
                </div>
                <div>
                    <strong>Real people to contact</strong>
                    <span><a href="tel:+14044942187">(404) 494-2187</a></span>
                </div>
            </div>
        </div>
    )
}
