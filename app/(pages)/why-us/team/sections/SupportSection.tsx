import { SupportTeamList } from "@/lib/MeetTeamList";
import PersonCard from "./components/PersonCard";

export default function SupportSection() {

    return (
        <section className="section scroll-mt-32" id="people">
            <div className="wrap">
                <div className="section-head">
                    <div>
                        <p className="eyebrow">Management &amp; organizational support</p>
                        <h2>Expertise across<br />the everyday work.</h2>
                    </div>
                    <p>Meet the professionals supporting family communication, people operations, administration, and community relationships across AmeriCare.</p>
                </div>
                <div className="team-grid">
                    {SupportTeamList.map((person) => (
                        <PersonCard key={person.id} person={person} />
                    ))}
                </div>
                <p className="muted-small">This page introduces AmeriCare’s leadership and support team. It is not a complete directory of nurses and direct care professionals.</p>
            </div>
        </section>
    )
}
