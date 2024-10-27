import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";

interface MailSenderOptions {
  email: string;
  subject: string;
  emailTemplate: string;
}

const mailSender = async ({
  email,
  subject,
  emailTemplate,
}: MailSenderOptions): Promise<SentMessageInfo> => {
  try {
    const testAccount = await nodemailer.createTestAccount();

    // Create a transporter using Nodemailer
    const transporter: Transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST as string,
      port: Number(process.env.EMAIL_PORT),
      secure: process.env.EMAIL_SECURE === "true",
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    const mailOptions = {
      from: `"TechScribe" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: subject,
      html: emailTemplate,
    };

    const info: SentMessageInfo = await transporter.sendMail(mailOptions);
    console.log("OTP email sent: ", info.messageId);
    return info;
  } catch (error) {
    console.error(
      "Error occurred while sending email:",
      error instanceof Error ? error.message : "Unknown error"
    );
    throw new Error("Failed to send email. Please try again later.");
  }
};

export default mailSender;
