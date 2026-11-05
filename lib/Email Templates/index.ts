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
    // extended employment application fields
    employmentPref?: string;
    startDate?: string;
    preferredShifts?: string;
    city?: string;
    zip?: string;
    hasTransport?: string;
    travelRange?: string;
    yearsExp?: string;
    credential?: string;
    skills?: string;
    experienceSummary?: string;
    daysAvailable?: string;
    hoursPerWeek?: string;
    hearAboutUs?: string;
    additionalNotes?: string;
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

export const onlineApplication = ({
    email, firstName, lastName, phone, position, resume,
    employmentPref, startDate, preferredShifts,
    city, zip, hasTransport, travelRange,
    yearsExp, credential, skills, experienceSummary,
    daysAvailable, hoursPerWeek, hearAboutUs,
    additionalNotes,
}: ApplicationParams) => {
    const username = `${firstName} ${lastName}`;

    const row = (label: string, value: string | undefined) =>
        value ? `<tr><td style="padding:6px 12px 6px 0;font-weight:600;color:#555;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0">${value}</td></tr>` : "";

    return (`
        <html>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap" rel="stylesheet">
                <style>
                    body { font-family: "Quicksand", sans-serif; font-weight: 500; background-color: #eee; color: #000; margin: 0; padding: 20px; }
                    .container { width: 100%; max-width: 640px; margin: 0 auto; background-color: #fff; border-radius: 10px; box-shadow: 0 4px 12px rgba(0,0,0,.15); overflow: hidden; }
                    .header { background: #b3262e; padding: 20px 28px; display: flex; align-items: center; gap: 14px; }
                    .header img { height: 48px; }
                    .header h2 { margin: 0; color: #fff; font-size: 1.25rem; }
                    .badge { display: inline-block; background: #b3262e; color: #fff; padding: 3px 12px; border-radius: 99px; font-size: 0.78rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 14px; }
                    .section { padding: 22px 28px; border-bottom: 1px solid #f0ece8; }
                    .section:last-child { border-bottom: none; }
                    .section-title { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.5px; font-weight: 800; color: #b3262e; margin-bottom: 10px; }
                    table { border-collapse: collapse; width: 100%; font-size: 0.95rem; }
                    .notes { background: #faf8f6; border-radius: 6px; padding: 12px 14px; font-size: 0.9rem; color: #444; white-space: pre-wrap; }
                    .resume-link { color: #b3262e; word-break: break-all; }
                    .footer { background: #f7f7f5; padding: 14px 28px; font-size: 0.8rem; color: #888; text-align: center; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <img src="https://americare.sirv.com/icons/logo-png.png" alt="AmeriCare">
                        <h2>New Employment Application</h2>
                    </div>

                    <div class="section">
                        <span class="badge">New Application</span>
                        <p style="margin:0 0 4px 0;font-size:1.1rem"><strong>${username}</strong> submitted an employment application.</p>
                    </div>

                    <div class="section">
                        <div class="section-title">01 · Opportunity</div>
                        <table>
                            ${row("Position", position)}
                            ${row("Employment preference", employmentPref)}
                            ${row("Available start date", startDate || "Not specified")}
                            ${row("Preferred shifts", preferredShifts)}
                        </table>
                    </div>

                    <div class="section">
                        <div class="section-title">02 · Contact</div>
                        <table>
                            ${row("Name", username)}
                            ${row("Email", email)}
                            ${row("Phone", phone)}
                            ${row("City", city)}
                            ${row("ZIP", zip)}
                            ${row("Reliable transportation", hasTransport)}
                            ${row("Willing to travel", travelRange)}
                        </table>
                    </div>

                    <div class="section">
                        <div class="section-title">03 · Experience & Credentials</div>
                        <table>
                            ${row("Years of experience", yearsExp)}
                            ${row("Current credential", credential)}
                            ${row("Skills / specialties", skills)}
                        </table>
                        ${experienceSummary ? `<div class="notes" style="margin-top:10px">${experienceSummary}</div>` : ""}
                    </div>

                    <div class="section">
                        <div class="section-title">04 · Availability</div>
                        <table>
                            ${row("Days available", daysAvailable)}
                            ${row("Hours per week", hoursPerWeek)}
                            ${row("How they heard about us", hearAboutUs)}
                        </table>
                    </div>

                    ${additionalNotes ? `
                    <div class="section">
                        <div class="section-title">Additional notes</div>
                        <div class="notes">${additionalNotes}</div>
                    </div>` : ""}

                    ${resume ? `
                    <div class="section">
                        <div class="section-title">Résumé</div>
                        <a class="resume-link" href="${resume}">${resume}</a>
                    </div>` : ""}

                    <div class="footer">AmeriCare Services Inc. &bull; (404) 494-2187 &bull; support@americareinhome.com</div>
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
    audience: string;
    need: string;
    coverage: string;
    status: string;
    zip: string;
    timeline: string;
    relationship: string;
    preference: string[];
    additionalNotes: string;
}

export const carePathLead = ({ firstName, lastName, email, phone, audience, need, coverage, status, zip, timeline, relationship, preference, additionalNotes }: CarePathLeadParams) => {
    const username = `${firstName} ${lastName}`;
    const audienceLabel = audience === "pediatric" ? "Child / Pediatric" : "Adult / Senior";
    const prefLabels = preference.map(p => p === "call" ? "Phone call" : p === "text" ? "Text message" : "Email").join(", ");

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
                    .content p { font-size: 1rem; text-align: left; margin: 0; }
                    .details { font-size: 1rem; line-height: 1.5; }
                    .details p { margin: 0.5rem 0; }
                    .details b { opacity: 0.7; }
                    .badge { display: inline-block; background-color: #6fad45; color: #fff; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
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
                            <p><b>Name:</b> ${username}</p>
                            <p><b>Email:</b> ${email}</p>
                            <p><b>Phone:</b> ${phone}</p>
                            <p><b>Audience:</b> ${audienceLabel}</p>
                            <p><b>Service Needed:</b> ${need}</p>
                            <p><b>Coverage:</b> ${coverage || "N/A"}</p>
                            <p><b>Status:</b> ${status || "N/A"}</p>
                            <p><b>ZIP:</b> ${zip || "N/A"}</p>
                            <p><b>Timeline:</b> ${timeline || "N/A"}</p>
                            <p><b>Relationship:</b> ${relationship || "N/A"}</p>
                            <p><b>Contact Preference:</b> ${prefLabels || "N/A"}</p>
                            <p><b>Additional Notes:</b> ${additionalNotes || "None"}</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
};

export const carePathConfirmation = ({ firstName, lastName, audience }: { firstName: string; lastName: string; audience: string }) => {
    const audienceLabel = audience === "pediatric" ? "pediatric" : "adult/senior";

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
                        <p>Thank you for exploring ${audienceLabel} care options with AmeriCare. We have received your information and a member of our care coordination team will be reaching out to you shortly.</p>
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

interface CallBackLeadParams {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    who: string;
    help: string;
}

export const callBackLead = ({ firstName, lastName, phone, email, who, help }: CallBackLeadParams) => {
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
                    .badge { display: inline-block; background-color: #397b4b; color: #fff; padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.85rem; font-weight: 600; margin-bottom: 1rem; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header"><img src="https://americare.sirv.com/icons/logo-png.png" alt="Company Logo"></div>
                    <div class="content">
                        <span class="badge">Callback Request</span>
                        <p style="font-size: 1.15rem; margin-bottom: 1rem;"><strong>${username}</strong> requested a call back.</p>
                        <div class="details">
                            <p><b>Name:</b> ${username}</p>
                            <p><b>Phone:</b> ${phone}</p>
                            <p><b>Email:</b> ${email || "Not provided"}</p>
                            <p><b>Who needs care:</b> ${who}</p>
                            <p><b>Looking for:</b> ${help || "Not specified"}</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `);
};

export const callBackConfirmation = ({ firstName, lastName }: { firstName: string; lastName: string }) => `
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
                .cta { display: inline-block; background-color: #397b4b; color: #fff; text-decoration: none; padding: 0.75rem 1.5rem; border-radius: 8px; font-weight: 600; margin-top: 1rem; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header"><img src="https://americare.sirv.com/icons/logo-png.png" alt="Company Logo" height="50"></div>
                <div class="content">
                    <p>Dear ${firstName} ${lastName},</p>
                    <p>Thank you for reaching out to AmeriCare. We have received your call back request and a member of our team will follow up with you soon.</p>
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