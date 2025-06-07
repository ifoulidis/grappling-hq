import { Footer } from "@/components/footer";
import "../styles/globals.css";
import NavigationBar from "@/components/navbar";
import { Rubik } from "next/font/google";
import { useState, useRef } from "react";
import Script from "next/script";
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
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5D101MQKZW');
          `}
      </Script>
      <Footer ref={footerRef} />
    </main>
  );
}
