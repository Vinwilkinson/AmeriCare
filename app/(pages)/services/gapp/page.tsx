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
    title: "Georgia Pediatric Program (GAPP) | AmeriCare",
    description:
        "A family guide to Georgia's Pediatric Program (GAPP): what it covers, who may qualify, how to apply, costs, FAQs, and how AmeriCare supports pediatric home care.",
};

const PHONE = "(404) 494-2187";

const toc = [
    { id: "overview", label: "What is GAPP?" },
    { id: "services", label: "Services" },
    { id: "eligibility", label: "Eligibility" },
    { id: "apply", label: "How to apply" },
    { id: "checklist", label: "What to have ready" },
    { id: "cost", label: "Costs & coverage" },
    { id: "medicaid", label: "Without Medicaid" },
    { id: "discharge", label: "After a hospital stay" },
    { id: "choosing", label: "Choosing a provider" },
    { id: "why-americare", label: "Why AmeriCare" },
    { id: "locations", label: "Locations" },
    { id: "faqs", label: "FAQs" },
];

const applySteps = [
    {
        lead: "Tell us about your child.",
        text: "Share your county, the best way to reach you, and the type of help you are looking for.",
    },
    {
        lead: "Discuss the current care situation.",
        text: "Explain whether your child is already home, preparing for discharge, or receiving services from another agency.",
    },
    {
        lead: "Ask what documentation is needed.",
        text: "Our team can explain the information needed to move the inquiry forward.",
    },
    {
        lead: "Understand the review stage.",
        text: "A physician’s treatment plan and supporting records are part of the authorization process. Approval is determined through the applicable Medicaid review process.",
    },
    {
        lead: "Discuss scheduling.",
        text: "Ask about staffing, available shifts, and the steps needed before care can begin.",
    },
];

const dischargeQuestions = [
    "What tasks will need to be performed at home?",
    "Which tasks require a nurse?",
    "What training do family caregivers need before discharge?",
    "Who will provide equipment and supplies?",
    "What needs to be completed before home care can start?",
    "Who should the family contact if the discharge date changes?",
];

const choosingQuestions = [
    "Can your team meet my child’s specific clinical needs?",
    "Is staffing available for the schedule we need?",
    "How are nurses or caregivers introduced to a new family?",
    "Who supervises care and answers clinical questions?",
    "How do you handle a missed shift or a schedule change?",
    "How will our family receive updates?",
    "How do you coordinate with the child’s medical team?",
    "What should we expect before the first visit?",
];

const faqs = [
    {
        q: "What does GAPP stand for?",
        a: "GAPP means Georgia Pediatric Program.",
    },
    {
        q: "Is GAPP the same as Katie Beckett?",
        a: "They serve different purposes. Katie Beckett is a pathway to Medicaid eligibility for certain children with disabilities; GAPP concerns approved pediatric care services.",
    },
    {
        q: "Does a Medicaid card guarantee GAPP services?",
        a: "No. Requested GAPP services need their own approval.",
    },
    {
        q: "How many hours of care will my child receive?",
        a: "Ask the reviewing team and provider about the authorized hours for your child. The physician’s treatment plan supports the request, and the applicable authorization determines approved services.",
    },
    {
        q: "Can I contact AmeriCare before I understand the application?",
        a: "Yes. Start with a care-options inquiry and tell us what you need help understanding.",
    },
    {
        q: "What if my child has autism or a developmental disability?",
        a: "Tell the intake team about the child’s daily care needs and medical recommendations. Ask which program or service best fits those needs rather than assuming a diagnosis automatically qualifies the child for a particular program.",
    },
    {
        q: "Can GAPP pay me to care for my child?",
        a: "Ask about the current rules for the specific service and caregiver arrangement. Do not assume parent payment is available. AmeriCare can discuss the care requested and identify questions that need program clarification.",
    },
    {
        q: "Can I change GAPP providers?",
        a: "Georgia’s provider training describes families’ freedom to choose or transfer agencies. Contact the prospective agency before changing arrangements so you can discuss continuity and the required steps.",
    },
    {
        q: "How quickly can care begin?",
        a: "Ask about documentation, authorization, and staffing for the requested schedule. An initial consultation does not establish a start date.",
    },
    {
        q: "Can my child receive therapy through this page’s GAPP services?",
        a: "Ask separately about physical, occupational, speech, or behavioral therapy benefits and providers. Do not assume those services are included in AmeriCare’s GAPP nursing or personal care offering.",
    },
    {
        q: "What should I do as my child approaches adulthood?",
        a: "Begin discussing future care and coverage with the medical team and care coordinator early. Ask which adult services may fit the child’s ongoing needs and what applications or assessments will be required.",
    },
    {
        q: "How do I get started with AmeriCare?",
        a: `Call ${PHONE} or check your child’s care options to begin an inquiry.`,
    },
];

