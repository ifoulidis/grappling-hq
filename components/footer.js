import React from "react";
import styles from "../styles/Footer.module.css";
import InstagramIcon from "@/public/Instagram_Glyph_Gradient.png";
import Image from "next/image";
import { forwardRef } from "react";

export const Footer = forwardRef(function Footer(props, ref) {
  return (
    <footer className={styles.footer} ref={ref}>
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
        <h1>Phone</h1>
        <p>
          <a href="tel:+642102340038">021 023 40 038</a>
        </p>
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
});
