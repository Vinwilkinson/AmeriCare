import Link from "next/link";
import GuideLayout from "../../services/components/guide/GuideLayout";
import GuideSection from "../../services/components/guide/GuideSection";
import GuideChecklist from "../../services/components/guide/GuideChecklist";
import FaqList from "../../services/components/guide/FaqList";

const toc = [
    { id: "why-choose-a-career-in-home-care", label: "Why home care" },
    { id: "explore-our-care-roles", label: "Care roles" },
    { id: "documents-to-prepare-for-hiring-and-onboarding", label: "Hiring checklist" },
    { id: "what-happens-after-you-apply", label: "Hiring process" },
    { id: "new-to-healthcare-explore-training-options", label: "Local training" },
    { id: "frequently-asked-questions", label: "FAQs" },
];

const fitItems = [
    "Enjoy working directly with clients and families.",
    "Respect privacy, boundaries, and individual preferences.",
    "Communicate clearly with supervisors and coworkers.",
    "Follow instructions and document care accurately.",
    "Take safety, infection prevention, and punctuality seriously.",
    "Want to develop your skills within the responsibilities of your role.",
];

const cnaResponsibilities = [
    "Assistance with bathing, dressing, grooming, and toileting.",
    "Support with eating and approved meal preparation.",
    "Safe transfers, repositioning, and mobility assistance.",
    "Observation and reporting of changes or concerns.",
    "Light housekeeping related to the client’s care.",
    "Accurate visit documentation and electronic visit verification when required.",
    "Respectful communication with clients, families, and the care team.",
];

const pcaResponsibilities = [
    "Assistance with personal hygiene and dressing.",
    "Mobility support and approved transfers.",
    "Meal preparation and assistance with daily routines.",
    "Client-related housekeeping.",
    "Companionship and observation.",
    "Reporting concerns and completing visit records.",
];

const familyCaregiverTasks = [
    "Approved bathing, dressing, grooming, and toileting assistance.",
    "Meal preparation and support with daily routines.",
    "Safe mobility and transfers after training and competency review.",
    "Client-related household tasks included in the care plan.",
    "Reporting concerns and accurately documenting authorized care.",
];

const familyCaregiverReady = [
    "Your name, contact information, county, and relationship to your loved one.",
    "Whether you live together and the support you currently provide.",
    "Your loved one’s program, if known: CCSP, SOURCE, or another program.",
    "Case manager contact information, if available.",
    "Your care experience, training, and availability.",
];

const familyCaregiverSteps = [
    "Contact AmeriCare about family caregiver eligibility.",
    "Review your loved one’s coverage and care plan with the case manager.",
    "Confirm the permitted caregiver relationship and service arrangement.",
    "Complete the required hiring, screening, training, and documentation.",
    "Begin paid care only after the required approval and authorized start date.",
];

const processSteps = [
    { lead: "Submit your application.", text: "Select a role and share your experience, location, and schedule." },
    { lead: "Application review.", text: "We compare your qualifications with current openings and client needs." },
    { lead: "Interview or screening conversation.", text: "Discuss responsibilities, travel, availability, and relevant skills." },
    { lead: "Credential and onboarding review.", text: "Complete the required verification, screening, and employment paperwork." },
    {
        lead: "Orientation and competency review.",
        text: "Learn applicable policies, documentation expectations, safety procedures, and role responsibilities.",
    },
    { lead: "Assignment discussion.", text: "Eligible candidates are considered for available assignments that fit their qualifications." },
];

