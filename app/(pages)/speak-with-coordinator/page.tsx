import NavigationComponent from "@/app/components/NavSection";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import CoordinatorWizard from "./components/CoordinatorWizard";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "Speak With a Care Coordinator | AmeriCare Atlanta",
    description: "Request a personal conversation with an AmeriCare care coordinator. We'll call, text, or email you within one business day to guide you through care options.",
};

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
