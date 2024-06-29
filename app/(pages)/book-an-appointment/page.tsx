import NavigationComponent from '@/app/components/NavSection';
import { generalMetadata } from '@/lib/MetaData';
import { Metadata } from 'next';
import BookAppointment from "@/app/HomePage Sections/BookAppointment";

export const metadata: Metadata = { ...generalMetadata, title: "Thank you | AmeriCare Atlanta" };


export default function ThankYouPage() {
    return (
        <div className='max-2xl:pt-32 py-8'>
            <NavigationComponent />
            <BookAppointment />
        </div>
    )
}