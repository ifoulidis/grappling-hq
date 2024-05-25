import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import NaviagtionBar from "../components/navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import KidsClass from "@/public/images/kids-wrestling.jpg";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const itemLeft = {
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const itemRight = {
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export default function Home({ setPage }) {
  setPage("home");
  return (
    <div className={styles.container}>
      <div className={styles.main}></div>
      <div class={styles.welcome}>
        <div class={styles.welcomeText}>
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            Welcome to Grappling HQ
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            Grappling HQ is a cutting edge Jiu Jitsu gym in the Tauranga CBD
            with sessions 7 days a week!
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            We offer classes for all skill levels, children and adults, intense
            training to get you competition ready, and weekly rolls.
          </motion.p>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            We love what we do, so you&apos;ll often find us on the mats on
            public holidays too!
          </motion.p>
          <Link href="/contact?">
            <motion.div
              className={styles.button}
              whileHover={{
                scale: 1.05,
                transition: { delay: 0, duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ x: 100, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.3 },
              }}
            >
              Visit!
            </motion.div>
          </Link>
        </div>
        <div className={styles.welcomeImage}>
          <Image
            style={{ boxShadow: "0px 0px 6px black" }}
            alt="Kids practicing Jiu Jitsu"
            src={KidsClass}
            width={300}
            height={420}
          />
        </div>
      </div>
      <div className={styles.bottomImage}></div>
    </div>
  );
}
