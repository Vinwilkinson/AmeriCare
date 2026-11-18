import { BrevoEmailClient } from "@/lib/Classes/Email";
import { callBackLead, callBackConfirmation } from "@/lib/Email Templates";
import { NextRequest, NextResponse } from "next/server";

interface CallBackRequestBody {
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    who: string;
    help?: string;
    consent: boolean;
}

export async function POST(req: NextRequest) {
    try {
        const body: CallBackRequestBody = await req.json();
        const { firstName, lastName, phone, email = "", who, help = "", consent } = body;

        if (!firstName || !lastName || !phone || !who || !consent) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        const client = new BrevoEmailClient();
        const organisationEmail = process.env.NEXT_PUBLIC_ORGANISATION_EMAIL || "support@americareinhome.com";
        const organisationName = process.env.NEXT_PUBLIC_ORGANISATION_NAME || "AmeriCare";

        const leadHtml = callBackLead({ firstName, lastName, phone, email, who, help });
        const submitterReplyTo = email ? { name: `${firstName} ${lastName}`, email } : undefined;

        console.log("[call-back] Sending lead email to:", organisationEmail);
        const leadResponse = await client.sendEmail(
            organisationName,
            organisationEmail,
            organisationName,
            organisationEmail,
            `Call Back Request: ${firstName} ${lastName}`,
            leadHtml,
            submitterReplyTo
        );

        const leadResponseText = await leadResponse.text();
        console.log("[call-back] Lead response status:", leadResponse.status);

        if (!leadResponse.ok) {
            console.error("[call-back] Brevo lead email failed:", leadResponseText);
            console.error("[call-back] Submission payload (for manual follow-up):", JSON.stringify({ firstName, lastName, phone, email, who, help }));
            return NextResponse.json({ error: "Failed to send lead notification", details: leadResponseText }, { status: 500 });
        }

        if (email) {
            const confirmationHtml = callBackConfirmation({ firstName, lastName });

            console.log("[call-back] Sending confirmation email to:", email);
            const confirmationResponse = await client.sendEmail(
                `${firstName} ${lastName}`,
                email,
                organisationName,
                organisationEmail,
                "AmeriCare - We'll be in touch soon",
                confirmationHtml
            );

            const confirmResponseText = await confirmationResponse.text();
            console.log("[call-back] Confirmation response status:", confirmationResponse.status);

            if (!confirmationResponse.ok) {
                console.error("[call-back] Confirmation email failed:", confirmResponseText);
            }
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("[call-back] API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
