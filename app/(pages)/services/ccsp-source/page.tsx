import NavigationComponent from "@/app/components/NavSection";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";
import GuideHero from "../components/guide/GuideHero";
import GuideLayout from "../components/guide/GuideLayout";
import GuideSection from "../components/guide/GuideSection";
import GuideChecklist from "../components/guide/GuideChecklist";
import FaqList from "../components/guide/FaqList";
import StartCallout from "../components/guide/StartCallout";
import GuideContact from "../components/guide/GuideContact";
import GuideResources from "../components/guide/GuideResources";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "CCSP & SOURCE Home Care in Georgia | AmeriCare",
    description:
        "A family guide to Georgia Medicaid CCSP and SOURCE: how the programs differ, personal care services, eligibility, how to apply, costs, family caregiver support, and FAQs.",
};

const PHONE = "(404) 494-2187";
const SCREENING_PHONE = "1-866-552-4464";

const toc = [
    { id: "overview", label: "What are CCSP & SOURCE?" },
    { id: "comparison", label: "CCSP vs. SOURCE" },
    { id: "services", label: "Daily support" },
    { id: "program-services", label: "Other services" },
    { id: "eligibility", label: "Eligibility" },
    { id: "apply", label: "How to apply" },
    { id: "checklist", label: "What to have ready" },
    { id: "cost", label: "Costs & coverage" },
    { id: "family", label: "Family caregivers" },
    { id: "choosing", label: "Choosing a provider" },
    { id: "why-americare", label: "Why AmeriCare" },
    { id: "locations", label: "Locations" },
    { id: "faqs", label: "FAQs" },
];

const applySteps = [
    "Request screening. Explain the care situation and ask about EDWP, CCSP, or SOURCE.",
    "Gather requested information. The process may require medical, income, and asset documentation.",
    "Ask about timing. Waitlists may apply. Screening considers the urgency of unmet needs.",
    "Participate in the assessment. The program team evaluates care needs and develops an appropriate plan.",
    "Discuss provider arrangements. Once the relevant approvals and service arrangements are in place, ask AmeriCare about staffing for your area and schedule.",
];

const costQuestions = [
    "Which services are authorized?",
    "Is there a required contribution or patient liability?",
    "Are any requested services outside the approved plan?",
    "Who should we contact if coverage changes?",
];

const choosingQuestions = [
    "Do you serve our county and ZIP code?",
    "Can you staff the approved schedule?",
    "How do you match a caregiver with a client?",
    "Who supervises the care and answers questions?",
    "What happens if a caregiver is unavailable?",
    "How do you communicate changes to the family?",
    "How do you coordinate with the case manager?",
    "What needs to happen before the first visit?",
];

const faqs = [
    { q: "What does CCSP stand for?", a: "CCSP stands for Community Care Services Program." },
    { q: "What does SOURCE stand for?", a: "SOURCE stands for Service Options Using Resources in a Community Environment." },
    { q: "Are CCSP and SOURCE part of EDWP?", a: "Yes. Georgia Medicaid lists both within the Elderly and Disabled Waiver Program." },
    {
        q: "Do I have to be 65 to ask about these programs?",
        a: "No. Georgia’s guidance also includes younger people who meet applicable disability requirements. Ask the screening team about your circumstances.",
    },
    {
        q: "Does Medicaid automatically approve home care?",
        a: "No. The applicable assessment, eligibility, and service authorization steps still need to be completed.",
    },
    {
        q: "Can I apply if I do not currently have Medicaid?",
        a: "Ask the screening team about potential eligibility and the Medicaid application process. An existing Medicaid card is not the only reason to begin an inquiry.",
    },
    {
        q: "Is there a waiting list?",
        a: "A waitlist may apply. Ask the program team about your current status, unmet care needs, and what to do if the situation changes.",
    },
    {
        q: "How many hours of care can we receive?",
        a: "Ask your case manager about the services and hours authorized for the individual. Provider staffing availability must also be confirmed.",
    },
    {
        q: "Is home care free through CCSP or SOURCE?",
        a: "Ask about the individual’s coverage and any required contribution. Some CCSP participants contribute toward services, while others do not.",
    },
    {
        q: "Will Medicare pay for ongoing personal care?",
        a: "Do not assume Medicare and Medicaid waiver benefits are interchangeable. Ask your coverage representative which benefit applies to the specific service requested.",
    },
    {
        q: "Can someone with Alzheimer’s or dementia be considered?",
        a: "Georgia’s CCSP fact sheet recognizes Alzheimer’s and other dementias as physical conditions. Eligibility still depends on the applicable assessment and program requirements.",
    },
    {
        q: "Can I get paid to care for a family member?",
        a: "Ask your case manager about applicable caregiver options, eligibility, and participating providers. Family payment and AmeriCare’s participation should not be assumed.",
    },
    {
        q: "Can I request AmeriCare if I already have a case manager?",
        a: "Yes. Discuss provider arrangements with your case manager and contact AmeriCare to confirm service availability and the steps required.",
    },
    {
        q: "How do I get started?",
        a: `Call AmeriCare at ${PHONE} to discuss care. For official program screening, contact Georgia’s aging and disability network at ${SCREENING_PHONE}.`,
    },
];