const trainingRows = [
    {
        name: "Chattahoochee Technical College",
        what: "Nurse aide training and current program locations; useful starting point for northwest metro Atlanta applicants",
        link: { label: "Nursing Assistant Programs", href: "https://www.chattahoocheetech.edu/school-of-nursing/certified-nurse-assistant.html" },
    },
    {
        name: "Chattahoochee Technical College School of Nursing",
        what: "Practical nursing, RN education, and bridge options",
        link: { label: "School of Nursing", href: "https://www.chattahoocheetech.edu/school-of-nursing/index.html" },
    },
    {
        name: "Gwinnett Technical College",
        what: "Nurse Aide Fast Track; the program page identifies Lawrenceville as the offering campus",
        link: { label: "Nurse Aide Fast Track", href: "https://gwinnetttech.edu/nursing-sciences-division/nurse-aide-fast-track/" },
    },
    {
        name: "Gwinnett Technical College",
        what: "Practical nursing education",
        link: { label: "Practical Nursing", href: "https://gwinnetttech.edu/nursing-sciences-division/practical-nursing/" },
    },
    {
        name: "Alliant Health Solutions / Georgia Nurse Aide resources",
        what: "Nurse aide program resources and current program information",
        link: {
            label: "Nurse Aide Training Resources",
            href: "https://nurseaide.allianthealth.org/PageLinks?g=NATP",
        },
    },
    {
        name: "American Red Cross",
        what: "Georgia CPR, first aid, and BLS course options",
        link: { label: "Georgia Classes", href: "https://www.redcross.org/local/georgia/take-a-class" },
    },
    {
        name: "Georgia Board of Nursing",
        what: "Licensing information and nursing resources",
        link: { label: "Board of Nursing", href: "https://sos.ga.gov/georgia-board-nursing" },
    },
];

const trainingQuestions = [
    "Is this program currently approved for the credential I want?",
    "Does completion make me eligible for the required certification examination?",
    "What are the total costs, including exams, supplies, and clinical requirements?",
    "Where are classes and clinical placements held?",
    "Are there prerequisites, age requirements, or screening requirements?",
    "Does the CPR/BLS course include the skills component my employer requires?",
    "What financial aid might apply to this program and my eligibility?",
];

const documentsRows: { doc: string; who: string; purpose: string }[] = [
    {
        doc: "Completed application and work history",
        who: "All applicants",
        purpose: "Review experience and qualifications; prepare five years of employment history or your complete history if shorter",
    },
    { doc: "Resume, training history, and references", who: "As requested", purpose: "Support review of your background" },
    {
        doc: "Government-issued photo identification",
        who: "As requested during secure onboarding or fingerprint registration",
        purpose: "Confirm identity for the applicable process",
    },
    {
        doc: "Form I-9 documentation",
        who: "New employees",
        purpose: "Verify identity and employment authorization; employees choose acceptable documents from the official lists",
    },
    {
        doc: "CNA training/certification and registry information",
        who: "CNA applicants and relevant PCA pathways",
        purpose: "Verify credentials and eligibility",
    },
    { doc: "PCA training or competency documentation", who: "PCA applicants", purpose: "Confirm the applicable qualification pathway" },
    {
        doc: "RN/LPN license and applicable compact privilege information",
        who: "Nursing applicants",
        purpose: "Verify authorization to practice",
    },
    { doc: "CPR, first aid, or BLS documentation", who: "Depending on role and agency requirements", purpose: "Verify required training" },
    {
        doc: "TB screening documentation",
        who: "Before starting work, under the applicable health screening process",
        purpose: "Document required baseline screening and any indicated testing",
    },
    {
        doc: "Background screening consent and eligibility documentation",
        who: "Where applicable",
        purpose: "Complete the required process for the role",
    },
    { doc: "Driver’s license, insurance, or driving record", who: "When job duties include driving", purpose: "Review transportation qualifications" },
    { doc: "Payroll and tax forms", who: "After hiring, as applicable", purpose: "Establish employment and payroll records" },
    { doc: "Emergency contact information", who: "During onboarding", purpose: "Support staff safety and communication" },
    {
        doc: "Orientation, policy acknowledgments, and skill checkoffs",
        who: "Before applicable assignments",
        purpose: "Confirm readiness for the position",
    },
];

