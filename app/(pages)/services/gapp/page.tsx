import NavigationComponent from "@/app/components/NavSection";
import ProgramDetail from "../components/ProgramDetail";
import { gappProgram } from "@/lib/ProgramDetails";
import { generalMetadata } from "@/lib/MetaData";
import { Metadata } from "next";

export const metadata: Metadata = {
    ...generalMetadata,
    title: "GAPP Pediatric Program | AmeriCare Atlanta",
    description:
        "Learn about the Georgia Pediatric Program (GAPP) — in-home nursing services for medically fragile children under 21. AmeriCare helps Georgia families with eligibility and care at home.",
};

export default function GappPage() {
    return (
        <>
            <NavigationComponent />

            <div className="relative z-10">
                <ProgramDetail program={gappProgram} />
            </div>
        </>
    );
}
