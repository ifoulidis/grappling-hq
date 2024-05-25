import Footer from "@/components/footer";
import "../styles/globals.css";
import NavigationBar from "@/components/navbar";
import { Rubik } from "next/font/google";
import { useState } from "react";

// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const [page, setPage] = useState("home");
  return (
    <main className={rubik.className}>
      <NavigationBar page={page} />
      <Component {...pageProps} setPage={setPage} />
      <Footer />
    </main>
  );
}
