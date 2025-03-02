
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    // Validate required fields
    if (!email || !name || !message) {
      return NextResponse.json({ success: false, error: "Name, email, and message are required" }, { status: 400 });
    }

    const emailResponse = await resend.emails.send({
      from: "onboarding@resend.dev", // Resend verified sender
      to: ["yogesh32y@gmail.com"], // Admin email to receive messages
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email, // Allows you to reply directly to the user
    });

    console.log("Resend Response:", emailResponse); // Debugging log

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
      data: emailResponse,
    });
  } catch (error: any) {
    console.error("Resend Error:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}

