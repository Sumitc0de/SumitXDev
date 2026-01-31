"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(form: {
  name: string;
  email: string;
  service: string;
  message: string;
}) {
  if (!form.name || !form.email || !form.message) {
    return { success: false };
  }

  try {
    await resend.emails.send({
      from: "SumitOS <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      replyTo: form.email,
      subject: `New Portfolio Contact — ${form.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
          <h2>🚀 New Portfolio Message</h2>
          <p><strong>Name:</strong> ${form.name}</p>
          <p><strong>Email:</strong> ${form.email}</p>
          <p><strong>Service:</strong> ${form.service}</p>
          <hr />
          <p>${form.message}</p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return { success: false };
  }
}
