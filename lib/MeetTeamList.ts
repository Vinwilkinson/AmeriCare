export type TeamMemberGroup = "leadership" | "support";

export type TeamMember = {
    id: string;
    /** Design anchor, e.g. person-0 */
    anchor: string;
    name: string;
    role: string;
    photo: string;
    bio: string;
    focus: string;
    group: TeamMemberGroup;
}

export const MeetTeamList: TeamMember[] = [
    {
        name: "Calvin Wilkinson, MPH",
        role: "Founder & Chief Executive Officer",
        photo: "https://americare.sirv.com/team/Calvin%20Headshot_2.jpg",
        id: "c15fdb72-c118-5d87-8d81-ecddb582ae51",
        anchor: "person-0",
        bio: "Calvin founded AmeriCare in 2021 and leads the company’s direction. His background in biology and public health informs a focus on access to care, organizational development, and sustainable growth. He holds a B.S. in Biology from William & Mary and an MPH from Mercer University.",
        focus: "Strategy & organizational development",
        group: "leadership",
    },
    {
        name: "Christine Regis, RN",
        role: "Nursing Supervisor",
        photo: "https://americare.sirv.com/team/00011_Christine%20Calvin'smom47.jpg",
        id: "39a93612-7b83-5d1b-9d5c-095e297a839a",
        anchor: "person-1",
        bio: "Christine leads AmeriCare’s nursing supervision function. Her work connects the needs of people receiving care at home with nursing guidance and communication across the organization. She brings the clinical perspective to a leadership team spanning care, operations, and business development.",
        focus: "Nursing oversight & clinical coordination",
        group: "leadership",
    },
    {
        name: "Chris Wilkinson",
        role: "Vice President of Business Development",
        photo: "https://americare.sirv.com/team/00002_Chris%20Wilkinson%20(Calvin%20s%20brother)%20_28%20copy.jpg",
        id: "29169592-bd7d-5275-abaf-12c0046f620c",
        anchor: "person-2",
        bio: "Chris leads business development and relationships with referral sources and community organizations. His focus is connecting AmeriCare’s home care services with the families and professionals seeking support, while developing relationships that support the company’s continued growth.",
        focus: "Referral relationships & community engagement",
        group: "leadership",
    },
    {
        name: "Tyler Traylor",
        role: "Vice President of Finance",
        photo: "https://americare.sirv.com/team/Tyler-Traylor%20.png",
        id: "31295d8a-337c-582a-bdd5-2622c682e1b0",
        anchor: "person-3",
        bio: "Tyler leads the finance function supporting AmeriCare’s operations and long-term planning. His role connects financial information, resource decisions, and business priorities so the organization can plan for the people and infrastructure behind care delivery.",
        focus: "Financial planning & resource stewardship",
        group: "leadership",
    },
    {
        name: "Brittany Sanders",
        role: "Administrative Manager",
        photo: "https://americare.sirv.com/team/5b99b7b7-e4f5-4921-9deb-a2594aee8dd3.JPG",
        id: "450f70e5-1b84-4923-bac7-53e8539bea72",
        anchor: "person-6",
        bio: "Brittany manages administrative coordination across daily operations. Her work connects internal information, organization, and follow-through so the people supporting families can work with clearer responsibilities and next steps.",
        focus: "Administration & operational coordination",
        group: "support",
    },
    {
        name: "Yveth San Luis",
        role: "Human Relations Manager",
        photo: "https://americare.sirv.com/team/PHOTO-2025-12-17-17-02-13.jpg",
        id: "bcc60f2f-f027-5da4-9632-f7f64c69f5f1",
        anchor: "person-5",
        bio: "Yveth manages human relations and supports the team member experience. Her role brings attention to workforce coordination, employee communication, and the people processes that support a home care organization.",
        focus: "Workforce support & people operations",
        group: "support",
    },
    {
        name: "Karen June Cioco",
        role: "Customer Care Manager",
        photo: "https://americare.sirv.com/team/PHOTO-2025-12-17-15-59-48.jpg",
        id: "352e9f3f-3eee-40a3-a92e-336eaacca220",
        anchor: "person-8",
        bio: "Karen manages customer care and helps families navigate their next conversation with AmeriCare. Her role connects service questions, family communication, and coordination with the people who can address the inquiry.",
        focus: "Family communication & inquiry coordination",
        group: "support",
    },
    {
        name: "Paul Valenzuela",
        role: "Marketing Manager",
        photo: "https://americare.sirv.com/team/PHOTO-2025-12-18-09-04-17.jpg",
        id: "31e929ed-e61d-4657-9744-0c830c17b1e8",
        anchor: "person-4",
        bio: "Paul manages service communication and brand awareness. He helps families, professionals, and prospective team members understand AmeriCare’s pediatric and adult home care services and find the appropriate next step.",
        focus: "Service education & communications",
        group: "support",
    },
    {
        name: "Jorge Ramirez",
        role: "Business Development Specialist",
        photo: "https://americare.sirv.com/team/jorge_rameriz_new.jpg",
        id: "e4bd2fb4-de9d-49f5-8e71-f187c7acf183",
        anchor: "person-7",
        bio: "Jorge builds connections with prospective referral and community partners. He introduces AmeriCare’s services, listens to local needs, and helps connect organizations with the appropriate team for a service conversation.",
        focus: "Community outreach & referral awareness",
        group: "support",
    },
    {
        name: "Jesus Marino",
        role: "Sales Manager",
        photo: "https://americare.sirv.com/team/businessperson-male-hispanic-lat.jpg",
        id: "5eacf821-f3a6-4015-a88b-c1197bdf959a",
        anchor: "person-9",
        bio: "Jesus manages conversations with prospective clients and partners. His focus is helping people understand available services, clarifying the purpose of an inquiry, and connecting it with an appropriate next step.",
        focus: "Service inquiries & relationship coordination",
        group: "support",
    },
]

export const LeadershipTeamList = MeetTeamList.filter(({ group }) => group === "leadership");
export const SupportTeamList = MeetTeamList.filter(({ group }) => group === "support");
