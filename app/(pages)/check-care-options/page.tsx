import NavigationComponent from "@/app/components/NavSection";
import { Toaster } from "react-hot-toast";
import CarePathWizard from "./components/CarePathWizard";

import { pageMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
    title: "Check Your Care Options",
    description:
        "Find the right home care for your family. Answer a few quick questions and AmeriCare will guide you to the best care options for children and adults in Atlanta.",
    path: "/check-care-options",
});

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
