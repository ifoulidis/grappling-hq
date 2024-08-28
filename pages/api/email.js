import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    try {
      const { email, name, message, subject } = req.body;

      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
        },
      });

      const mailOptions = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `Contact form: ${subject}`,
        text: `From ${email} (${name})\n${message}`,
      };

      await transport.sendMail(mailOptions);

      res.status(200).json({ message: "Email sent" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
