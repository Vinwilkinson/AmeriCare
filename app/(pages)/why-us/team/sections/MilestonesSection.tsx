const milestones = [
    {
        label: "2021 / FOUNDED",
        title: "A public health perspective.",
        body: "Calvin Wilkinson, MPH, founded AmeriCare Services Inc., bringing a background in biology and public health to the company’s direction.",
    },
    {
        label: "TODAY / OUR SERVICES",
        title: "Care across life stages.",
        body: "Pediatric skilled nursing and adult personal support, including home care services through GAPP, CCSP, and SOURCE.",
    },
    {
        label: "OUR DIRECTION / LONG TERM",
        title: "Strength through people.",
        body: "Our aim is to develop leadership, strengthen coordination, and build the organizational capacity to support families over time.",
    },
];

export default function MilestonesSection() {

    return (
        <section className="section" id="milestones">
            <div className="wrap">
                <p className="eyebrow">Our company story</p>
                <h2>A foundation to build on.</h2>
                <div className="milestone-grid">
                    {milestones.map(({ label, title, body }) => (
                        <article className="milestone" key={label}>
                            <span>{label}</span>
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
