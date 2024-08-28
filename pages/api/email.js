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
      to: process.env.MY_EMAIL,
      cc: email,
      subject: formattedSubject,
      text: text,
    };

    const sendMailPromise = () =>
      new Promise((resolve, reject) =>
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve("Email sent");
          } else {
            reject(err.message);
          }
        })
      );
    try {
      sendMailPromise();
      res.status(200).json({ message: req.body });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
