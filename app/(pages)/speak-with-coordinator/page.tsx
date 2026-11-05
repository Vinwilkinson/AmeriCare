import NavigationComponent from "@/app/components/NavSection";
import { Toaster } from "react-hot-toast";
import CoordinatorWizard from "./components/CoordinatorWizard";

import { pageMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
    title: "Speak With a Care Coordinator",
    description:
        "Request a personal conversation with an AmeriCare care coordinator. We'll call, text, or email you within one business day to guide you through care options.",
    path: "/speak-with-coordinator",
});

export default function SpeakWithCoordinatorPage() {
    return (
        <div>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: { background: "#363636", color: "#fff" },
                }}
            />
            <NavigationComponent />
            <div className="relative z-10 pt-20">
                <CoordinatorWizard />
            </div>
        </div>
    );
}
