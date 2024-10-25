// /pages/api/login.js
import { serialize } from "cookie";

export default function handler(req, res) {
  const { username, password } = req.body;

  console.log("Received credentials:", { username, password });
  console.log("Expected credentials:", {
    expectedUsername: process.env.USERNAME,
    expectedPassword: process.env.PASSWORD,
  });

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    const cookie = serialize("auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 3600 * 24 * 30, // 30 days
      path: "/",
    });
    res.setHeader("Set-Cookie", cookie);
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
}
