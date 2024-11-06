import NavigationComponent from "@/app/components/NavSection";
import Link from "next/link";

export default function PolicyPage() {
    return (
        <div className='max-2xl:pt-32 pt-24 sm:mt-14 py-8 dark:text-white sm:px-[5vw] px-4 flex flex-col gap-6'>
            <NavigationComponent />
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl sm:text-4xl text-primary">Privacy Policy</h1>
                <p>
                    We respect your privacy and are committed to protecting it through our compliance with this privacy policy (<span className="text-primary">&quot;Policy&quot;</span>). This Policy describes the types of information we may collect from you or that you may provide (<span className="text-primary">&quot;Personal Information&quot;</span>) on the <Link className="text-primary hover:underline underline-offset-2 active:scale-90" href={"https://americareinhome.com"}>americareinhome.com</Link> website (<span className="text-primary">&quot;Website&quot;</span> or <span className="text-primary">&quot;Service&quot;</span>) and any of its related products and services (collectively, <span className="text-primary">&quot;Services&quot;</span>), and our practices for collecting, using, maintaining, protecting, and disclosing that Personal Information. It also describes the choices available to you regarding our use of your Personal Information and how you can access and update it.
                </p>
                <p>
                <p>
                    This Policy is a legally binding agreement between you (<span className="text-primary">&quot;User&quot;</span>, <span className="text-primary">&quot;you&quot;</span> or <span className="text-primary">&quot;your&quot;</span>) and AmeriCare Services Inc (doing business as <span className="text-primary">&quot;AmeriCare&quot;</span>, <span className="text-primary">&quot;we&quot;</span>, <span className="text-primary">&quot;us&quot;</span> or <span className="text-primary">&quot;our&quot;</span>). If you are entering into this Policy on behalf of a business or other legal entity, you represent that you have the authority to bind such entity to this Policy, in which case the terms <span className="text-primary">&quot;User&quot;</span>, <span className="text-primary">&quot;you&quot;</span> or <span className="text-primary">&quot;your&quot;</span> shall refer to such entity. If you do not have such authority, or if you do not agree with the terms of this Policy, you must not accept this Policy and may not access and use the Website and Services. By accessing and using the Website and Services, you acknowledge that you have read, understood, and agree to be bound by the terms of this Policy. This Policy does not apply to the practices of companies that we do not own or control, or to individuals that we do not employ or manage.
                </p>
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-primary sm:text-2xl">Table of contents</h3>
                <ul>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#CollectionOfInformation"}>Collection of information</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Use and processing of collected information</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Disclosure of information</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Retention of information</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Privacy of children</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Do Not Track signals</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Email marketing</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Links to other resources</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Information security</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Data breach</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Changes and amendments</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Acceptance of this policy</Link>
                    </li>
                    <li className="list-decimal ml-4 active:scale-[.99] w-fit">
                        <Link className="hover:text-primary hover:underline underline-offset-4" href={"#"}>Contacting us</Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-2" id="CollectionOfInformation">
                <h3 className="text-xl text-primary sm:text-2xl">Collection of information</h3>

                <p>
                    Our top priority is customer data security and, as such, we exercise the no logs policy. We may process only minimal user data, only as much as it is absolutely necessary to maintain the Website and Services. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding the usage and traffic of the Website and Services. This statistical information is not otherwise aggregated in such a way that would identify any particular user of the system.
                </p>

            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-primary sm:text-2xl">We may collect:</h3>

                <p>Personal Data: Name, contact details, and medical information</p>

            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-primary sm:text-2xl">We use your data to:</h3>

                <p>Provide and manage our services and to communicate with you.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-primary sm:text-2xl">Your Rights You can:</h3>
                <p>Access, correct, or delete your data and withdraw consent for data processing.</p>
            </div>


            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-primary sm:text-2xl">SMS Communications</h3>
                <p>By opting in, you agree to receive SMS messages from us. Reply &quot;STOP&quot; to opt out.</p>
            </div>
        </div>
    )
}