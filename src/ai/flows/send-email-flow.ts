'use server';
/**
 * @fileOverview A flow for sending an email using Resend.
 *
 * - sendEmail - A function that handles sending the email.
 * - EmailDataSchema - The Zod schema for the email data.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import { Resend } from 'resend';

// Define the schema for the form data
const EmailDataSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  businessDescription: z.string(),
  industry: z.string(),
  keyPainPoints: z.string(),
  businessGoals: z.string(),
  currentTechStack: z.string(),
});

export type EmailData = z.infer<typeof EmailDataSchema>;

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const toEmail = 'poojary.rupesh12@gmail.com';
const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

export async function sendEmail(data: EmailData): Promise<void> {
  await sendEmailFlow(data);
}

const sendEmailFlow = ai.defineFlow(
  {
    name: 'sendEmailFlow',
    inputSchema: EmailDataSchema,
    outputSchema: z.void(),
  },
  async (data) => {
    if (!resend) {
      console.error('RESEND_API_KEY is not set. Email not sent.');
      // In a real app, you might want to throw an error
      // For this example, we'll log and continue to not break the UI
      throw new Error("Email service is not configured.");
    }

    const subject = `New MEP AI Consultation Request: ${data.name}`;
    const body = `
      You have a new MEP AI consultation request:
      <br><br>
      <strong>Name:</strong> ${data.name}<br>
      <strong>Email:</strong> ${data.email}<br>
      <strong>Phone:</strong> ${data.phone || 'N/A'}<br>
      <hr>
      <strong>Industry:</strong> ${data.industry}<br>
      <strong>Business Details:</strong><br>
      <p>${data.businessDescription}</p>
      <strong>Biggest Challenge:</strong><br>
      <p>${data.keyPainPoints}</p>
      <strong>Goals:</strong><br>
      <p>${data.businessGoals}</p>
      <strong>Current Tools:</strong> ${data.currentTechStack}<br>
    `;
    
    try {
      await resend.emails.send({
        from: fromEmail,
        to: toEmail,
        subject: subject,
        html: body.replace(/\n/g, '<br>'),
      });
    } catch (error) {
      console.error("Email sending failed", error);
      throw new Error("Failed to send email.");
    }
  }
);
