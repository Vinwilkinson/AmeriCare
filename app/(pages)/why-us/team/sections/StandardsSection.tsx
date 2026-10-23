const priorities = [
    {
        label: "01 / PEOPLE",
        title: "Develop the team.",
        body: "Make people, role clarity, and communication central to the way the organization grows.",
    },
    {
        label: "02 / COORDINATION",
        title: "Connect the responsibilities.",
        body: "Keep clinical, administrative, and family perspectives in the conversation as care needs and circumstances change.",
    },
    {
        label: "03 / STEWARDSHIP",
        title: "Build for the long term.",
        body: "Connect growth decisions with the workforce, resources, and organizational capacity needed to support the work.",
    },
];

export default function StandardsSection() {

    return (
        <section className="section standards">
            <div className="wrap">
                <div className="section-head">
                    <div>
                        <p className="eyebrow">Our operating priorities</p>
                        <h2>A lasting organization.<br />A personal responsibility.</h2>
                    </div>
                    <p>Our focus is building an organization that can develop its people, clarify accountability, and support families over time.</p>
                </div>
                <div className="strategy-grid">
                    {priorities.map(({ label, title, body }) => (
                        <article key={label}>
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
