const impactMetrics = [
    {
        heading: "Care hours delivered",
        body: "Add the verified total for a stated 12-month period.",
    },
    {
        heading: "Individuals served",
        body: "Add unduplicated clients served during the same period.",
    },
    {
        heading: "Counties served",
        body: "Add counties with delivered care during that period.",
    },
];

export default function ProofSection() {

    return (
        <section className="section proof-section scroll-mt-32" id="our-work">
            <div className="wrap">
                <p className="eyebrow">Our work &amp; our community</p>
                <h2>The people. The relationships.<br />The work that matters.</h2>
                <p className="proof-intro">A closer look at the relationships and family experiences behind care at home.</p>
                <div className="proof-grid">
                    <article className="partnership-feature">
                        <div className="proof-tag">PARTNERSHIP SPOTLIGHT · PREVIEW CONCEPT</div>
                        <h3>Grady Hospital</h3>
                        <p>A proposed feature on the Grady relationship you previously shared. The finished spotlight would explain the work, AmeriCare’s role, and why the relationship matters to families.</p>
                        <p className="proof-draft">Draft placement only. Confirm the relationship’s scope, current status, approved wording, and permission to identify the organization before public release. No endorsement is implied.</p>
                    </article>
                    <article className="family-feature">
                        <div>
                            <div className="proof-tag">FAMILY EXPERIENCE · STORY PLACEMENT</div>
                            <div className="quote-mark" aria-hidden="true">“</div>
                            <h3>A family’s experience,<br />in their own words.</h3>
                            <p>This space is reserved for an authentic, permissioned testimonial describing communication, support, or the experience of receiving care.</p>
                        </div>
                        <p className="proof-draft">No testimonial has been inserted. Publish only the approved words and attribution.</p>
                    </article>
                </div>
                <div className="impact-planning">
                    <div className="impact-heading">
                        <h3>Our impact, measured.</h3>
                        <span className="draft-badge">PREVIEW · VERIFIED TOTALS NEEDED</span>
                    </div>
                    <div className="impact-grid">
                        {impactMetrics.map(({ heading, body }) => (
                            <article className="impact-item" key={heading}>
                                <div className="metric-slot" aria-label="Total to be confirmed">—</div>
                                <h4>{heading}</h4>
                                <p>{body}</p>
                            </article>
                        ))}
                    </div>
                    <p className="proof-note">Preview note: these are proposed evidence placements. Replace draft text with verified information before adding this section to the public website.</p>
                </div>
            </div>
        </section>
    )
}
