import NavigationComponent from "@/app/components/NavSection";

export default function PolicyPage() {
    return (
        <div className='max-2xl:pt-32 pt-24 py-8 dark:text-white sm:px-[5vw] px-4 flex flex-col gap-6'>
            <NavigationComponent />
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl sm:text-xl text-primary">Privacy Policy</h1>
                <p>AmeriCare Services Inc. (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or use our services.</p>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-primary sm:text-lg">We may collect:</h3>

                <p>Personal Data: Name, contact details, and medical information</p>

            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-primary sm:text-lg">We use your data to:</h3>

                <p>Provide and manage our services and to communicate with you.</p>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-primary sm:text-lg">Your Rights You can:</h3>
                <p>Access, correct, or delete your data and withdraw consent for data processing.</p>
            </div>


            <div className="flex flex-col gap-2">
                <h3 className="text-xl text-primary sm:text-lg">SMS Communications</h3>
                <p>By opting in, you agree to receive SMS messages from us. Reply &quot;STOP&quot; to opt out.</p>
            </div>
        </div>
    )
}