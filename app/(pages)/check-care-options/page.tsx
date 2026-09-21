import NavigationComponent from "@/app/components/NavSection";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import CarePathWizard from "./components/CarePathWizard";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "Check Care Options | AmeriCare Atlanta",
    description: "Find the right care for your family. Answer a few questions and AmeriCare will guide you to the best home healthcare options for children and adults in Atlanta.",
};

export default function CheckCareOptionsPage() {
    return (
        <div>
            <Toaster
                position="bottom-right"
                toastOptions={{
                    style: {
                        background: '#363636',
                        color: '#fff',
                    }
                }}
            />
            <NavigationComponent />
            <div className="relative z-10 pt-20">
                <CarePathWizard />
            </div>
        </div>
    );
}
