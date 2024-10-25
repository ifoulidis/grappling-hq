// /pages/logout.js
import { useEffect } from "react";
import { useRouter } from "next/router";
import { serialize } from "cookie";

export async function getServerSideProps({ res }) {
  // Clear the auth cookie
  const cookie = serialize("auth", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });

  res.setHeader("Set-Cookie", cookie);

  return {
    props: {}, // No specific props needed
  };
}

export default function LogoutPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to login page after 3 seconds
    const timer = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, [router]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Logging out successful</h1>
      <p>You will be redirected to the login page shortly.</p>
    </div>
  );
}