export default function CcspSourcePage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <GuideHero
                    breadcrumb={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: "CCSP & SOURCE" }]}
                    eyebrow="For Adults · Georgia Medicaid"
                    titleLead="CCSP & SOURCE"
                    titleAccent="Home Care in Georgia"
                    introLead="Support for your loved one. Peace of mind for your family."
                    intro="Understand Georgia’s home care programs and explore daily support for older adults and people with disabilities."
                    primaryCta={{ text: "Check your loved one’s care options", href: "/check-care-options" }}
                    secondaryCta={{ text: "Call our team", href: "tel:+14044942187" }}
                    phone={PHONE}
                    trust={["State licensed", "ACHC accredited", "Family-focused care"]}
                    image={{
                        src: "/senior-family-care.jpg",
                        alt: "Senior man with family and an AmeriCare caregiver at home",
                        width: 1674,
                        height: 887,
                    }}
                    imageBadge={{ lead: "More support. More everyday moments.", accent: "Personal care and companionship with AmeriCare" }}
                    accent="secondary"
                    guideEyebrow="A clearer path to care"
                    guideTitle="Your guide to care at home"
                    guideIntro="Understand the programs, explore daily support, and learn where to start for adult home care in Georgia."
                    toc={toc}
                />

                <GuideLayout toc={toc} accent="secondary">
                    <GuideSection id="overview" label="01 / Family guide" title="What Are CCSP and SOURCE?" accent="secondary">
                        <p>
                            CCSP and SOURCE are Georgia Medicaid programs within the Elderly and Disabled Waiver Program (EDWP). They help
                            eligible older adults and people with disabilities receive support at home or in the community as an alternative
                            to nursing facility care.
                        </p>
                        <p>
                            For families, these names can raise a practical question: how do we get help with everyday care? AmeriCare can
                            discuss your home care needs and the steps to explore services.
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">What does CCSP stand for?</h3>
                            <p>
                                CCSP means Community Care Services Program. It provides coordinated community-based support for eligible
                                participants. A care coordinator helps develop a plan and arrange services based on assessed needs.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">What does SOURCE stand for?</h3>
                            <p>
                                SOURCE means Service Options Using Resources in a Community Environment. It connects primary medical care and
                                enhanced case management with approved long-term support services.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Where does AmeriCare fit?</h3>
                            <p>
                                AmeriCare provides personal care and companionship services. Our team can discuss available home care for your
                                location and schedule. Official program screening, eligibility decisions, and service authorization occur
                                through the applicable program process.
                            </p>
                        </div>
                    </GuideSection>

                    <GuideSection
                        id="comparison"
                        label="02 / Family guide"
                        title="CCSP vs. SOURCE: Understanding the Difference"
                        accent="secondary"
                    >
                        <p>
                            Both programs focus on helping eligible people receive care in the community. A key distinction is SOURCE’s
                            connection between primary care and enhanced case management.
                        </p>
                        <p>
                            The best starting point is to describe the person’s daily needs, existing coverage, and current care situation.
                            Ask the screening team which pathway fits those circumstances.
                        </p>
                        <p>
                            You do not need to choose a program on your own before asking for help. A conversation with Georgia’s aging and
                            disability network can clarify the appropriate next step.
                        </p>

                        <div className="table-scroll overflow-x-auto pt-2">
                            <table className="w-full min-w-[36rem] border-collapse text-left text-sm sm:text-[0.95rem]">
                                <caption className="sr-only">CCSP and SOURCE at a glance</caption>
                                <thead>
                                    <tr className="border-b border-secondary/30">
                                        <th scope="col" className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">At a glance</th>
                                        <th scope="col" className="py-3 pr-4 font-semibold text-[#1f7a86] dark:text-secondary">CCSP</th>
                                        <th scope="col" className="py-3 pr-4 font-semibold text-[#1f7a86] dark:text-secondary">SOURCE</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top text-gray-600 dark:text-gray-400">
                                    <tr className="border-b border-gray-100 dark:border-white/10">
                                        <th scope="row" className="py-3 pr-4 font-medium text-gray-800 dark:text-gray-200">Full name</th>
                                        <td className="py-3 pr-4">Community Care Services Program</td>
                                        <td className="py-3 pr-4">Service Options Using Resources in a Community Environment</td>
                                    </tr>
                                    <tr className="border-b border-gray-100 dark:border-white/10">
                                        <th scope="row" className="py-3 pr-4 font-medium text-gray-800 dark:text-gray-200">Core focus</th>
                                        <td className="py-3 pr-4">Coordinated community-based services</td>
                                        <td className="py-3 pr-4">Primary care linked with enhanced case management and long-term support</td>
                                    </tr>
                                    <tr>
                                        <th scope="row" className="py-3 pr-4 font-medium text-gray-800 dark:text-gray-200">Starting point</th>
                                        <td className="py-3 pr-4" colSpan={2}>
                                            Georgia’s aging and disability network:{" "}
                                            <a href="tel:+18665524464" className="font-semibold text-[#1f7a86] dark:text-secondary hover:underline">
                                                {SCREENING_PHONE}
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </GuideSection>

                    <GuideSection id="services" label="03 / Family guide" title="Personal Care and Daily Support With AmeriCare" accent="secondary">
                        <p>
                            Daily assistance can make familiar routines easier to manage. AmeriCare’s current services include personal care
                            and companionship. The support delivered depends on the care plan, approved services, and staffing.
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Bathing, dressing, and grooming</h3>
                            <p>
                                Tell us which personal care tasks need assistance, what the person can do independently, and which routines
                                matter to them. Care should respect their preferences and dignity.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Meal preparation</h3>
                            <p>
                                Share the person’s usual mealtimes, food preferences, and any instructions from their care team. Ask about the
                                meal preparation support included in their plan.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Mobility support</h3>
                            <p>
                                Explain the assistance needed to move around the home. Mention walkers, wheelchairs, transfer equipment, or
                                other supports during intake so the team can discuss the care requirements.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Companionship and engagement</h3>
                            <p>
                                AmeriCare’s companionship services include conversation, shared activities, and mealtime companionship. Ask
                                which activities fit the person’s preferences and how they relate to the approved care plan. Companionship
                                should not be assumed to be a separately covered waiver benefit.
                            </p>
                        </div>

                        <p className="pt-1">
                            <a
                                href="/check-care-options"
                                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                            >
                                Discuss home care options <span aria-hidden="true">↗</span>
                            </a>
                        </p>
                    </GuideSection>

                    <GuideSection
                        id="program-services"
                        label="04 / Family guide"
                        title="What Other Services May the Programs Include?"
                        accent="secondary"
                    >
                        <p>
                            Georgia lists personal care, adult day services, home-delivered meals, alternative living services, and caregiver
                            respite among CCSP/SOURCE program options. Case management helps coordinate approved support.
                        </p>
                        <p>
                            These are program-level options. They are not a list of every service AmeriCare provides. Ask the care
                            coordinator what is available and appropriate, and ask each provider which services it delivers.
                        </p>
                        <p>
                            When talking with your care coordinator, bring up the parts of the day that are hardest to manage. That can help
                            focus the conversation on practical needs rather than a list of program names.
                        </p>
                    </GuideSection>

                    <GuideSection
                        id="eligibility"
                        label="05 / Family guide"
                        title="Who May Qualify for CCSP or SOURCE in Georgia?"
                        accent="secondary"
                    >
                        <p>
                            Eligibility involves both care needs and Medicaid requirements. Georgia’s EDWP guidance describes nursing facility
                            level of care, Medicaid eligibility, a choice to receive community services, and participation in one waiver at a
                            time. Older adults and younger people who meet applicable disability requirements may be considered.
                        </p>
                        <p>
                            SOURCE requires full Medicaid eligibility and nursing home level of care. A comprehensive assessment helps
                            determine the support needed.
                        </p>
                        <p>
                            Age, a diagnosis, or a Medicaid card alone does not establish approval for these services. Explain the person’s
                            actual daily needs to the screening team and ask what assessments or documents are required.
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                What is “nursing facility level of care”?
                            </h3>
                            <p>
                                This refers to the assessed level of care required, not a requirement to move into a nursing home before asking
                                about services. The program reviews whether the person meets its care criteria.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">What if we are unsure?</h3>
                            <p>
                                You can contact AmeriCare to discuss home care questions. For official program screening and next steps,
                                contact Georgia’s aging and disability network.
                            </p>
                        </div>

                        <p className="pt-1">
                            <a
                                href="/speak-with-coordinator"
                                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                            >
                                Talk with AmeriCare <span aria-hidden="true">↗</span>
                            </a>
                        </p>
                    </GuideSection>

                    <GuideSection id="apply" label="06 / Family guide" title="How to Apply for CCSP/SOURCE Services" accent="secondary">
                        <p>
                            Start through Georgia’s aging and disability network. The statewide number is{" "}
                            <a href="tel:+18665524464" className="font-semibold text-[#1f7a86] dark:text-secondary hover:underline">
                                {SCREENING_PHONE}
                            </a>
                            .
                        </p>
                        <ol className="flex flex-col gap-3 list-decimal list-outside pl-5 marker:font-semibold marker:text-[#1f7a86] dark:marker:text-secondary">
                            {applySteps.map((step) => (
                                <li key={step}>{step}</li>
                            ))}
                        </ol>
                        <p>
                            If you already have a case manager, contact them about requesting AmeriCare for approved home care services. An
                            inquiry with AmeriCare does not replace enrollment or authorization.
                        </p>
                        <div className="flex flex-col gap-1 pt-1 text-sm">
                            <p>
                                <a
                                    href="/speak-with-coordinator"
                                    className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                                >
                                    Discuss the next step <span aria-hidden="true">↗</span>
                                </a>
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Official program screening: Georgia’s aging and disability network{" "}
                                <a href="tel:+18665524464" className="font-semibold text-[#1f7a86] dark:text-secondary hover:underline">
                                    {SCREENING_PHONE}
                                </a>{" "}
                                — for AmeriCare service inquiries, call {PHONE}.
                            </p>
                        </div>
                    </GuideSection>

                    <GuideSection id="checklist" label="07 / Family guide" title="What Should I Have Ready When I Call?" accent="secondary">
                        <p>A first conversation is easier when you can describe the situation clearly. Consider having:</p>
                        <GuideChecklist
                            accent="secondary"
                            items={[
                                "The person’s age, county, and ZIP code.",
                                "Medicaid or other insurance information.",
                                "The name of a current case manager, if applicable.",
                                "The daily tasks that need assistance.",
                                "The person’s current living arrangement.",
                                "A general description of medical conditions and mobility needs.",
                                "The preferred schedule and available family support.",
                                "Information about a planned discharge or a recent change in needs.",
                            ]}
                        />
                        <p>
                            You can begin with basic information. Ask how to provide medical or financial documents securely when they are
                            needed.
                        </p>
                    </GuideSection>

                    <GuideSection id="cost" label="08 / Family guide" title="How Much Do CCSP and SOURCE Services Cost?" accent="secondary">
                        <p>
                            These are Medicaid-funded programs, but coverage and any required contribution must be confirmed for the
                            individual. Georgia’s CCSP fact sheet explains that some eligible participants contribute toward service costs
                            while others do not.
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                            Before care begins, ask the care coordinator and provider:
                        </p>
                        <ul className="flex flex-col gap-2">
                            {costQuestions.map((question) => (
                                <li key={question} className="flex items-start gap-3">
                                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                    <span>{question}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Avoid assuming that every service is free or that all requested hours will be covered. Clear answers help
                            families plan.
                        </p>
                    </GuideSection>

                    <GuideSection id="family" label="09 / Family guide" title="Support for Family Caregivers" accent="secondary">
                        <p>
                            Caring for a parent, spouse, or adult loved one can affect work, rest, and family routines. Start by identifying
                            the tasks you handle now and where additional help would make the biggest difference.
                        </p>
                        <p>
                            Ask about support around bathing, meals, mobility, and other daily activities. Share the times when family help
                            is available and the times when it is limited.
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                Can a family member be paid as a caregiver?
                            </h3>
                            <p>
                                Georgia’s CCSP information describes Structured Family Caregiving as a possible option for qualifying
                                arrangements. It has its own requirements. Do not assume every relative or living arrangement qualifies, or
                                that AmeriCare offers that service. Ask the case manager about available options and participating providers.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Planning for gaps in care</h3>
                            <p>
                                Ask how schedule changes, missed visits, or changes in the person’s needs will be handled. Keep current contact
                                information for the agency and the case manager, and agree on how updates should be shared.
                            </p>
                        </div>
                    </GuideSection>

                    <GuideSection
                        id="choosing"
                        label="10 / Family guide"
                        title="Choosing a CCSP/SOURCE Home Care Provider"
                        accent="secondary"
                    >
                        <p>
                            The right provider conversation should address both the care needed and how services will work in your home.
                            Ask:
                        </p>
                        <ul className="flex flex-col gap-2">
                            {choosingQuestions.map((question) => (
                                <li key={question} className="flex items-start gap-3">
                                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                                    <span>{question}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            If you are considering a provider change, discuss it with the case manager before ending current arrangements.
                            Ask how to coordinate the transition and reduce gaps in care.
                        </p>
                    </GuideSection>

                    <GuideSection id="why-americare" label="11 / Family guide" title="Why Families Consider AmeriCare" accent="secondary">
                        <p>
                            AmeriCare provides personal care and companionship services for older adults and people with disabilities. Our
                            website identifies AmeriCare as state-licensed and ACHC accredited.
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                A conversation centered on your household
                            </h3>
                            <p>
                                Tell us about your loved one’s routines, preferences, and the support already in place. These details make the
                                care discussion more specific and useful.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Practical help with daily needs</h3>
                            <p>
                                Ask about assistance with bathing, dressing, grooming, meal preparation, and mobility. We can discuss how
                                available services relate to the approved plan.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Clear next steps</h3>
                            <p>
                                Whether you are exploring support for the first time or already receiving services, ask our team about current
                                availability, scheduling, and the steps needed to move forward.
                            </p>
                        </div>

                        <p className="pt-1">
                            <a
                                href="/speak-with-coordinator"
                                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                            >
                                Speak with a care coordinator <span aria-hidden="true">↗</span>
                            </a>
                        </p>
                    </GuideSection>

                    <GuideSection
                        id="locations"
                        label="12 / Family guide"
                        title="CCSP/SOURCE Home Care in Metro Atlanta and Nearby Communities"
                        accent="secondary"
                    >
                        <p>
                            AmeriCare’s website lists our Kennesaw office at 2950 Cherokee Street NW, Suite 626, Kennesaw, GA 30144.
                        </p>
                        <p>
                            Contact us with your county, ZIP code, and requested schedule to discuss current availability. Coverage and
                            staffing may differ by location and care requirements.
                        </p>
                        <p>
                            If you are a case manager or discharge planner, share the type of service requested, anticipated timing, and the
                            best contact for coordination. Our team can discuss whether the referral fits our current capacity.
                        </p>
                    </GuideSection>

                    <GuideSection
                        id="faqs"
                        label="13 / Your questions"
                        title="Frequently Asked Questions About CCSP & SOURCE"
                        accent="secondary"
                    >
                        <FaqList items={faqs} accent="secondary" />
                        <div className="pt-4">
                            <StartCallout
                                accent="secondary"
                                eyebrow="Let’s start here"
                                title="Looking for help at home?"
                                text="You don’t need to have every answer. Tell us about your family, and we’ll discuss the next step."
                                primaryCta={{ text: "Check care options", href: "/check-care-options" }}
                                secondaryCta={{ text: PHONE, href: "tel:+14044942187" }}
                                notes={[
                                    {
                                        label: "Helpful to have ready",
                                        text: "Your loved one’s county, coverage, daily care needs, and case manager information, if available.",
                                    },
                                    {
                                        label: "Already receiving care?",
                                        text: "Ask our team about provider transitions and continuity of care.",
                                    },
                                ]}
                            />
                        </div>
                    </GuideSection>
                </GuideLayout>

                <GuideContact
                    accent="secondary"
                    eyebrow="One conversation can help"
                    titleLead="Let’s discuss care"
                    titleAccent="for your loved one."
                    text="Share your questions and your loved one’s needs. We’ll help you understand the next step."
                    primaryCta={{ text: "Check your loved one’s care options", href: "/check-care-options" }}
                    secondaryCta={{ text: "Speak with a care coordinator", href: "/speak-with-coordinator" }}
                />

                <GuideResources
                    accent="secondary"
                    title="Official program information & resources"
                    links={[
                        { label: "Georgia DCH: CCSP overview", href: "https://medicaid.georgia.gov/media/3761/download" },
                        { label: "Georgia Medicaid: waiver information", href: "https://medicaid.georgia.gov/programs/all-programs/waiver-programs" },
                        { label: "Georgia DCH: SOURCE overview", href: "https://medicaid.georgia.gov/media/3766/download" },
                        { label: "How to apply for EDWP", href: "https://georgia.gov/apply-elderly-and-disabled-waiver-program" },
                    ]}
                />
            </div>
        </>
    );
}
