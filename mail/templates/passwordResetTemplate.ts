export const passwordResetTemplate = (resetLink: string): string => {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Reset Your TechScribe Password</title>
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
        .message {
          margin-bottom: 24px;
          color: #E5E7EB;
        }
        .button {
          display: inline-block;
          background: linear-gradient(135deg, #D946EF, #8B5CF6);
          color: #ffffff;
          text-decoration: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin: 24px 0;
          transition: opacity 0.3s ease;
        }
        .button:hover {
          opacity: 0.9;
        }
        .link {
          background: rgba(139, 92, 246, 0.1);
          padding: 16px;
          border-radius: 8px;
          word-break: break-all;
          margin: 24px 0;
          color: #8B5CF6;
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
          <h2 class="title">Reset Your Password</h2>
          <p class="message">We received a request to reset your password for your TechScribe account. If you didn't make this request, please ignore this email.</p>
          <p class="message">Click the button below to reset your password:</p>
          <a href="${resetLink}" class="button">Reset Password</a>
          <p class="message">If the button doesn't work, copy and paste this link into your browser:</p>
          <div class="link">${resetLink}</div>
          <p>This link will expire in 1 hour for security reasons.</p>
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
