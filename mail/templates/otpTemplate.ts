interface EmailTemplateProps {
  otp?: string;
  resetLink?: string;
}

export const otpTemplate = (otp: string): string => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Verify Your TechScribe Account</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
        
        body {
          font-family: 'Inter', sans-serif;
          line-height: 1.6;
          color: #E5E7EB;
          background-color: #111827;
          margin: 0;
          padding: 0;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background: linear-gradient(to bottom, #1F2937, #111827);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .header {
          background: linear-gradient(135deg, #D946EF, #8B5CF6);
          color: #ffffff;
          text-align: center;
          padding: 24px;
        }
        .logo {
          font-size: 32px;
          font-weight: 600;
          margin: 0;
          background: linear-gradient(135deg, #fff, #E5E7EB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .content {
          padding: 32px;
          text-align: center;
        }
        .title {
          font-size: 24px;
          color: #D946EF;
          margin-bottom: 24px;
          font-weight: 600;
        }
        .otp {
          font-size: 36px;
          font-weight: 600;
          color: #8B5CF6;
          letter-spacing: 8px;
          margin: 32px 0;
          padding: 16px;
          background: rgba(139, 92, 246, 0.1);
          border-radius: 8px;
        }
        .message {
          margin-bottom: 24px;
          color: #E5E7EB;
        }
        .footer {
          background: #1F2937;
          text-align: center;
          padding: 24px;
          font-size: 14px;
          color: #9CA3AF;
        }
        .social-icons {
          margin-top: 20px;
        }
        .social-icons a {
          display: inline-block;
          margin: 0 12px;
          color: #D946EF;
          text-decoration: none;
        }
        a {
          color: #8B5CF6;
          text-decoration: none;
        }
        a:hover {
          color: #D946EF;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 class="logo">TechScribe</h1>
        </div>
        <div class="content">
          <h2 class="title">Verify Your Account</h2>
          <p class="message">Welcome to TechScribe, your platform for sharing tech knowledge and insights. To complete your registration and join our community of tech enthusiasts, please use the following verification code:</p>
          <div class="otp">${otp}</div>
          <p class="message">This code will expire in 5 minutes. If you didn't request this verification, please ignore this email.</p>
          <p>Get ready to contribute to the tech community with TechScribe!</p>
        </div>
        <div class="footer">
          <p>Need help? Our developer support team is here to assist you.</p>
          <p>Contact us at <a href="mailto:support@techscribe.dev">support@techscribe.dev</a></p>
          <div class="social-icons">
            <a href="#" title="GitHub">⌨️</a>
            <a href="#" title="Twitter">🐦</a>
            <a href="#" title="LinkedIn">💼</a>
            <a href="#" title="Discord">💭</a>
          </div>
        </div>
      </div>
    </body>
    </html>`;
};