export default function GappPage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <GuideHero
                    breadcrumb={[{ href: "/", label: "Home" }, { href: "/services", label: "Services" }, { label: "Georgia Pediatric Program" }]}
                    eyebrow="For Kids · Georgia Medicaid"
                    titleLead="Georgia Pediatric"
                    titleAccent="Program (GAPP)"
                    introLead="Support for your child. Guidance for your family."
                    intro="Explore pediatric care at home, understand your options, and take the next step with AmeriCare."
                    primaryCta={{ text: "Check your child’s care options", href: "/check-care-options" }}
                    secondaryCta={{ text: "Call our team", href: "tel:+14044942187" }}
                    phone={PHONE}
                    trust={["State licensed", "ACHC accredited", "Family-focused care"]}
                    image={{
                        src: "/gapp-children.jpg",
                        alt: "Schoolchildren enjoying ice cream together",
                        width: 3174,
                        height: 4761,
                    }}
                    imageBadge={{ lead: "More support. More everyday moments.", accent: "Pediatric home care with AmeriCare" }}
                    accent="primary"
                    guideEyebrow="A clearer path to care"
                    guideTitle="Your family’s guide to GAPP"
                    guideIntro="From your first question to your next step, find practical information about pediatric home care in Georgia."
                    toc={toc}
                />

                <GuideLayout toc={toc} accent="primary">
                    <GuideSection id="overview" label="01 / Parent guide" title="What is GAPP?" accent="primary">
                        <p>
                            GAPP stands for Georgia Pediatric Program. Administered by the Georgia Department of Community Health, it serves
                            eligible, medically fragile children under 21 who need medically necessary skilled nursing and/or personal care
                            support. Physician orders and prior authorization are required.
                        </p>
                        <p>
                            For families, the starting point is a conversation about the child’s care needs. Tell us what your child needs
                            help with, what your medical team has recommended, and what questions you have about receiving care at home.
                        </p>
                    </GuideSection>

                    <GuideSection
                        id="services"
                        label="02 / Parent guide"
                        title="What services does the Georgia Pediatric Program cover?"
                        accent="primary"
                    >
                        <p>
                            GAPP includes nursing and personal care support. Nursing addresses clinical care needs; personal care helps with
                            daily living activities. The services provided depend on the child’s approved care plan.
                        </p>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Pediatric skilled nursing</h3>
                            <p>
                                AmeriCare’s pediatric nursing services include medication administration, health monitoring, and coordination
                                with families. When you contact us, describe the medical tasks your child needs throughout the day and the
                                support your physician has recommended.
                            </p>
                            <p>
                                If your child uses a feeding tube, tracheostomy, ventilator, oxygen, or other medical equipment, mention this
                                during intake. Ask our clinical team which services we can staff for your child’s specific needs. Equipment or
                                a diagnosis alone should not be treated as a promise of coverage.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Personal care support</h3>
                            <p>
                                Daily routines can take extra time and assistance when a child has complex needs. AmeriCare offers help with
                                bathing, dressing, meal preparation, and mobility. Our team can discuss which daily tasks need support and how
                                those needs fit within the child’s care plan.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 pt-2">
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                                Helping families understand the care plan
                            </h3>
                            <p>
                                Parents know details about their child that a chart may not capture: familiar routines, communication cues,
                                comfortable positions, and what a typical day looks like. Share those details with the care team. They help
                                make conversations about home care more practical and specific.
                            </p>
                        </div>
                    </GuideSection>

                    <GuideSection id="eligibility" label="03 / Parent guide" title="Who may qualify for GAPP in Georgia?" accent="primary">
                        <p>
                            The program is intended for medically fragile children under 21 with medically necessary nursing or personal care
                            needs. Medicaid eligibility must be established, and requested services require approval; having Medicaid alone
                            does not establish GAPP approval.
                        </p>
                        <p>
                            If you are unsure where to begin, contact AmeriCare with your child’s age, county, coverage information, and a
                            brief description of the care needed. A care-options conversation helps identify the next step; it is not an
                            eligibility decision.
                        </p>
                    </GuideSection>

                    <GuideSection id="apply" label="04 / Parent guide" title="How to apply for GAPP services" accent="primary">
                        <p>
                            Georgia Medicaid directs families to contact a participating GAPP provider agency. With AmeriCare, start by
                            requesting a conversation about your child’s needs.
                        </p>
                        <ol className="flex flex-col gap-3 list-decimal list-outside pl-5 marker:font-semibold marker:text-[#3d7a26] dark:marker:text-primary">
                            {applySteps.map((step) => (
                                <li key={step.lead}>
                                    <span className="font-semibold text-gray-900 dark:text-white">{step.lead}</span> {step.text}
                                </li>
                            ))}
                        </ol>
                        <p className="italic">You do not need to know every program term before reaching out. Start with the questions you have today.</p>
                        <p className="pt-1">
                            <a
                                href="/check-care-options"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                            >
                                Check your child’s care options <span aria-hidden="true">↗</span>
                            </a>
                        </p>
                    </GuideSection>

                    <GuideSection id="checklist" label="05 / Parent guide" title="What should I have ready when I call?" accent="primary">
                        <p>To make the first conversation useful, consider having:</p>
                        <GuideChecklist
                            accent="primary"
                            items={[
                                "Your child’s age and the county where care is needed.",
                                "Insurance or Medicaid coverage information.",
                                "The name of the child’s pediatrician or treating specialist.",
                                "A short description of daily medical and personal care needs.",
                                "Information about a planned hospital discharge, if relevant.",
                                "Your preferred schedule and current support arrangements.",
                                "Questions about existing services or changing providers.",
                            ]}
                        />
                        <p>
                            Ask the intake team how to send medical records securely. A first inquiry can begin with basic contact
                            information and a general description of your needs.
                        </p>
                    </GuideSection>

                    <GuideSection id="cost" label="06 / Parent guide" title="How much does GAPP care cost?" accent="primary">
                        <p>
                            GAPP is a Medicaid-funded program for eligible children with approved services. Before scheduling, ask our intake
                            team to verify coverage for the requested care and explain whether any proposed service falls outside that
                            coverage.
                        </p>
                        <p>
                            Families should be able to understand what is covered before making care decisions. Ask:{" "}
                            <span className="italic text-gray-800 dark:text-gray-200">
                                “Is this service authorized for my child, and would our family owe anything for it?”
                            </span>
                        </p>
                    </GuideSection>

                    <GuideSection
                        id="medicaid"
                        label="07 / Parent guide"
                        title="What if my child does not currently have Medicaid?"
                        accent="primary"
                    >
                        <p>
                            You can begin by learning about Georgia Medicaid eligibility and application options. Georgia Medicaid accepts
                            applications through Georgia Gateway and local DFCS offices.
                        </p>
                        <p>
                            Some families may also want to explore TEFRA/Katie Beckett. This Medicaid eligibility pathway can disregard
                            family income for certain children with disabilities who meet its requirements. It has its own review process
                            and is distinct from requesting GAPP services.
                        </p>
                        <p>
                            AmeriCare can discuss home care questions while you explore coverage. Medicaid and GAPP approvals are separate
                            steps, and neither should be assumed from an initial inquiry.
                        </p>
                    </GuideSection>

                    <GuideSection id="discharge" label="08 / Parent guide" title="Pediatric home care after a hospital stay" accent="primary">
                        <p>
                            Preparing to bring a child home can involve medication instructions, equipment, appointments, and new daily
                            routines. Start asking about home care while discharge planning is underway.
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                            Useful questions for your hospital team and prospective home care provider include:
                        </p>
                        <ul className="flex flex-col gap-2">
                            {dischargeQuestions.map((question) => (
                                <li key={question} className="flex items-start gap-3">
                                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>{question}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Tell AmeriCare about the expected discharge date and the support your medical team recommends. This gives the
                            intake conversation a clear starting point.
                        </p>
                    </GuideSection>

                    <GuideSection id="choosing" label="09 / Parent guide" title="Choosing a GAPP provider in Georgia" accent="primary">
                        <p>
                            A provider should help you understand both the care being discussed and the practical arrangements around it.
                            When comparing agencies, ask:
                        </p>
                        <ul className="flex flex-col gap-2">
                            {choosingQuestions.map((question) => (
                                <li key={question} className="flex items-start gap-3">
                                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                    <span>{question}</span>
                                </li>
                            ))}
                        </ul>
                        <p>
                            Keep a written list of your priorities. The right conversation should address the child’s needs and the realities
                            of your household.
                        </p>
                    </GuideSection>

                    <GuideSection id="why-americare" label="10 / Parent guide" title="Why families consider AmeriCare" accent="primary">
                        <p>
                            AmeriCare provides pediatric nursing and personal care services and identifies itself as state-licensed and ACHC
                            accredited. Our approach begins with understanding the family’s situation and discussing the next steps for care
                            at home.
                        </p>
                        <p>
                            When you contact us, we want to understand your child’s needs, the support already in place, and the questions
                            that matter most to you. Ask about care coordination, clinical oversight, and current staffing availability for
                            your location.
                        </p>
                        <p className="pt-1">
                            <a
                                href="/check-care-options"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                            >
                                Check your child’s care options <span aria-hidden="true">↗</span>
                            </a>
                        </p>
                    </GuideSection>

                    <GuideSection
                        id="locations"
                        label="11 / Parent guide"
                        title="GAPP care in Metro Atlanta and surrounding Georgia communities"
                        accent="primary"
                    >
                        <p>
                            AmeriCare’s website lists a Kennesaw office at 2950 Cherokee Street NW, Suite 626, Kennesaw, GA 30144. Contact us
                            with your county and ZIP code to discuss current pediatric home care availability.
                        </p>
                        <p>
                            For families searching for GAPP providers in Georgia, confirming local coverage and staffing is an important
                            early step. Availability can differ by location, schedule, and the level of care needed.
                        </p>
                    </GuideSection>

                    <GuideSection id="faqs" label="12 / Your questions" title="Frequently asked questions about GAPP" accent="primary">
                        <FaqList items={faqs} accent="primary" />
                        <div className="pt-4">
                            <StartCallout
                                accent="primary"
                                eyebrow="Let’s start here"
                                title="Have questions about your child’s care?"
                                text="You don’t need to have every answer. Tell us about your family, and we’ll discuss the next step."
                                primaryCta={{ text: "Check care options", href: "/check-care-options" }}
                                secondaryCta={{ text: PHONE, href: "tel:+14044942187" }}
                                notes={[
                                    {
                                        label: "Helpful to have ready",
                                        text: "Your child’s age, county, coverage information, and a brief description of the support needed.",
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
                    accent="primary"
                    eyebrow="One conversation can help"
                    titleLead="Let’s discuss care"
                    titleAccent="for your child."
                    text="Share your questions and your child’s needs. We’ll help you understand the next step."
                    primaryCta={{ text: "Check your child’s care options", href: "/check-care-options" }}
                    secondaryCta={{ text: "Speak with a care coordinator", href: "/speak-with-coordinator" }}
                />

                <GuideResources
                    title="Official program information & resources"
                    links={[
                        { label: "Georgia DCH: GAPP overview", href: "https://medicaid.georgia.gov/media/6136/download" },
                        { label: "Georgia Medicaid: GAPP information", href: "https://medicaid.georgia.gov/programs/all-programs/waiver-programs" },
                        { label: "TEFRA / Katie Beckett", href: "https://medicaid.georgia.gov/programs/all-programs/tefrakatie-beckett" },
                        { label: "Georgia Gateway", href: "https://gateway.ga.gov/" },
                    ]}
                />
            </div>
        </>
    );
}
