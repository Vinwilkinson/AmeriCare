import TopSection from "./components/TopSection";
import ResourceCards from "./components/ResourceCards";
import BottomCTA from "./components/BottomCTA";
import NavigationComponent from "@/app/components/NavSection";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {...generalMetadata, title: "Resources | AmeriCare Atlanta"};

export default function ResourcesPage() {
    return (
        <div>
            <Toaster
                position="bottom-right"
                toastOptions={
                    {
                        style: {
                            background: '#363636',
                            color: '#fff',
                        }
                    }
                }
            />
            <NavigationComponent />

            <div className="relative z-10">
                <TopSection />
                <ResourceCards />
                <BottomCTA />
            </div>
        </div>
    )
}
