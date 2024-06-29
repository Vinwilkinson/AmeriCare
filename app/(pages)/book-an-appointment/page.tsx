import NavigationComponent from '@/app/components/NavSection';
import { generalMetadata } from '@/lib/MetaData';
import { Metadata } from 'next';
import BookAppointment from "@/app/HomePage Sections/BookAppointment";

export const metadata: Metadata = { ...generalMetadata, title: "Book an Appointment | AmeriCare Atlanta" };


export default function BookAppointmentPage() {
    return (
        <div className='max-2xl:pt-32 pt-24 py-8'>
            <NavigationComponent />
            <BookAppointment />
        </div>
    )
}