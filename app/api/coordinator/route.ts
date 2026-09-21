import { BrevoEmailClient } from "@/lib/Classes/Email";
import { coordinatorLead, coordinatorConfirmation } from "@/lib/Email Templates";
import { NextRequest, NextResponse } from "next/server";

interface CoordinatorRequestBody {
    audience: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    bestTime: string;
    preference: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: CoordinatorRequestBody = await req.json();
        const { audience, firstName, lastName, phone, email, bestTime, preference } = body;

        if (!audience || !firstName || !lastName || !phone || !email || !bestTime || !preference) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const client = new BrevoEmailClient();
        const organisationEmail = process.env.NEXT_PUBLIC_ORGANISATION_EMAIL || "support@americareinhome.com";
        const organisationName = process.env.NEXT_PUBLIC_ORGANISATION_NAME || "AmeriCare";

        const leadHtml = coordinatorLead({ audience, firstName, lastName, phone, email, bestTime, preference });
        const confirmationHtml = coordinatorConfirmation({ firstName, lastName });

        console.log("[coordinator] Sending lead email to:", organisationEmail);
        const leadResponse = await client.sendEmail(
            organisationName,
            organisationEmail,
            `${firstName} ${lastName}`,
            email,
            `Coordinator Request: ${firstName} ${lastName}`,
            leadHtml
        );

        const leadResponseText = await leadResponse.text();
        console.log("[coordinator] Lead response status:", leadResponse.status);

        if (!leadResponse.ok) {
            console.error("[coordinator] Brevo lead email failed:", leadResponseText);
            return NextResponse.json({ error: "Failed to send lead notification", details: leadResponseText }, { status: 500 });
        }

        console.log("[coordinator] Sending confirmation email to:", email);
        const confirmationResponse = await client.sendEmail(
            `${firstName} ${lastName}`,
            email,
            organisationName,
            organisationEmail,
            "AmeriCare - We'll be in touch soon",
            confirmationHtml
        );

        const confirmResponseText = await confirmationResponse.text();
        console.log("[coordinator] Confirmation response status:", confirmationResponse.status);

        if (!confirmationResponse.ok) {
            console.error("[coordinator] Confirmation email failed:", confirmResponseText);
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("[coordinator] API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
