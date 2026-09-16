import { generateFileName } from "..";
import { fetchToken } from "../functions";

export class BrevoEmailClient {
    private readonly apiKey: string;

    constructor() {
        this.apiKey = process.env.BREVO_API_KEY!;
    }

    async sendEmail(
        recipientName: string,
        recipientEmail: string,
        senderName: string,
        senderEmail: string,
        subject: string,
        htmlContent: string
    ): Promise<Response> {
        const headers = new Headers({
            'accept': 'application/json',
            'api-key': this.apiKey,
            'content-type': 'application/json',
        });

        const body = JSON.stringify({
            sender: {
                name: senderName,
                email: senderEmail,
            },
            to: [
                {
                    email: recipientEmail,
                    name: recipientName,
                },
            ],
            subject,
            htmlContent,
        });

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers,
            body,
        });

        return response;
    }

    async uploadAttachment(selectedFile: File) {
        try {
            const bearerToken = await fetchToken();

            const fileName = generateFileName(selectedFile);
            const filenameDecoded = `/attachments/${fileName}`; 
            const filenameEncoded = encodeURIComponent(filenameDecoded);
      
            const sirvUrl = `https://api.sirv.com/v2/files/upload?filename=${filenameEncoded}`;

            const response = await fetch(sirvUrl, {
                method: 'POST',
                body: selectedFile,
                headers: {
                    "Authorization": `${bearerToken}`,
                    'Content-Type': `${selectedFile.type}`
                },
            });

            if (!response.ok) {
                throw new Error(`Error uploading image: ${await response.text()}`);
            }

            return `https://americare.sirv.com${filenameDecoded}`;
            
          } catch (error) {
            console.error('Upload failed:', error);
            throw new Error(`${error}`);
          }
    }
}