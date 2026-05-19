import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, we'll use a simple placeholder
    // You'll need to add an email service API key in environment variables

    // Example with Resend (uncomment and add API key):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'contact@davidettel.com',
    //   to: 'your-email@example.com',
    //   subject: `Contact form: ${name}`,
    //   text: `From: ${name} (${email})\n\n${message}`
    // });

    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
