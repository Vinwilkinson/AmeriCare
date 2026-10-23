const pageIndexLinks = [
    { href: "#at-a-glance", label: "At a glance" },
    { href: "#our-work", label: "Our work" },
    { href: "#leadership", label: "Executive & clinical leadership" },
    { href: "#people", label: "Management & support" },
    { href: "#organization", label: "How our team connects" },
    { href: "#partners", label: "Professional partnerships" },
    { href: "#questions", label: "Common questions" },
];

export default function GlanceSection() {

    return (
        <>
            <section className="glance scroll-mt-32" id="at-a-glance">
                <div className="wrap">
                    <div className="glance-head">
                        <div>
                            <p className="eyebrow">AmeriCare at a glance</p>
                            <h2>Georgia roots.<br />A shared standard of care.</h2>
                        </div>
                        <p>The foundation behind our pediatric and adult home care services: an established company, professional leadership, and a clear commitment to families.</p>
                    </div>
                    <div className="fact-grid">
                        <article className="fact">
                            <strong>2021</strong>
                            <h3>Our founding year</h3>
                            <p>AmeriCare Services Inc. was founded by Calvin Wilkinson, MPH.</p>
                        </article>
                        <article className="fact">
                            <strong>ACHC</strong>
                            <h3>Accredited</h3>
                            <p>Accreditation alongside state licensing.</p>
                        </article>
                        <article className="fact">
                            <strong>Georgia</strong>
                            <h3>Based in Kennesaw</h3>
                            <p>A local starting point for home care conversations.</p>
                        </article>
                        <article className="fact">
                            <strong>Children<br />&amp; adults</strong>
                            <h3>Care across life stages</h3>
                            <p>Pediatric skilled nursing and adult personal support.</p>
                        </article>
                    </div>
                </div>
            </section>
            <nav className="page-index" aria-label="On this page">
                <div className="wrap">
                    <span>EXPLORE AMERICARE</span>
                    {pageIndexLinks.map(({ href, label }) => (
                        <a key={href} href={href}>{label}</a>
                    ))}
                </div>
            </nav>
        </>
    )
}
