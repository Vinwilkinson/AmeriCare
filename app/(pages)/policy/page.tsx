import NavigationComponent from "@/app/components/NavSection";
import Link from "next/link";

export default function PolicyPage() {
    return (
        <div className='max-2xl:pt-32 pt-24 sm:mt-14 py-8 dark:text-white sm:px-[5vw] px-4 flex flex-col gap-6'>
            <NavigationComponent />
            <div className="flex flex-col gap-4 sm:text-lg">
                <h1 className="text-2xl sm:text-4xl text-primary">Privacy Policy</h1>
                <p>
                    We respect your privacy and are committed to protecting it through our compliance with this privacy policy (<span className="text-primary">&quot;Policy&quot;</span>). This Policy describes the types of information we may collect from you or that you may provide (<span className="text-primary">&quot;Personal Information&quot;</span>) on the <Link className="text-primary hover:underline underline-offset-2 active:scale-90" href={"https://americareinhome.com"}>americareinhome.com</Link> website (<span className="text-primary">&quot;Website&quot;</span> or <span className="text-primary">&quot;Service&quot;</span>) and any of its related products and services (collectively, <span className="text-primary">&quot;Services&quot;</span>), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information. It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it.
                </p>
                <p>
                    This Policy is a legally binding agreement between you (<span className="text-primary">&quot;User&quot;</span>, <span className="text-primary">&quot;you&quot;</span> or <span className="text-primary">&quot;your&quot;</span>) and AmeriCare Services Inc (doing business as <span className="text-primary">&quot;AmeriCare&quot;</span>, <span className="text-primary">&quot;we&quot;</span>, <span className="text-primary">&quot;us&quot;</span> or <span className="text-primary">&quot;our&quot;</span>). If you are entering into this Policy on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Policy, in which case the terms <span className="text-primary">&quot;User&quot;</span>, <span className="text-primary">&quot;you&quot;</span> or <span className="text-primary">&quot;your&quot;</span> shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Policy, you must not accept this Policy and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
                </p>
            </div>

            <div className="flex flex-col gap-4 sm:text-lg">
                <h3 className="text-xl text-primary sm:text-2xl">Table of contents</h3>
                <ul>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#CollectionOfInformation"}>Collection of information</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#UseAndProcessingOfCollectedInformation"}>Use and processing of collected information</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#DisclosureOfInformation"}>Disclosure of information</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#RetentionOfInformation"}>Retention of information</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#PrivacyOfChildren"}>Privacy of children</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#DoNotTrackSignals"}>Do Not Track signals</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#EmailMarketing"}>Email marketing</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#LinksToOtherResources"}>Links to other resources</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#InformationSecurity"}>Information security</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#DataBreach"}>Data breach</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#ChangesAndAmendments"}>Changes and amendments</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#AcceptanceOfThisPolicy"}>Acceptance of this policy</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#ContactingUs"}>Contacting us</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="CollectionOfInformation">
                <h3 className="text-xl text-primary sm:text-2xl">Collection of information</h3>

                <p>
                    Our top priority is customer data security and, as such, we exercise the no logs policy. We may process only minimal user data, only as much as it is absolutely necessary to maintain the Website and Services. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding the usage and traffic of the Website and Services. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system.
                </p>

            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="UseAndProcessingOfCollectedInformation">
                <h3 className="text-xl text-primary sm:text-2xl">Use and processing of collected information</h3>

                <p>
                    We act as a data controller and a data processor when handling Personal Information, unless we have entered into a data processing agreement with you in which case you would be the data controller and we would be the data processor.
                </p>
                <p>
                    Our role may also differ depending on the specific situation involving Personal Information. We act in the capacity of a data controller when we ask you to submit your Personal Information that is necessary to ensure your access and use of the Website and Services. In such instances, we are a data controller because we determine the purposes and means of the processing of Personal Information.
                </p>
                <p>
                    We act in the capacity of a data processor in situations when you submit Personal Information through the Website and Services. We do not own, control, or make decisions about the submitted Personal Information, and such Personal Information is processed only in accordance with your instructions. In such instances, the User providing Personal Information acts as a data controller.
                </p>
                <p>
                    In order to make the Website and Services available to you, or to meet a legal obligation, we may need to collect and use certain Personal Information. If you do not provide the information that we request, we may not be able to provide you with the requested products or services. Any of the information we collect from you may be used for the following purposes:
                </p>
                <ul>
                    <li className="list-disc ml-4 active:scale-[.99] w-fit">Send administrative information</li>
                    <li className="list-disc ml-4 active:scale-[.99] w-fit">Respond to inquiries and offer support</li>
                    <li className="list-disc ml-4 active:scale-[.99] w-fit">Run and operate the Website and Services</li>
                </ul>
                <p>
                    Processing your Personal Information depends on how you interact with the Website and Services, where you are located in the world and if one of the following applies: <span className="text-primary">(a)</span> you have given your consent for one or more specific purposes; <span className="text-primary">(b)</span> provision of information is necessary for the performance of this Policy with you and/or for any pre-contractual obligations thereof; <span className="text-primary">(c)</span> processing is necessary for compliance with a legal obligation to which you are subject; <span className="text-primary">(d)</span> processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in us; <span className="text-primary">(e)</span> processing is necessary for the purposes of the legitimate interests pursued by us or by a third party.
                </p>
                <p>
                    Note that under some legislations we may be allowed to process information until you object to such processing by opting out, without having to rely on consent or any other of the legal bases. In any case, we will be happy to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Information is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="DisclosureOfInformation">
                <h3 className="text-xl text-primary sm:text-2xl">Disclosure of information</h3>

                <p>
                    To maintain the highest level of privacy and to protect your Personal Information to the full extent, we do not share your Personal Information with anyone and for any reason.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="RetentionOfInformation">
                <h3 className="text-xl text-primary sm:text-2xl">Retention of information</h3>

                <p>
                    We will retain and use your Personal Information for the period necessary to comply with our legal obligations, to enforce our Policy, resolve disputes, and unless a longer retention period is required or permitted by law.
                </p>
                <p>
                    We may use any aggregated data derived from or incorporating your Personal Information after you update or delete it, but not in a manner that would identify you personally. Once the retention period expires, Personal Information shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification, and the right to data portability cannot be enforced after the expiration of the retention period.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="PrivacyOfChildren">
                <h3 className="text-xl text-primary sm:text-2xl">Privacy of children</h3>

                <p>
                    We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the Website and Services. If you have reason to believe that a child under the age of 18 has provided Personal Information to us through the Website and Services, please contact us to request that we delete that child&apos;s Personal Information from our Services.
                </p>
                <p>
                    We encourage parents and legal guardians to monitor their children&apos;s Internet usage and to help enforce this Policy by instructing their children never to provide Personal Information through the Website and Services without their permission. We also ask that all parents and legal guardians overseeing the care of children take the necessary precautions to ensure that their children are instructed to never give out Personal Information when online without their permission.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="DoNotTrackSignals">
                <h3 className="text-xl text-primary sm:text-2xl">Do Not Track signals</h3>

                <p>
                    Some browsers incorporate a Do Not Track feature that signals to websites you visit that you do not want to have your online activity tracked. Tracking is not the same as using or collecting information in connection with a website. For these purposes, tracking refers to collecting personally identifiable information from users who use or visit a website or online service as they move across different websites over time. The Website and Services do not track its visitors over time and across third-party websites. However, some third-party websites may keep track of your browsing activities when they serve you content, which enables them to tailor what they present to you. For a description of Do Not Track protocols for browsers and mobile devices or to learn more about the choices available to you, visit <Link className="text-primary underline-offset-2 hover:underline" href={"https://internetcookies.com"}>internetcookies.com</Link>
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="EmailMarketing">
                <h3 className="text-xl text-primary sm:text-2xl">Email marketing</h3>

                <p>
                    We offer electronic newsletters to which you may voluntarily subscribe at any time. We are committed to keeping your email address confidential and will not disclose your email address to any third parties except as allowed in the information use and processing section. We will maintain the information sent via email in accordance with applicable laws and regulations.
                </p>
                <p>
                    In compliance with the CAN-SPAM Act, all emails sent from us will clearly state who the email is from and provide clear information on how to contact the sender. You may choose to stop receiving our newsletter or marketing emails by following the unsubscribe instructions included in these emails or by contacting us.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="LinksToOtherResources">
                <h3 className="text-xl text-primary sm:text-2xl">Links to other resources</h3>

                <p>
                    The Website and Services contain links to other resources that are not owned or controlled by us. Please be aware that we are not responsible for the privacy practices of such other resources or third parties. We encourage you to be aware when you leave the Website and Services and to read the privacy statements of each and every resource that may collect Personal Information.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="InformationSecurity">
                <h3 className="text-xl text-primary sm:text-2xl">Information security</h3>

                <p>
                    We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We maintain reasonable administrative, technical, and physical safeguards in an effort to protect against unauthorized access, use, modification, and disclosure of Personal Information in our control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
                </p>
                <p>
                    Therefore, while we strive to protect your Personal Information, you acknowledge that <span className="text-primary">(a)</span> there are security and privacy limitations of the Internet which are beyond our control; <span className="text-primary">(b)</span> the security, integrity, and privacy of any and all information and data exchanged between you and the Website and Services cannot be guaranteed; and <span className="text-primary">(c)</span> any such information and data may be viewed or tampered with in transit by a third party, despite best efforts.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="DataBreach">
                <h3 className="text-xl text-primary sm:text-2xl">Data breach</h3>

                <p>
                    In the event we become aware that the security of the Website and Services has been compromised or Users’ Personal Information has been disclosed to unrelated third parties as a result of external activity, including, but not limited to, security attacks or fraud, we reserve the right to take reasonably appropriate measures, including, but not limited to, investigation and reporting, as well as notification to and cooperation with law enforcement authorities. In the event of a data breach, we will make reasonable efforts to notify affected individuals if we believe that there is a reasonable risk of harm to the User as a result of the breach or if notice is otherwise required by law. When we do, we will send you an email, get in touch with you over the phone.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="ChangesAndAmendments">
                <h3 className="text-xl text-primary sm:text-2xl">Changes and amendments</h3>

                <p>
                    We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we do, we will revise the updated date at the bottom of this page, send you an email to notify you. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.
                </p>
                <p>
                    An updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes. However, we will not, without your consent, use your Personal Information in a manner materially different than what was stated at the time your Personal Information was collected.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="PrivacyOfChildren">
                <h3 className="text-xl text-primary sm:text-2xl">Privacy of children</h3>

                <p>
                    We do not knowingly collect any Personal Information from children under the age of 18. If you are under the age of 18, please do not submit any Personal Information through the Website and Services. If you have reason to believe that a child under the age of 18 has provided Personal Information to us through the Website and Services, please contact us to request that we delete that child&apos;s Personal Information from our Services.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32" id="AcceptanceOfThisPolicy">
                <h3 className="text-xl text-primary sm:text-2xl">Acceptance of this policy</h3>

                <p>
                    You acknowledge that you have read this Policy and agree to all its terms and conditions. By accessing and using the Website and Services and submitting your information you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorized to access or use the Website and Services.
                </p>
            </div>
            <div className="flex flex-col gap-4 sm:text-lg scroll-mt-32 mb-40" id="ContactingUs">
                <h3 className="text-xl text-primary sm:text-2xl">Contacting us</h3>

                <p>
                    If you have any questions, concerns, or complaints regarding this Policy, the information we hold about you, or if you wish to exercise your rights, we encourage you to contact us using the details below:
                </p>
                <p>
                    <Link className="text-primary underline-offset-4 hover:underline" href={"mailto:support@americareinhome.com"}>support@americareinhome.com</Link>
                </p>
                <p>
                    We will attempt to resolve complaints and disputes and make every reasonable effort to honor your wish to exercise your rights as quickly as possible and in any event, within the timescales provided by applicable data protection laws.
                </p>
                <p>This document was last updated on November 3, 2024</p>
            </div>
        </div>
    )
}