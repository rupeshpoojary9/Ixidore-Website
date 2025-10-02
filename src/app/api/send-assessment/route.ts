import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { 
      name, 
      email, 
      phone, 
      businessDescription, 
      industry, 
      keyPainPoints, 
      businessGoals, 
      currentTechStack 
    } = body;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #4b5563; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 4px; border: 1px solid #e5e7eb; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🚀 New AI Assessment Request</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              ${phone ? `
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value">${phone}</div>
              </div>
              ` : ''}
              
              <div class="field">
                <div class="label">🏢 Industry:</div>
                <div class="value">${industry}</div>
              </div>
              
              <div class="field">
                <div class="label">💼 Business Description:</div>
                <div class="value">${businessDescription}</div>
              </div>
              
              <div class="field">
                <div class="label">⚠️ Key Pain Points:</div>
                <div class="value">${keyPainPoints}</div>
              </div>
              
              <div class="field">
                <div class="label">🎯 Business Goals:</div>
                <div class="value">${businessGoals}</div>
              </div>
              
              ${currentTechStack ? `
              <div class="field">
                <div class="label">🛠️ Current Technology:</div>
                <div class="value">${currentTechStack}</div>
              </div>
              ` : ''}
            </div>
          </div>
        </body>
      </html>
    `;

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer re_bbXGV5JR_94dLDv1Xdj5xc4LuosQ1nd3f`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'onboarding@resend.dev',
        to: ['poojary.rupesh12@gmail.com'],
        reply_to: email,
        subject: `New AI Assessment Request from ${name}`,
        html: htmlContent,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend API error:', error);
      throw new Error('Failed to send email');
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' }, 
      { status: 500 }
    );
  }
}