import NavigationComponent from "@/app/components/NavSection";
import ProgramDetail from "../components/ProgramDetail";
import { ccspProgram } from "@/lib/ProgramDetails";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "CCSP & SOURCE Medicaid Programs | AmeriCare Atlanta",
    description:
        "Learn about Georgia Medicaid waiver programs CCSP and SOURCE — in-home support that helps elderly and disabled adults avoid long-term care facilities. AmeriCare guides you through eligibility and care.",
};

export default function CcspSourcePage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <ProgramDetail program={ccspProgram} />
            </div>
        </>
    );
}
