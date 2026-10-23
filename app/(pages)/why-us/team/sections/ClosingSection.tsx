import CustomBtn from "@/app/components/CustomBtn";

export default function ClosingSection() {

    return (
        <section className="closing">
            <div className="wrap">
                <p className="eyebrow">Connect with the people behind the care</p>
                <h2>Your family’s next step.<br />Our team’s shared purpose.</h2>
                <p>Tell us who needs care. We’ll help you start the right conversation.</p>
                <div className="actions">
                    <CustomBtn text="Check Care Options" linkHref="/check-care-options" noBorder inHero />
                    <CustomBtn text="Call (404) 494-2187" linkHref="tel:+14044942187" noBorder />
                </div>
            </div>
        </section>
    )
}
