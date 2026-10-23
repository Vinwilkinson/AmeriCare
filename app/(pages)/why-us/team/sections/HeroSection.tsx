import Image from "next/image";
import Link from "next/link";
import CustomBtn from "@/app/components/CustomBtn";
import { LeadershipTeamList } from "@/lib/MeetTeamList";

export default function HeroSection() {

    return (
        <section className="hero">
            <div className="wrap hero-grid">
                <div>
                    <nav className="breadcrumbs" aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/why-us">Why AmeriCare</Link>
                        <span>/</span>
                        <span aria-current="page">Leadership &amp; team</span>
                    </nav>
                    <p className="eyebrow">Our leadership &amp; home care team in Georgia</p>
                    <h1>Behind every visit,<br />a team with purpose.</h1>
                    <p className="lead">Meet the people behind AmeriCare’s pediatric and adult home care services.</p>
                    <p className="hero-sub">Executive leadership. Nursing supervision. Family coordination. The professionals connecting compassionate care with the organization it takes to support it.</p>
                    <div className="actions">
                        <CustomBtn text="Meet Our Leadership" linkHref="#leadership" noBorder inHero />
                        <CustomBtn text="Find Care for Your Family" linkHref="/check-care-options" noBorder />
                    </div>
                </div>
                <div className="hero-photo">
                    <div className="portrait-grid">
                        {LeadershipTeamList.map(({ anchor, name, photo }) => (
                            <Image
                                key={anchor}
                                src={photo}
                                alt={`${name} at AmeriCare`}
                                height={850}
                                width={700}
                                priority
                            />
                        ))}
                    </div>
                    <div className="team-caption">
                        <span>ONE ORGANIZATION. SHARED PURPOSE.</span>
                        <strong>Care starts with people.<br />Strength comes from the team.</strong>
                    </div>
                </div>
            </div>
            <div className="wrap hero-foot">
                <span><b>State licensed</b></span>
                <span><b>ACHC accredited</b></span>
                <span>Pediatric &amp; adult care</span>
                <span>Founded in 2021</span>
            </div>
        </section>
    )
}
