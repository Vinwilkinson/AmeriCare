import Image from "next/image";
import { TeamMember } from "@/lib/MeetTeamList";

export default function PersonCard({ person }: { person: TeamMember }) {
    const { anchor, name, role, photo, bio, focus } = person;

    return (
        <article className="person" id={anchor}>
            <Image
                src={photo}
                alt={`${name}, ${role} at AmeriCare`}
                height={850}
                width={700}
                loading="lazy"
                decoding="async"
            />
            <div className="person-text">
                <p className="role">{role}</p>
                <h3>{name}</h3>
                <p>{bio}</p>
                <span className="focus">{focus}</span>
            </div>
        </article>
    )
}
