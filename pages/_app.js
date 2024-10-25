import { Footer } from "@/components/footer";
import "../styles/globals.css";
import NavigationBar from "@/components/navbar";
import { Rubik } from "next/font/google";
import { useState, useRef } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useInView } from "framer-motion";

// If loading a variable font, you don't need to specify the font weight
const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
});

export default function App({ Component, pageProps }) {
  const [page, setPage] = useState("home");
  const footerRef = useRef(null);
  const isInView = useInView(footerRef);

  return (
    <main className={rubik.className}>
      <NavigationBar page={page} footerVisible={isInView} />
      <Component {...pageProps} setPage={setPage} />
      <GoogleAnalytics gaId="G-5D101MQKZW" />
      <Footer ref={footerRef} />
    </main>
  );
}
