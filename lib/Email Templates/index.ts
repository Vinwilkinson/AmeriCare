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