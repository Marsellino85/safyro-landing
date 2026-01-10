import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Insert into Supabase waitlist table
    const { error: dbError } = await supabase
      .from('waitlist')
      .insert([{ email: normalizedEmail }]);

    if (dbError) {
      // Check if it's a duplicate email error
      if (dbError.code === '23505') {
        return NextResponse.json(
          { error: 'This email is already on the waitlist' },
          { status: 409 }
        );
      }

      console.error('Supabase error:', dbError);
      return NextResponse.json(
        { error: 'Failed to add email to waitlist' },
        { status: 500 }
      );
    }

    // Send welcome email via Resend
    try {
      await resend.emails.send({
        from: 'SAFYRO <onboarding@resend.dev>', // Změň na hello@safyro.io po verify domény
        to: normalizedEmail,
        subject: 'Welcome to SAFYRO Beta Waitlist! 🚀',
        html: getWelcomeEmailHTML(normalizedEmail),
      });
    } catch (emailError) {
      // Log but don't fail - user is already in DB
      console.error('Email send error:', emailError);
    }

    return NextResponse.json({ 
      success: true,
      message: 'Successfully joined the waitlist! Check your email.'
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Welcome email HTML template
function getWelcomeEmailHTML(email: string): string {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to SAFYRO</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #f8fafc;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header -->
          <tr>
            <td style="padding: 48px 48px 32px; text-align: center; background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border-radius: 12px 12px 0 0;">
              <h1 style="margin: 0; font-size: 32px; font-weight: bold; color: #ffffff;">SAFYRO</h1>
              <p style="margin: 8px 0 0; font-size: 16px; color: rgba(255, 255, 255, 0.8);">Where Precision Meets Freedom</p>
            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding: 40px 48px;">
              <h2 style="margin: 0 0 16px; font-size: 24px; font-weight: 600; color: #0F172A;">Welcome to the Beta Waitlist! 🎉</h2>
              
              <p style="margin: 0 0 16px; font-size: 16px; line-height: 1.6; color: #334155;">
                Thank you for joining the SAFYRO beta waitlist! You're now among the first to experience the platform that combines Waterfall precision with Agile flexibility.
              </p>

              <p style="margin: 0 0 24px; font-size: 16px; line-height: 1.6; color: #334155;">
                Here's what happens next:
              </p>

              <ul style="margin: 0 0 24px; padding-left: 24px; font-size: 16px; line-height: 1.8; color: #334155;">
                <li>We'll send you <strong>development updates</strong> as we build SAFYRO</li>
                <li>You'll get <strong>early access</strong> when we launch beta (Spring 2026)</li>
                <li>Your feedback will <strong>shape the platform</strong> before public release</li>
              </ul>

              <div style="background-color: #F1F5F9; border-left: 4px solid #3B82F6; padding: 16px 20px; margin: 24px 0; border-radius: 4px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #475569;">
                  <strong>Beta Launch:</strong> Spring 2026<br>
                  <strong>Your Position:</strong> Priority Access Group<br>
                  <strong>Next Update:</strong> January 2026
                </p>
              </div>

              <p style="margin: 24px 0 0; font-size: 16px; line-height: 1.6; color: #334155;">
                Questions? Just reply to this email – I read every message personally.
              </p>

              <p style="margin: 16px 0 0; font-size: 16px; line-height: 1.6; color: #334155;">
                Best regards,<br>
                <strong>Jan</strong><br>
                <span style="color: #64748B; font-size: 14px;">Founder, SAFYRO</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 48px; background-color: #F8FAFC; border-radius: 0 0 12px 12px; text-align: center; border-top: 1px solid #E2E8F0;">
              <p style="margin: 0 0 8px; font-size: 14px; color: #64748B;">
                <a href="https://safyro.io" style="color: #3B82F6; text-decoration: none;">safyro.io</a>
              </p>
              <p style="margin: 0; font-size: 12px; color: #94A3B8;">
                You're receiving this because you joined the SAFYRO beta waitlist.<br>
                ${email}
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}