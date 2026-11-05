import NavigationComponent from '@/app/components/NavSection';
import { Metadata } from 'next';
import BookAppointment from "@/app/HomePage Sections/BookAppointment";

import { pageMetadata } from "@/lib/MetaData";

export const metadata: Metadata = pageMetadata({
    title: "Book a Free Home Care Consultation",
    description:
        "Schedule your free in-home assessment with an AmeriCare care specialist. We serve Atlanta and surrounding communities in Georgia.",
    path: "/book-an-appointment",
});

export default function BookAppointmentPage() {
    return (
        <div className='max-2xl:pt-32 pt-24 py-8'>
            <NavigationComponent />
            <BookAppointment />
        </div>
    )
}