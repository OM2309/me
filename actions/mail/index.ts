"use server";

import resend from "@/lib/resend";

export async function sendContactEmail(data: {
    name: string;
    phone: string;
    email: string;
    message: string;
}) {
    try {
        await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: ["23anuragsharma@gmail.com"],
            subject: `New Message from ${data.name}`,
            replyTo: data.email,
            text: `
            Name: ${data.name}
            Phone: ${data.phone}
            Email: ${data.email}

            Message:
            ${data.message}
                `.trim(),
            html: `
                    <div style="font-family: sans-serif; padding: 20px; background: #0f0f0f; color: #e4e4e7; border-radius: 12px;">
                    <h2>New Contact Form Message</h2>
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Phone:</strong> ${data.phone}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <hr style="border-color: #27272a;">
                    <p><strong>Message:</strong></p>
                    <p style="white-space: pre-wrap;">${data.message}</p>
                    <br>
                    <small>Sent from your portfolio contact form</small>
                    </div>
                `,
        });

        return { success: true };
    } catch (error) {
        console.error("Resend error:", error);
        return { success: false, error: "Failed to send email" };
    }
}