const faqs = [
    {
        q: "Can I get paid to care for my own family member?",
        a: "Possibly. The applicable program must permit your relationship and authorize the services. Ask AmeriCare and the case manager to review eligibility, provider participation, and required onboarding before expecting payment.",
    },
    {
        q: "Is family caregiver pay the same as a nursing job?",
        a: "No. The role and payment arrangement depend on the authorized program. Being a family caregiver does not provide an RN or LPN license or permission to perform skilled nursing procedures.",
    },
    {
        q: "What is the difference between a CNA and a PCA?",
        a: "A CNA has a nurse aide credential tied to training and competency requirements. PCA describes a personal care role that can have more than one qualifying training pathway. Neither title independently authorizes licensed nursing practice.",
    },
    {
        q: "Can I apply without a CNA certificate?",
        a: "You can tell us about your background. Some roles may use a qualifying pathway other than CNA certification. HR determines whether your qualifications satisfy the position; an RN or LPN position requires appropriate nursing authorization.",
    },
    {
        q: "Do you hire new graduates?",
        a: "New graduates may submit an application for consideration. Available positions, orientation capacity, demonstrated skills, and client needs determine suitability.",
    },
    {
        q: "Do I need pediatric experience for a GAPP nursing assignment?",
        a: "Requirements depend on the child’s needs. Tell us what you have done independently and where you need additional training. Specialty skills must be verified before assignment.",
    },
    {
        q: "Do I need a car?",
        a: "You need a dependable way to reach assigned work locations. Roles that involve driving clients can have additional license, insurance, and driving-record requirements. Ask about the specific position.",
    },
    {
        q: "What schedules are available?",
        a: "Availability varies with current assignments. Share your preferred days, times, weekly hours, and weekend or overnight availability. The recruiting team can explain current options.",
    },
    {
        q: "What is the pay?",
        a: "Pay depends on the role, assignment, qualifications, and current opening. Ask the recruiting team for the compensation details associated with the position you are considering.",
    },
    {
        q: "Can I apply while I finish training?",
        a: "Tell us your program, expected completion date, and current credentials. You cannot perform duties requiring qualifications or clearance you have not yet obtained.",
    },
    {
        q: "Can I start immediately after scheduling fingerprints?",
        a: "Scheduling fingerprints does not establish employment eligibility. Start dates depend on the applicable screening rules, onboarding completion, and AmeriCare’s authorization.",
    },
    {
        q: "Where does AmeriCare hire?",
        a: "Tell us where you live and how far you are willing to travel. We review candidates for assignments within our current Georgia service area, including opportunities serving metro Atlanta communities when available.",
    },
    {
        q: "How can I check on my application?",
        a: "Contact AmeriCare at 404-494-2187 or support@americareinhome.com and identify your inquiry as a careers application. Include your name and the position you applied for. Do not email sensitive onboarding documents.",
    },
];

