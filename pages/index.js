import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import HelpingUp from "@/public/images/kids-wrestling.jpg";

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
      <div className={styles.welcome}>
        <div className={styles.welcomeText}>
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
            At Grappling HQ, our dedicated coaches are committed to delivering
            the highest level of martial arts instruction.
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            Whether you&#39;re a day-one student or a competitive athlete,
            you&#39;ll learn world-class techniques tailored to help you achieve
            your individual goals.
          </motion.p>
        </div>
        <div className={styles.welcomeImage}>
          <Image
            style={{ boxShadow: "0px 0px 6px black" }}
            alt="Kids practicing Jiu Jitsu"
            src={HelpingUp}
            width={300}
            height={420}
          />
        </div>
      </div>
      <div className={styles.bottomImage}></div>
    </div>
  );
}
