import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey || apiKey === 'YOUR_NEW_KEY_HERE' || apiKey === 'your_resend_api_key_here') {
            console.error('[Contact API] RESEND_API_KEY is not configured in .env.local');
            return NextResponse.json(
                { error: 'Email service is not configured. Please contact the site owner.' },
                { status: 503 }
            );
        }

        const resend = new Resend(apiKey);

        const { name, email, message } = (await request.json()) as {
            name: string;
            email: string;
            message: string;
        };

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: 'contact@mayoka.dev',
            to: 'john@mayoka.dev',
            subject: `New Contact from ${name} — mayoka.dev`,
            reply_to: email,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00ff88;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #222;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="background: #0a0f14; padding: 16px; border-radius: 8px; color: #ccc;">
            ${message.replace(/\n/g, '<br />')}
          </div>
          <hr style="border: 1px solid #222; margin-top: 24px;" />
          <p style="font-size: 12px; color: #666;">Sent from the contact form at mayoka.dev</p>
        </div>
      `,
        });

        if (error) {
            console.error('[Contact API] Resend error:', error.message);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}

