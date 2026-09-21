interface EligibilityParams {
    firstName: string;
    lastName: string;
    medID?: string;
    email: string;
    phone: string;
    dob: string;
    address: string;
    startDate: string;
}

interface ApplicationParams {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    position: string;
    resume: string;
    coverLetter: string;
}

export const eligibilityCheck = ({ address, dob, email, firstName, lastName, phone, startDate, medID }: EligibilityParams) => {
    const username = `${firstName} ${lastName}`;

    return (`
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: "Quicksand", sans-serif;
                        font-optical-sizing: auto;
                        font-weight: 500;
                        font-style: normal;
                        background-color: #eee;
                        color: #000;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }

                    .container {
                        width: 100%;
                        max-width: 600px;
                        padding: 1rem;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }

                    .header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-bottom: 1rem;
                        border-bottom: 1px solid #444;
                    }

                    .header img {
                        height: 60px;
                    }

                    .header h2 {
                        margin: 0;
                        font-size: 1.5rem;
                    }

                    .content {
                        padding: 2rem 1rem;
                    }

                    .content p {
                        font-size: 1rem;
                        text-align: left;
                        margin: 0;
                    }

                    .details {
                        font-size: 1rem;
                        line-height: 1.5;
                    }

                    .details p {
                        margin: 0.5rem 0;
                    }

                    .details b {
                        opacity: 0.7;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://americare.sirv.com/icons/logo-png.png" alt="Company Logo">
                    </div>
                    <div class="content">
                        <p style="text-align: center; font-size: 1.15rem">New submission from ${username}</p>
                        <div class="details">
                            <p><b>First Name:</b> <span>${firstName}</span></p>
                            <p><b>Last Name:</b> <span>${lastName}</span></p>
                            <p><b>Medicaid ID:</b> <span>${medID ?? "Not provided"}</span></p>
                            <p><b>Email:</b> <span>${email}</span></p>
                            <p><b>Phone Number:</b> <span>${phone}</span></p>
                            <p><b>Date of Birth:</b> <span>${dob}</span></p>
                            <p><b>Address:</b> <span>${address}</span></p>
                            <p><b>Desired Start Date:</b> <span>${startDate}</span></p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
};

export const onlineApplication = ({ email, firstName, lastName, phone, coverLetter, position, resume }: ApplicationParams) => {
    const username = `${firstName} ${lastName}`;

    return (`
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: "Quicksand", sans-serif;
                        font-optical-sizing: auto;
                        font-weight: 500;
                        font-style: normal;
                        background-color: #eee;
                        color: #000;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                    }

                    .container {
                        width: 100%;
                        max-width: 600px;
                        padding: 1rem;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }

                    .header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-bottom: 1rem;
                        border-bottom: 1px solid #444;
                    }

                    .header img {
                        height: 60px;
                    }

                    .header h2 {
                        margin: 0;
                        font-size: 1.5rem;
                    }

                    .content {
                        padding: 2rem 1rem;
                    }

                    .content p {
                        font-size: 1rem;
                        text-align: left;
                        margin: 0;
                        padding: 0 0 1rem 0;
                    }

                    .details {
                        font-size: 1rem;
                        line-height: 1.5;
                    }

                    .details p {
                        margin: 0.5rem 0;
                    }

                    .details b {
                        opacity: 0.7;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://americare.sirv.com/icons/logo-png.png" alt="Company Logo">
                    </div>
                    <div class="content">
                        <p>New submission from ${username}</p>
                        <div class="details">
                            <p><b>First Name:</b> <span>${firstName}</span></p>
                            <p><b>Last Name:</b> <span>${lastName}</span></p>
                            <p><b>Email:</b> <span>${email}</span></p>
                            <p><b>Phone Number:</b> <span>${phone}</span></p>
                            <p><b>Position applying for:</b> <span>${position}</span></p>
                            <p><b>Attached resume:</b> <span>${resume}</span></p>
                            <br>
                            <p><b>Cover letter:</b> <br/><span style="font-size: 0.95rem; "><pre>${coverLetter}</pre></span></p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
};

export const applicationReceivedEmail = ({
    firstName,
    lastName,
    position
}: {
    firstName: string;
    lastName: string;
    position: string;
}) => `
    <html>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
            <style>
            body {
                font-family: "Quicksand", sans-serif;
                font-optical-sizing: auto;
                font-weight: 500;
                font-style: normal;
                background-color: #f9f9f9;
                color: #333;
            }
        
            .container {
                padding: 2rem;
                background-color: #fff;
                border: 1px solid #ddd;
                border-radius: 8px;
                max-width: 600px;
                margin: 0 auto;
            }
        
            .header {
                border-bottom: 1px solid #ddd;
                padding-bottom: 1rem;
                margin-bottom: 1rem;
                text-align: center;
            }
        
            .content {
                font-size: 1.15rem;
            }
        
            .footer {
                margin-top: 2rem;
                text-align: center;
                font-size: 0.9rem;
                color: #777;
            }
            </style>
        </head>
        <body>
            <div class="container">
            <div class="header">
                <img src="https://americare.sirv.com/icons/logo-png.png" height="50">
                <h2>Application Received</h2>
            </div>
            <div class="content">
                <p>Dear ${firstName} ${lastName},</p>
                <p>Thank you for applying for the <strong>${position}</strong> position at AmeriCare. We have received your application and our team is currently reviewing it.</p>
                <p>We appreciate your interest in joining our team and will be in touch with you shortly regarding the next steps in the application process.</p>
                <p>If you have any questions in the meantime, please feel free to reach out to us.</p>
                <p>Best regards,</p>
                <p>The Hiring Team</p>
            </div>
            <div class="footer">
                <p>&copy; 2024 AmeriCare. All rights reserved.</p>
            </div>
            </div>
        </body>
    </html>
`;

interface CarePathLeadParams {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    careType: string;
    serviceNeeded: string;
    location: string;
    additionalNotes: string;
}

export const carePathLead = ({ firstName, lastName, email, phone, careType, serviceNeeded, location, additionalNotes }: CarePathLeadParams) => {
    const username = `${firstName} ${lastName}`;
    const careTypeLabel = careType === "child" ? "Child / Pediatric" : "Adult / Senior";

    return (`
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: "Quicksand", sans-serif;
                        font-optical-sizing: auto;
                        font-weight: 500;
                        font-style: normal;
                        background-color: #eee;
                        color: #000;
                        margin: 0;
                        padding: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        padding: 1rem;
                        background-color: #fff;
                        border-radius: 8px;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    }
                    .header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding-bottom: 1rem;
                        border-bottom: 1px solid #444;
                    }
                    .header img {
                        height: 60px;
                    }
                    .content {
                        padding: 2rem 1rem;
                    }
                    .content p {
                        font-size: 1rem;
                        text-align: left;
                        margin: 0;
                    }
                    .details {
                        font-size: 1rem;
                        line-height: 1.5;
                    }
                    .details p {
                        margin: 0.5rem 0;
                    }
                    .details b {
                        opacity: 0.7;
                    }
                    .badge {
                        display: inline-block;
                        background-color: #6fad45;
                        color: #fff;
                        padding: 0.25rem 0.75rem;
                        border-radius: 9999px;
                        font-size: 0.85rem;
                        font-weight: 600;
                        margin-bottom: 1rem;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://americare.sirv.com/icons/logo-png.png" alt="Company Logo">
                    </div>
                    <div class="content">
                        <span class="badge">New Care Path Lead</span>
                        <p style="font-size: 1.15rem; margin-bottom: 1rem;"><strong>${username}</strong> completed the care path wizard.</p>
                        <div class="details">
                            <p><b>Name:</b> <span>${username}</span></p>
                            <p><b>Email:</b> <span>${email}</span></p>
                            <p><b>Phone:</b> <span>${phone}</span></p>
                            <p><b>Care Type:</b> <span>${careTypeLabel}</span></p>
                            <p><b>Service Needed:</b> <span>${serviceNeeded}</span></p>
                            <p><b>Location:</b> <span>${location}</span></p>
                            <p><b>Additional Notes:</b> <span>${additionalNotes || "None"}</span></p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
};

export const carePathConfirmation = ({ firstName, lastName, careType }: { firstName: string; lastName: string; careType: string }) => {
    const careTypeLabel = careType === "child" ? "pediatric" : "adult/senior";

    return (`
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
                <style>
                    body {
                        font-family: "Quicksand", sans-serif;
                        font-optical-sizing: auto;
                        font-weight: 500;
                        font-style: normal;
                        background-color: #f8f9fa;
                        color: #212529;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: auto;
                        padding: 1rem;
                        background-color: #ffffff;
                        border: 1px solid #dee2e6;
                        border-radius: 0.25rem;
                    }
                    .header {
                        text-align: center;
                        padding-bottom: 1rem;
                        border-bottom: 1px solid #dee2e6;
                    }
                    .content {
                        padding-top: 1rem;
                        font-size: 1rem;
                        line-height: 1.6;
                    }
                    .footer {
                        padding-top: 1rem;
                        border-top: 1px solid #dee2e6;
                        text-align: center;
                        font-size: 0.875rem;
                        color: #6c757d;
                    }
                    .cta {
                        display: inline-block;
                        background-color: #6fad45;
                        color: #fff;
                        text-decoration: none;
                        padding: 0.75rem 1.5rem;
                        border-radius: 8px;
                        font-weight: 600;
                        margin-top: 1rem;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://americare.sirv.com/icons/logo-png.png" alt="Company Logo" height="50">
                    </div>
                    <div class="content">
                        <p>Dear ${firstName} ${lastName},</p>
                        <p>Thank you for exploring ${careTypeLabel} care options with AmeriCare. We have received your information and a member of our care coordination team will be reaching out to you shortly.</p>
                        <p>If you need immediate assistance, please don't hesitate to call us at <strong>(404) 494-2187</strong>.</p>
                        <p>We look forward to helping you find the right care for your family.</p>
                        <p>Warm regards,</p>
                        <p><strong>The AmeriCare Team</strong></p>
                        <a href="tel:4044942187" class="cta">Call (404) 494-2187</a>
                    </div>
                    <div class="footer">
                        &copy; ${new Date().getFullYear()} AmeriCare Services Inc. All rights reserved.<br>
                        2950 Cherokee St, NW Suite 626, Kennesaw, GA 30144
                    </div>
                </div>
            </body>
        </html>
    `);
};

interface CoordinatorLeadParams {
    audience: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    bestTime: string;
    preference: string;
}

const prefLabel = (p: string) => p === "call" ? "Phone call" : p === "text" ? "Text message" : "Email";
const audienceLabel = (a: string) => a === "pediatric" ? "Child / pediatric" : a === "adult" ? "Adult / senior" : "Not sure";
const bestTimeLabel = (t: string) => t === "morning" ? "Morning (8am - 12pm)" : t === "afternoon" ? "Afternoon (12pm - 5pm)" : t === "evening" ? "Evening (5pm - 8pm)" : "Anytime";

export const coordinatorLead = ({ audience, firstName, lastName, email, phone, bestTime, preference }: CoordinatorLeadParams) => {
    const username = `${firstName} ${lastName}`;
    return (`
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
                <style>
                    body { font-family: "Quicksand", sans-serif; font-weight: 500; background-color: #eee; color: #000; margin: 0; padding: 0; display: flex; justify-content: center; align-items: center; min-height: 100vh; }
                    .container { width: 100%; max-width: 600px; padding: 1rem; background-color: #fff; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,.2); }
                    .header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 1rem; border-bottom: 1px solid #444; }
                    .header img { height: 60px; }
                    .content { padding: 2rem 1rem; }
                    .details { font-size: 1rem; line-height: 1.5; }
                    .details p { margin: 0.5rem 0; }
                    .details b { opacity: 0.7; }
                    .badge { display: inline-block; background-color: #359BA7; color: #fff; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header"><img src="https://americare.sirv.com/icons/logo-png.png" alt="Company Logo"></div>
                    <div class="content">
                        <span class="badge">Coordinator Callback Request</span>
                        <p style="font-size: 1.15rem; margin-bottom: 1rem;"><strong>${username}</strong> requested a care coordinator callback.</p>
                        <div class="details">
                            <p><b>Name:</b> ${username}</p>
                            <p><b>Email:</b> ${email}</p>
                            <p><b>Phone:</b> ${phone}</p>
                            <p><b>Who needs care:</b> ${audienceLabel(audience)}</p>
                            <p><b>Best time to contact:</b> ${bestTimeLabel(bestTime)}</p>
                            <p><b>Preferred method:</b> ${prefLabel(preference)}</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
};

export const coordinatorConfirmation = ({ firstName, lastName }: { firstName: string; lastName: string }) => `
    <html>
        <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
            <style>
                body { font-family: "Quicksand", sans-serif; font-weight: 500; background-color: #f8f9fa; color: #212529; }
                .container { width: 100%; max-width: 600px; margin: auto; padding: 1rem; background-color: #fff; border: 1px solid #dee2e6; border-radius: 0.25rem; }
                .header { text-align: center; padding-bottom: 1rem; border-bottom: 1px solid #dee2e6; }
                .content { padding-top: 1rem; font-size: 1rem; line-height: 1.6; }
                .footer { padding-top: 1rem; border-top: 1px solid #dee2e6; text-align: center; font-size: 0.875rem; color: #6c757d; }
                .cta { display: inline-block; background-color: #359BA7; color: #fff; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; margin-top: 1rem; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header"><img src="https://americare.sirv.com/icons/logo-png.png" alt="Company Logo" height="50"></div>
                <div class="content">
                    <p>Dear ${firstName} ${lastName},</p>
                    <p>Thank you for reaching out to AmeriCare. A care coordinator will contact you within one business day to discuss your care needs and guide you through the next steps.</p>
                    <p>If you need immediate assistance, please call us at <strong>(404) 494-2187</strong>.</p>
                    <p>We look forward to speaking with you.</p>
                    <p>Warm regards,<br><strong>The AmeriCare Team</strong></p>
                    <a href="tel:4044942187" class="cta">Call (404) 494-2187</a>
                </div>
                <div class="footer">&copy; ${new Date().getFullYear()} AmeriCare Services Inc. All rights reserved.</div>
            </div>
        </body>
    </html>
`;

export const generateAcknowledgementEmail = (firstName: string) => `
    <html>
    <head>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
        <style>
        body {
            font-family: "Quicksand", sans-serif;
            font-optical-sizing: auto;
            font-weight: 500;
            font-style: normal;
            background-color: #f8f9fa;
            color: #212529;
        }
        
        .container {
            width: 100%;
            max-width: 600px;
            margin: auto;
            padding: 1rem;
            background-color: #ffffff;
            border: 1px solid #dee2e6;
            border-radius: 0.25rem;
        }
        
        .header {
            text-align: center;
            padding-bottom: 1rem;
            border-bottom: 1px solid #dee2e6;
        }
        
        .content {
            padding-top: 1rem;
        }
        
        .footer {
            padding-top: 1rem;
            border-top: 1px solid #dee2e6;
            text-align: center;
            font-size: 0.875rem;
            color: #6c757d;
        }
        </style>
    </head>
    <body>
        <div class="container">
        <div class="header">
            <img src="https://americare.sirv.com/icons/logo-png.png" alt="Company Logo" height="50">
        </div>
        <div class="content">
            <p>Dear ${firstName},</p>
            <p>Thank you for reaching out to us and submitting your eligibility check form. We have received your information and our team will review it shortly.</p>
            <p>We appreciate your interest and will get back to you soon.</p>
            <p>Best regards,</p>
            <p><strong>AmeriCare</strong></p>
        </div>
        <div class="footer">
            &copy; ${new Date().getFullYear()} AmeriCare. All rights reserved.
        </div>
        </div>
    </body>
    </html>
`;