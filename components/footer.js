import React from "react";
import styles from "../styles/Footer.module.css";
import InstagramIcon from "@/public/Instagram_Glyph_Gradient.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h1>Social</h1>
        <a
          href="https://www.instagram.com/grapplinghq/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={InstagramIcon} width={35} height={35} />
        </a>
      </div>
      <div className={styles.section}>
        <h1>Location</h1>
        <p>32 Second Avenue, Tauranga</p>
      </div>
      <div className={styles.section}>
        <h1>Email</h1>
        <p>grapplinghq@gmail.com</p>
      </div>
      <div className={styles.createdSection}>
        <h1>Created by</h1>
        <p className={styles.createdBy}>
          <a
            href="http://ifoulidis.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Isaiah Foulidis
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
