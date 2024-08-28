import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { subject, name, email, message } = req.body;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const text = `From ${email} (${name})\n${message}`;
    const formattedSubject = `Contact form: ${subject}`;

    const mailOptions = {
      from: process.env.MY_EMAIL,
      to: "isaiahemails@gmail.com",
      cc: email,
      subject: formattedSubject,
      text: text,
    };

    try {
      await transport.sendMail(mailOptions);
      res.status(200).json({ message: "Email Sent!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
