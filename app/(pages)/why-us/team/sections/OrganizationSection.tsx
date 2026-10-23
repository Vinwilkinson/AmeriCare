import Link from "next/link";

const departments = [
    {
        title: "Nursing & clinical direction",
        body: "Nursing supervision brings a clinical perspective to care needs and helps direct nursing questions to the appropriate professional.",
    },
    {
        title: "Family communication & coordination",
        body: "Customer care helps families discuss services, understand the next step, and connect with the right person as questions arise.",
    },
    {
        title: "People & administration",
        body: "Human relations and administrative management support the workforce, internal communication, and organization behind daily operations.",
    },
    {
        title: "Finance & organizational planning",
        body: "Financial leadership connects business planning with decisions about resources and the company’s long-term direction.",
    },
    {
        title: "Community & referral relationships",
        body: "Business development and marketing connect AmeriCare with families, community organizations, and professionals exploring home care options.",
    },
];

export default function OrganizationSection() {

    return (
        <section className="section org-intro scroll-mt-32" id="organization">
            <div className="wrap org-layout">
                <div>
                    <p className="eyebrow">How our organization connects</p>
                    <h2>Different disciplines.<br />A shared commitment<br />to families.</h2>
                    <p className="org-note">Care at home depends on more than the visit itself. These responsibilities show how the people behind AmeriCare contribute to the work.</p>
                    <Link className="text-link" href="/check-care-options">Connect with our care coordination team ↗</Link>
                </div>
                <div className="department-list">
                    {departments.map(({ title, body }, index) => (
                        <article className="department" key={title}>
                            <span className="num">{String(index + 1).padStart(2, "0")} /</span>
                            <div>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
