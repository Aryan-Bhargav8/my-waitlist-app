import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { WaitlistEmail } from '../emails/WaitlistEmail';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: parseInt(process.env.EMAIL_PORT || '587'),
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendEmail({ to, name }) {
  const emailHtml = render(WaitlistEmail({ name }));

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject: "Welcome to Lexicon Waitlist!",
    html: emailHtml,
  });
}