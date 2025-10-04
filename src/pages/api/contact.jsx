import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, message } = req.body;

    const msg = {
      to: "mohdabbakarr@gmail.com",
      from: "contact@bytedesign.com.ng",
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}

This message was sent from your website contact form.
  `,
      html: `
<table style="width:100%; max-width:600px; margin:auto; font-family:Arial, sans-serif; border-collapse:collapse;">
  <tr>
    <td style="background-color:#004030; padding:20px; color:#ffffff; text-align:center; font-size:20px; font-weight:bold;">
      Websitesbymasud Contact Form
    </td>
  </tr>
  <tr>
    <td style="padding:20px; background-color:#FFF9E5; color:#1f2937; font-size:16px;">
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    </td>
  </tr>
  <tr>
    <td style="padding:15px; text-align:center; font-size:12px; color:#6b7280; background-color:#DCD0A8;">
      This message was sent from your website contact form.
    </td>
  </tr>
</table>
  `,
    };

    await sgMail.send(msg);

    res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
}
