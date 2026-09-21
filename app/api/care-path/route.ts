import { BrevoEmailClient } from "@/lib/Classes/Email";
import { carePathLead, carePathConfirmation } from "@/lib/Email Templates";
import { NextRequest, NextResponse } from "next/server";

interface CarePathRequestBody {
    audience: string;
    need: string;
    coverage: string;
    status: string;
    zip: string;
    timeline: string;
    relationship: string;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    preference: string[];
    consent: boolean;
    additionalNotes: string;
}

export async function POST(req: NextRequest) {
    try {
        const body: CarePathRequestBody = await req.json();
        const { audience, need, coverage, status, zip, timeline, relationship, firstName, lastName, phone, email, preference, consent, additionalNotes } = body;

        if (!firstName || !lastName || !email || !phone || !audience || !need) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const client = new BrevoEmailClient();
        const organisationEmail = process.env.NEXT_PUBLIC_ORGANISATION_EMAIL || "support@americareinhome.com";
        const organisationName = process.env.NEXT_PUBLIC_ORGANISATION_NAME || "AmeriCare";
        const brevoApiKey = process.env.BREVO_API_KEY;

        console.log("[care-path] BREVO_API_KEY present:", !!brevoApiKey);
        console.log("[care-path] organisationEmail:", organisationEmail);

        const leadHtml = carePathLead({ firstName, lastName, email, phone, audience, need, coverage, status, zip, timeline, relationship, preference, additionalNotes });
        const confirmationHtml = carePathConfirmation({ firstName, lastName, audience });

        console.log("[care-path] Sending lead email to:", organisationEmail);
        const leadResponse = await client.sendEmail(
            organisationName,
            organisationEmail,
            `${firstName} ${lastName}`,
            email,
            `New Care Path Lead: ${firstName} ${lastName}`,
            leadHtml
        );

        const leadResponseText = await leadResponse.text();
        console.log("[care-path] Lead response status:", leadResponse.status);
        console.log("[care-path] Lead response body:", leadResponseText);

        if (!leadResponse.ok) {
            console.error("[care-path] Brevo lead email failed:", leadResponseText);
            return NextResponse.json({ error: "Failed to send lead notification", details: leadResponseText }, { status: 500 });
        }

        console.log("[care-path] Sending confirmation email to:", email);
        const confirmationResponse = await client.sendEmail(
            `${firstName} ${lastName}`,
            email,
            organisationName,
            organisationEmail,
            "Thank you for exploring care options with AmeriCare",
            confirmationHtml
        );

        const confirmResponseText = await confirmationResponse.text();
        console.log("[care-path] Confirmation response status:", confirmationResponse.status);

        if (!confirmationResponse.ok) {
            console.error("[care-path] Confirmation email failed:", confirmResponseText);
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("[care-path] Care path API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
