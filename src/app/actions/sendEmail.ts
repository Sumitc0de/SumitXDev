"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  try {
    await resend.emails.send({
      from: "SumitOS <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `New Portfolio Contact — ${formData.name}`,
      replyTo: formData.email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6">
          <h2>🚀 New Portfolio Message</h2>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Service:</strong> ${formData.service}</p>
          <p><strong>Message:</strong></p>
          <p>${formData.message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false };
  }
}
