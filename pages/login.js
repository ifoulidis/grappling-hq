// /pages/login.js
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Login.module.css";
import Link from "next/link";

export async function getServerSideProps(context) {
  // Parse cookies using plain JavaScript
  const cookies = context.req.cookies;

  if (cookies.auth === "authenticated") {
    return {
      redirect: {
        destination: "/upload",
        permanent: false,
      },
    };
  }

  return {
    props: { loggedin: false },
  };
}

export default function Login({ loggedin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/upload");
    } else {
      setError("Invalid credentials");
    }
  };

  if (loggedin) {
    return (
      <div className={styles.container}>
        <h1>You are already logged in</h1>
        <h2>
          Do you want to <Link href="/logout">sign out?</Link>
        </h2>
      </div>
    );
  }

  return (
    <div class={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}
