import { Metadata } from "next";

export const generalMetadata: Metadata = {
    title: 'AmerICare Home Health | Atlanta’s Award Winning Home Health Provider',
    description: "Experience personalized in home care delivered to your doorstep. Learn more about Atlanta’s top-rated home health care provider. Award-winning health services for your family's health and well-being. Looking for skilled home care, companionship, physical therapy and more? Contact us today!",
    keywords: [
        'home healthcare Atlanta',
        'elderly care Atlanta',
        'medically fragile children care Atlanta',
        'compassionate caregivers',
        'personalized care plans',
        'in-home assessment',
        'quality home care',
        'senior home care Atlanta',
        'professional caregivers Atlanta',
        'Alzheimer’s care Atlanta',
        'dementia care Atlanta',
        'respite care Atlanta',
        'end-of-life care Atlanta',
        'hospice support Atlanta',
        'home nursing Atlanta',
        'in-home health services',
        'customized care plans',
        'family collaboration healthcare',
        'trusted home healthcare',
        'licensed caregivers',
        'certified nursing assistants',
        'registered nurses',
        '24/7 home care services',
        'rehabilitation care Atlanta',
        'post-surgery home care',
        'physical therapy at home',
        'occupational therapy at home',
        'speech therapy at home',
        'holistic care plans',
        'mental health support at home',
        'emotional well-being care',
        'home safety evaluations',
        'chronic illness management',
        'diabetes care at home',
        'heart disease care at home',
        'palliative care Atlanta',
        'long-term care services',
        'short-term care services',
        'companionship services',
        'home health aides',
        'personal care assistants',
        'meal preparation services',
        'medication management',
        'mobility assistance',
        'bathing and grooming assistance',
        'toileting and incontinence care',
        'light housekeeping services',
        'transportation services',
        'elder care support',
        'home health evaluations',
        'caregiver matching service',
        'personalized healthcare plans',
        'senior living assistance',
        'in-home support services',
        'comprehensive home healthcare',
        'care management services',
        'telehealth services',
        'virtual care consultations',
        'at-home diagnostic services',
        'health monitoring at home',
        'special needs care Atlanta',
        'caregiver support programs',
        'home healthcare consulting',
        'senior companionship Atlanta',
        'caregiver training and education',
        'home care for veterans',
        'post-hospitalization care',
        'orthopedic care at home',
        'neurological care at home',
        'stroke recovery at home',
        'Parkinson’s care at home',
        'multiple sclerosis care at home',
        'home wound care',
        'IV therapy at home',
        'respiratory care at home',
        'pediatric home care',
        'child healthcare services',
        'infant care at home',
        'adolescent care at home',
        'postpartum care at home',
        'family health support',
        'caregiver respite programs',
        'home care assistance',
        'senior care services',
        'home care planning',
        'private duty nursing',
        'elder care management',
        'personal home care',
        'affordable home care services',
        'home health monitoring',
        'in-home medical care',
        'licensed home health providers'  // Include relevant keywords from your list
    ],
    authors: [{name: "AmeriCare", url: "https://americareinhome.com/"}, {name: "Fabiconcept", url: "fabiconcept.online"}],  // Not provided in the information
    creator: 'Calvin Wilkinson MPH',  // Company name as creator
    openGraph: {
        title: 'AmerICare Home Health | Atlanta’s Award Winning Home Health Provider',  // Consistent title
        description: "Experience personalized in home care delivered to your doorstep. Learn more about Atlanta’s top-rated home health care provider. Award-winning health services for your family's health and well-being. Looking for skilled home care, companionship, physical therapy and more? Contact us today!",  // Consistent description
        url: 'https://americareinhome.com/',  // Replace with your actual website URL
        locale: 'en_US',  // Assuming US English content
        images: [
            {
                url: 'https://americare.sirv.com/americare-bg.jpg', // Replace with a relevant AmeriCare image URL
                width: 978,  // Adjust width for optimal display
                height: 782,  // Adjust height for optimal display
                alt: 'AmeriCare Caregiver Assisting Senior Client',  // Descriptive alt text
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Compassionate Home Healthcare | AmeriCare Atlanta',  // Consistent title
        description: 'AmeriCare provides personalized, compassionate home healthcare for seniors and medically fragile children. Our structured approach ensures a perfect match with qualified caregivers, delivering quality care to enhance well-being. Free in-home assessment.',  // Consistent description
        images: ['https://americare.sirv.com/rusty-watson-yIGinlYA6t8-unsplash.jpg'],  // Replace with the same image URL as openGraph
    },
    icons: {
        // Consider using a favicon generator for various icon sizes
        icon: 'https://americare.sirv.com/icons/Favicons/android-chrome-192x192.png',
        shortcut: 'https://americare.sirv.com/icons/Favicons/android-chrome-512x512.png',
        apple: 'https://americare.sirv.com/icons/Favicons/android-chrome-512x512.png',
        other: {
            rel: 'https://americare.sirv.com/icons/Favicons/favicon.ico',
            url: 'https://americare.sirv.com/icons/Favicons/favicon.ico',
        },
    },
    robots: {  // You can adjust these settings as needed for SEO strategy
        index: true,  // Allow indexing by search engines
        follow: true,  // Allow following links
        nocache: true,  // Set cache-control to no-cache
        googleBot: {
            index: true,  // Allow Google to index pages
            follow: true,  // Allow Google to follow links
            noimageindex: false,  // Allow Google to index images (consider for SEO)
            'max-video-preview': -1,  // No limit on video previews
            'max-image-preview': 'large',  // Allow large image previews
            'max-snippet': -1,  // No limit on snippet length
        },
    },
};