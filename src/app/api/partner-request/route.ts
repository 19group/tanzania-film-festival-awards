import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER!,
      pass: process.env.EMAIL_PASS!,
    },
  });

  // Email to admin
  await transporter.sendMail({
    from: `"TAFFA Partnerships" <${process.env.EMAIL_USER}>`,
    to: "taffafestival@studio19.co.tz",
    subject: "New Partnership Request",
    html: `
      <h3>New Partner Interest</h3>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Message:</strong> ${data.message}</p>
    `,
  });

  // Auto email to sender
  await transporter.sendMail({
    from: `"TAFFA Partnerships" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: "Thank you for partnering with TAFFA",
    html: `
      <h2 style="color:#E4B34C">Thank you for your interest!</h2>
      <p>Dear ${data.name},</p>
      <p>
        Thank you for reaching out to collaborate with the 
        <strong>Tanzania Film Festival & Awards (TAFFA)</strong>.
      </p>

      <p>Our branding package and partnership details will be shared with you soon.</p>

      <p style="margin-top:20px;">Warm regards,<br/>TAFFA Team</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
