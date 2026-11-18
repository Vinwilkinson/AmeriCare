import { BrevoEmailClient, INTERNAL_LEAD_RECIPIENTS } from "@/lib/Classes/Email";
import { applicationReceivedEmail, onlineApplication } from "@/lib/Email Templates";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_RESUME_BYTES = 4 * 1024 * 1024;

export async function POST(req: Request) {
    try {
        const formData = await req.formData();
        const get = (key: string) => String(formData.get(key) ?? "").trim();

        const firstName = get("firstName");
        const lastName = get("lastName");
        const email = get("email");
        const phone = get("phone");
        const position = get("position");
        const employmentPref = get("employmentPref");
        const startDate = get("startDate");
        const preferredShifts = get("preferredShifts");
        const city = get("city");
        const zip = get("zip");
        const hasTransport = get("hasTransport");
        const travelRange = get("travelRange");
        const yearsExp = get("yearsExp");
        const credential = get("credential");
        const skills = get("skills");
        const experienceSummary = get("experienceSummary");
        const daysAvailable = get("daysAvailable");
        const hoursPerWeek = get("hoursPerWeek");
        const hearAboutUs = get("hearAboutUs");
        const additionalNotes = get("additionalNotes");
        const certify = formData.get("certify");

        if (!firstName || !lastName || !email || !phone || !position || !city || !zip || !hasTransport || !yearsExp) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
        }
        if (certify !== "true" && certify !== "on") {
            return NextResponse.json({ error: "Please certify that your application is accurate" }, { status: 400 });
        }

        const organisationEmail = process.env.NEXT_PUBLIC_ORGANISATION_EMAIL || "support@americareinhome.com";
        const organisationName = process.env.NEXT_PUBLIC_ORGANISATION_NAME || "AmeriCare";
        const client = new BrevoEmailClient();

        let resumeUrl = "";
        let notes = additionalNotes;
        const resume = formData.get("resume");
        if (resume && typeof resume === "object" && "size" in resume && (resume as File).size > 0) {
            const file = resume as File;
            const isPdf = file.type === "application/pdf" || file.name.toLowerCase().endsWith(".pdf");
            if (!isPdf) {
                return NextResponse.json({ error: "Please upload a PDF résumé" }, { status: 400 });
            }
            if (file.size > MAX_RESUME_BYTES) {
                return NextResponse.json({ error: "Résumé is too large (max 4 MB)" }, { status: 400 });
            }
            try {
                resumeUrl = await client.uploadAttachment(file);
            } catch (error) {
                console.error("[careers] Résumé upload failed:", error);
                notes = notes
                    ? `${notes}\n\n[Note: résumé upload failed — ask the applicant to email their résumé.]`
                    : "[Note: résumé upload failed — ask the applicant to email their résumé.]";
            }
        }

        const hrEmail = onlineApplication({
            firstName, lastName, email, phone, position, employmentPref, startDate,
            preferredShifts: preferredShifts || "Not specified",
            city, zip, hasTransport, travelRange, yearsExp, credential,
            skills: skills || "None selected",
            experienceSummary,
            daysAvailable: daysAvailable || "Not specified",
            hoursPerWeek, hearAboutUs,
            additionalNotes: notes,
            resume: resumeUrl,
            coverLetter: notes,
        });

        const applicantEmail = applicationReceivedEmail({ firstName, lastName, position });

        console.log("[careers] Sending application to:", organisationEmail, "résumé:", resumeUrl || "none");
        const leadResponse = await client.sendEmail(
            organisationName,
            organisationEmail,
            organisationName,
            organisationEmail,
            "Online Application",
            hrEmail,
            { name: `${firstName} ${lastName}`, email },
            INTERNAL_LEAD_RECIPIENTS
        );
        const leadText = await leadResponse.text();
        console.log("[careers] Application response status:", leadResponse.status);

        if (!leadResponse.ok) {
            console.error("[careers] Brevo application email failed:", leadText);
            console.error("[careers] Submission payload (for manual follow-up):", JSON.stringify({ firstName, lastName, email, phone, position, city, zip }));
            return NextResponse.json({ error: "Failed to send application", details: leadText }, { status: 500 });
        }

        const confirmationResponse = await client.sendEmail(
            `${firstName} ${lastName}`,
            email,
            organisationName,
            organisationEmail,
            "Application Received - AmeriCare",
            applicantEmail
        );
        console.log("[careers] Confirmation response status:", confirmationResponse.status);
        if (!confirmationResponse.ok) {
            console.error("[careers] Confirmation email failed:", await confirmationResponse.text());
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error("[careers] API error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
