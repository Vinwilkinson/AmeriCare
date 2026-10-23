import { LeadershipTeamList } from "@/lib/MeetTeamList";
import PersonCard from "./components/PersonCard";

export default function LeadershipSection() {

    return (
        <section className="section leadership scroll-mt-32" id="leadership">
            <div className="wrap">
                <div className="section-head">
                    <div>
                        <p className="eyebrow">Executive &amp; clinical leadership</p>
                        <h2>The people guiding<br />AmeriCare forward.</h2>
                    </div>
                    <p>Leadership spanning company strategy, nursing supervision, referral relationships, and financial planning. Distinct responsibilities, connected around care at home.</p>
                </div>
                <div className="leader-grid">
                    {LeadershipTeamList.map((person) => (
                        <PersonCard key={person.id} person={person} />
                    ))}
                </div>
            </div>
        </section>
    )
}