export default function CareersContent() {
    return (
        <GuideLayout toc={toc} accent="primary">
            <GuideSection
                id="why-choose-a-career-in-home-care"
                label="Careers / 01"
                title="Why choose a career in home care?"
                accent="primary"
            >
                <p>
                    Home care gives you an opportunity to build meaningful relationships while helping people remain comfortable and
                    supported in their own homes. A dependable caregiver can help an older adult maintain a familiar routine. A skilled
                    nurse can help a family navigate a child’s complex medical needs.
                </p>
                <p>
                    At AmeriCare, compassionate care means showing up reliably, following the care plan, communicating respectfully, and
                    protecting the dignity of every person we serve.
                </p>
                <p className="font-semibold text-gray-900 dark:text-white pt-1">You may be a good fit if you:</p>
                <GuideChecklist accent="primary" items={fitItems} />
                <p className="pt-1">
                    <a
                        href="#application"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                    >
                        Tell us about your experience <span aria-hidden="true">↗</span>
                    </a>
                </p>
            </GuideSection>

            <GuideSection id="explore-our-care-roles" label="Careers / 02" title="Explore our care roles" accent="primary">
                <div className="flex flex-col gap-2 pt-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        Certified Nursing Assistant — CNA
                    </h3>
                    <p>
                        CNAs bring nurse aide training and hands-on care skills to the home setting. Depending on the assignment, a CNA may
                        assist adults with personal care, mobility, meals, and daily routines under the client’s care plan and agency
                        supervision.
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">Typical responsibilities may include:</p>
                    <ul className="flex flex-col gap-2">
                        {cnaResponsibilities.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p>
                        <span className="font-semibold text-gray-900 dark:text-white">Qualifications:</span> Provide your nurse aide
                        credential information and relevant work history. AmeriCare verifies credentials and determines whether your
                        training, demonstrated competency, and registry status meet the position’s requirements.
                    </p>
                    <p>
                        A CNA credential does not authorize independent nursing practice. Tasks must remain within the approved role and care
                        plan.
                    </p>
                    <p className="pt-1">
                        <a
                            href="#application"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                        >
                            Apply for CNA opportunities <span aria-hidden="true">↗</span>
                        </a>
                    </p>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        Personal Care Assistant — PCA / Personal Care Worker
                    </h3>
                    <p>
                        PCAs help people with daily activities that support comfort, independence, and safety at home. These positions may
                        be a fit for applicants with recognized care training or qualifying experience and competency.
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">Typical responsibilities may include:</p>
                    <ul className="flex flex-col gap-2">
                        {pcaResponsibilities.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p>
                        <span className="font-semibold text-gray-900 dark:text-white">
                            Do you need a CNA certificate to be a PCA in Georgia?
                        </span>{" "}
                        Not every PCA qualification pathway requires CNA certification. Georgia’s private home care rules recognize several
                        pathways, including qualifying nurse aide training or testing, an approved credentialing program, or a provider-based
                        40-hour training pathway. AmeriCare reviews the pathway applicable to the position and any additional program
                        requirements.
                    </p>
                    <p>
                        Applicants should describe their training honestly and provide supporting documentation. Completion of a course alone
                        does not guarantee hiring or clearance for every task.
                    </p>
                    <p className="pt-1">
                        <a
                            href="#application"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                        >
                            Apply for PCA opportunities <span aria-hidden="true">↗</span>
                        </a>
                    </p>
                </div>

                <div id="family-caregiver" className="flex flex-col gap-2 pt-4 scroll-mt-28">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        Family Caregiver — Get Paid to Care for a Loved One
                    </h3>
                    <p>
                        Already helping a parent, sibling, or another loved one at home?{" "}
                        <span className="font-semibold text-gray-900 dark:text-white">
                            You may be able to turn eligible family caregiving into paid work.
                        </span>{" "}
                        Ask AmeriCare about your family’s situation, your loved one’s approved services, and whether a paid caregiver
                        arrangement is available.
                    </p>
                    <p>
                        You know your loved one’s routines, preferences, and daily challenges. An approved paid arrangement can recognize
                        that support while adding training, documentation, and professional oversight.
                    </p>

                    <h4 className="pt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        How paid family caregiving can work in Georgia
                    </h4>
                    <p>
                        Georgia has Medicaid-funded pathways that may allow eligible relatives to receive compensation. Under CCSP/SOURCE,
                        qualifying Personal Support Services arrangements may pay for authorized hands-on assistance. Structured Family
                        Caregiving is a separate model for eligible live-in caregivers, with its own rules and payment structure.
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900 dark:text-white">Ask which pathway applies.</span> AmeriCare must
                        confirm its participation in the relevant service, your eligibility, and whether your loved one’s care plan
                        authorizes the arrangement. Family caregiving is not automatically paid because a loved one has Medicaid.
                    </p>

                    <h4 className="pt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Who may qualify?</h4>
                    <p>
                        Eligibility depends on the caregiver’s relationship, the recipient’s program enrollment and assessed needs, approved
                        services, and caregiver qualifications. Spouses, legal guardians, conservators, and parents of minor children face
                        restrictions under adult waiver pathways. Rules for other programs differ. A case manager and provider should review
                        your specific situation.
                    </p>

                    <h4 className="pt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">What might you help with?</h4>
                    <ul className="flex flex-col gap-2">
                        {familyCaregiverTasks.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p>
                        Family status does not authorize skilled nursing procedures. Nursing tasks require the appropriate professional
                        authorization and verified skills.
                    </p>

                    <h4 className="pt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        What information should you have ready?
                    </h4>
                    <ul className="flex flex-col gap-2">
                        {familyCaregiverReady.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p>
                        During onboarding, the team will explain applicable photo ID, work authorization, background screening, TB
                        screening, training, and competency documentation. Share sensitive records only through the appropriate secure
                        process.
                    </p>

                    <h4 className="pt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                        How much can a family caregiver earn?
                    </h4>
                    <p>
                        Compensation depends on the approved program, payment model, authorized services, and provider arrangement. Ask for
                        the actual pay structure and approved schedule before making plans. No specific rate, hours, or retroactive payment
                        is promised here.
                    </p>

                    <h4 className="pt-2 text-base sm:text-lg font-semibold text-gray-900 dark:text-white">Take the next step</h4>
                    <ol className="flex flex-col gap-3 list-decimal list-outside pl-5 marker:font-semibold marker:text-[#3d7a26] dark:marker:text-primary">
                        {familyCaregiverSteps.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                    <p className="pt-1 text-sm">
                        <a
                            href="https://gcdd.org/news-a-media/making-a-difference-magazine/july-2026/ask-gcdd-anything-learn-about-structured-family-caregiving"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-[#3d7a26] dark:text-primary hover:underline"
                        >
                            Georgia Council on Developmental Disabilities: paid family caregiver pathways ↗
                        </a>
                    </p>
                    <p className="pt-1">
                        <a
                            href="#application"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                        >
                            Ask about getting paid to care for family <span aria-hidden="true">↗</span>
                        </a>
                    </p>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Registered Nurse — RN</h3>
                    <p>
                        RNs provide skilled nursing care within their scope of practice, physician orders, agency policies, and the
                        client’s individualized plan of care.
                    </p>
                    <p>
                        Depending on the position and client, responsibilities may include assessment, medication administration, ordered
                        treatments, clinical documentation, communication with providers, caregiver education, and care coordination.
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900 dark:text-white">Qualifications:</span> Current legal authorization to
                        practice nursing in Georgia through an appropriate Georgia license or valid multistate privilege, verified
                        credentials, relevant competency, and completion of required onboarding. CPR/BLS and specialty experience requirements
                        depend on the position.
                    </p>
                    <p>
                        Clinical leadership or supervisory positions may have additional experience requirements and are advertised
                        separately when available.
                    </p>
                    <p className="pt-1">
                        <a
                            href="#application"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                        >
                            Apply for RN opportunities <span aria-hidden="true">↗</span>
                        </a>
                    </p>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        Licensed Practical Nurse — LPN
                    </h3>
                    <p>
                        LPNs provide nursing care within their authorized scope and required direction or supervision. Depending on the
                        assignment, duties may include ordered medications and treatments, monitoring, documentation, and reporting changes to
                        the supervising clinical team.
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900 dark:text-white">Qualifications:</span> Current legal authorization to
                        practice as an LPN in Georgia, verified credentials, appropriate clinical competency, and completion of agency
                        onboarding.
                    </p>
                    <p className="pt-1">
                        <a
                            href="#application"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                        >
                            Apply for LPN opportunities <span aria-hidden="true">↗</span>
                        </a>
                    </p>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        Pediatric Home Nursing — GAPP RN &amp; LPN Roles
                    </h3>
                    <p>
                        The Georgia Pediatric Program, commonly called GAPP, is an important part of pediatric home care. Pediatric home
                        nursing supports eligible children with medical needs while helping families maintain care routines at home.
                    </p>
                    <p>
                        Depending on the child’s orders and your verified competency, an assignment may involve feeding-tube care, seizure
                        monitoring, respiratory support, medication administration, or other ordered nursing services.
                    </p>
                    <p>
                        Tell us about pediatric experience, tracheostomy care, ventilator care, G-tube care, and other relevant skills.
                        Advanced procedures require role-appropriate authorization, training, and validation before assignment.
                    </p>
                    <p className="pt-1">
                        <a
                            href="/services/gapp"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                        >
                            Explore pediatric nursing opportunities · Learn about AmeriCare’s GAPP services <span aria-hidden="true">↗</span>
                        </a>
                    </p>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        Adult Personal Support — CCSP &amp; SOURCE
                    </h3>
                    <p>
                        AmeriCare’s adult care services include personal support associated with programs such as CCSP and SOURCE. Qualified
                        caregivers, PCAs, and CNAs help clients with approved daily living tasks under an individualized service plan.
                    </p>
                    <p>
                        These assignments emphasize reliable attendance, safe assistance, respectful communication, accurate documentation,
                        and reporting changes to the agency.
                    </p>
                    <p className="pt-1">
                        <a
                            href="/services/ccsp-source"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                        >
                            Explore adult care opportunities · Learn about CCSP &amp; SOURCE <span aria-hidden="true">↗</span>
                        </a>
                    </p>
                </div>
            </GuideSection>

            <GuideSection
                id="documents-to-prepare-for-hiring-and-onboarding"
                label="Careers / 03"
                title="Documents to prepare for hiring and onboarding"
                accent="primary"
            >
                <p>
                    You do not need to send every document with your first application. Start with your contact information, desired role,
                    experience, location, and availability. Our team will explain what is needed for your position.
                </p>

                <div className="table-scroll overflow-x-auto pt-2">
                    <table className="w-full min-w-[44rem] border-collapse text-left text-sm sm:text-[0.95rem]">
                        <caption className="sr-only">Onboarding documents</caption>
                        <thead>
                            <tr className="border-b border-primary/30">
                                <th scope="col" className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">Document or information</th>
                                <th scope="col" className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">Who may need it</th>
                                <th scope="col" className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">Purpose</th>
                            </tr>
                        </thead>
                        <tbody className="align-top text-gray-600 dark:text-gray-400">
                            {documentsRows.map((row) => (
                                <tr key={row.doc} className="border-b border-gray-100 dark:border-white/10">
                                    <th scope="row" className="py-3 pr-4 font-medium text-gray-800 dark:text-gray-200">{row.doc}</th>
                                    <td className="py-3 pr-4">{row.who}</td>
                                    <td className="py-3 pr-4">{row.purpose}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="rounded-xl border border-primary/20 bg-primary/[0.06] dark:bg-primary/[0.08] p-4 text-sm">
                    <span className="font-semibold text-gray-900 dark:text-white">Please protect your information:</span> Do not send Social
                    Security numbers, banking information, photo ID copies, or medical records through the public application form or
                    ordinary email. AmeriCare will provide an appropriate onboarding method.
                </p>

                <div className="flex flex-col gap-2 pt-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Background checks and fingerprinting</h3>
                    <p>
                        Certain direct-access roles require a satisfactory fingerprint-based eligibility determination through Georgia’s
                        applicable background screening process. CNAs are not automatically exempt because they hold a nurse aide credential.
                    </p>
                    <p>
                        Some licensed healthcare professionals have exemptions under Georgia’s long-term care background check program.
                        AmeriCare verifies applicable license status and determines the screening process for each role, including any
                        separate lawful agency or program requirements.
                    </p>
                    <p>
                        <span className="font-semibold text-gray-900 dark:text-white">
                            Wait for AmeriCare’s instructions before registering or paying for fingerprints.
                        </span>{" "}
                        A previous employer’s screening may need verification and may not satisfy the new position’s requirements. An
                        appointment confirmation alone is not a final eligibility determination.
                    </p>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                        TB screening and health documentation
                    </h3>
                    <p>
                        Georgia’s private home care rule requires TB screening before work begins, following CDC guidance for baseline
                        screening and testing of healthcare personnel.
                    </p>
                    <p>
                        Our onboarding team will explain acceptable documentation and any additional agency or program requirements. If you
                        have a previous positive TB test or prior treatment, tell the onboarding team so the appropriate clinical documentation
                        can be reviewed.
                    </p>
                    <p>
                        Do not assume every applicant needs the same test, a chest X-ray, or an annual repeat test. Follow the screening
                        instructions applicable to your history and role.
                    </p>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">CPR, first aid &amp; BLS</h3>
                    <p>
                        Ask which course and credential your position requires before enrolling. A caregiver first-aid/CPR course and
                        healthcare-provider BLS are different credentials. Confirm whether an in-person skills assessment is required and
                        whether the course provider is accepted by AmeriCare.
                    </p>
                </div>
            </GuideSection>

            <GuideSection id="what-happens-after-you-apply" label="Careers / 04" title="What happens after you apply?" accent="primary">
                <ol className="flex flex-col gap-3 list-decimal list-outside pl-5 marker:font-semibold marker:text-[#3d7a26] dark:marker:text-primary">
                    {processSteps.map((step) => (
                        <li key={step.lead}>
                            <span className="font-semibold text-gray-900 dark:text-white">{step.lead}</span> {step.text}
                        </li>
                    ))}
                </ol>
                <p className="italic">
                    Submitting an application does not guarantee employment, a particular client, a start date, or a specific number of
                    hours.
                </p>
            </GuideSection>

            <GuideSection
                id="new-to-healthcare-explore-training-options"
                label="Careers / 05"
                title="New to healthcare? Explore training options"
                accent="primary"
            >
                <p>
                    Training can help you build care skills and understand which credential fits your career goals. These independent
                    resources are provided for convenience; listing a school does not imply an AmeriCare partnership, endorsement, or
                    guaranteed job.
                </p>

                <div className="table-scroll overflow-x-auto pt-2">
                    <table className="w-full min-w-[40rem] border-collapse text-left text-sm sm:text-[0.95rem]">
                        <caption className="sr-only">Local training resources</caption>
                        <thead>
                            <tr className="border-b border-primary/30">
                                <th scope="col" className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">Resource</th>
                                <th scope="col" className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">What to explore</th>
                                <th scope="col" className="py-3 pr-4 font-semibold text-gray-900 dark:text-white">Link</th>
                            </tr>
                        </thead>
                        <tbody className="align-top text-gray-600 dark:text-gray-400">
                            {trainingRows.map((row) => (
                                <tr key={`${row.name}-${row.link.label}`} className="border-b border-gray-100 dark:border-white/10">
                                    <th scope="row" className="py-3 pr-4 font-medium text-gray-800 dark:text-gray-200">{row.name}</th>
                                    <td className="py-3 pr-4">{row.what}</td>
                                    <td className="py-3 pr-4">
                                        <a
                                            href={row.link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-semibold text-[#3d7a26] dark:text-primary hover:underline"
                                        >
                                            {row.link.label} ↗
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="font-semibold text-gray-900 dark:text-white pt-2">Before paying for training, ask:</p>
                <ul className="flex flex-col gap-2">
                    {trainingQuestions.map((question) => (
                        <li key={question} className="flex items-start gap-3">
                            <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{question}</span>
                        </li>
                    ))}
                </ul>
                <p className="pt-1">
                    <a
                        href="#application"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white smooth hover:opacity-90 active:scale-90"
                    >
                        Ask about qualifications before applying <span aria-hidden="true">↗</span>
                    </a>
                </p>
            </GuideSection>

            <GuideSection id="frequently-asked-questions" label="Careers / 06" title="Frequently asked questions" accent="primary">
                <FaqList items={faqs} accent="primary" />
            </GuideSection>
        </GuideLayout>
    );
}
