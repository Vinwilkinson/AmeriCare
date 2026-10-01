import TeamMember from "./components/TeamMember";
import { MeetTeamList } from "@/lib/MeetTeamList";

export default function MeetTeamSection() {

    return (
        <div className="dark:bg-darkBg bg-white grid-bg dark:text-white text-black sm:py-24 py-12 2xl:px-[10vw] sm:px-[8vw] px-6 overflow-x-hidden">
            <div className="grid grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-6">
                {MeetTeamList.map(({ id, name, photo, role }, index) => (
                    <TeamMember
                        name={name}
                        key={id}
                        photo={photo}
                        role={role}
                        isOdd={(index + 1) % 2 === 0}
                    />
                ))}
            </div>
        </div>
    )
}
