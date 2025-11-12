/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  let body: any;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
  }

  const GMAIL_USER = process.env.GMAIL_USER;
  const GMAIL_PASS = process.env.GMAIL_PASS;

  if (!GMAIL_USER || !GMAIL_PASS) {
    return NextResponse.json(
      { success: false, error: 'Email credentials not set' },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: GMAIL_USER, pass: GMAIL_PASS },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: GMAIL_USER,
      subject: `Portfolio Contact: ${name}`,
      text: message,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('Email sending failed:', err);
    return NextResponse.json({ success: false, error: 'Email sending failed' }, { status: 500 });
  }
}
