import CustomBtn from "@/app/components/CustomBtn";

const partnerTypes = [
    {
        symbol: "01 /",
        title: "Case managers",
        body: "Discuss requested services, location, schedule, and the next step for coordination.",
    },
    {
        symbol: "02 /",
        title: "Discharge planners",
        body: "Explore potential home care support and ask about current service and staffing availability.",
    },
    {
        symbol: "03 /",
        title: "Community partners",
        body: "Connect around family education, outreach, and access to relevant home care information.",
    },
    {
        symbol: "04 /",
        title: "Strategic partners",
        body: "Contact leadership about organizational alignment, workforce relationships, and long-term opportunities.",
    },
];

export default function PartnersSection() {

    return (
        <section className="section partners scroll-mt-32" id="partners">
            <div className="wrap">
                <div className="partners-top">
                    <div>
                        <p className="eyebrow">Healthcare &amp; community relationships</p>
                        <h2>A clear connection<br />for professional partners.</h2>
                    </div>
                    <div>
                        <p>Case managers, discharge planners, community organizations, and workforce partners need a clear starting point. Connect with AmeriCare to discuss service fit, referral coordination, or a professional relationship.</p>
                        <p style={{ marginTop: "18px" }}>Our business development team can direct the conversation to the appropriate clinical, operational, or executive contact.</p>
                        <div className="actions">
                            <CustomBtn text="Discuss a Partnership" linkHref="mailto:support@americareinhome.com?subject=Professional%20Partnership%20Inquiry" inView noBorder />
                        </div>
                    </div>
                </div>
                <div className="partner-list">
                    {partnerTypes.map(({ symbol, title, body }) => (
                        <article className="partner-item" key={title}>
                            <span className="symbol">{symbol}</span>
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
