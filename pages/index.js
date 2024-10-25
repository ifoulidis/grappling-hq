import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import HelpingUp from "@/public/images/kids-wrestling.jpg";
import { CldImage } from "next-cloudinary";

export default function Home({ setPage }) {
  setPage("home");
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <CldImage
          src="home-image"
          alt="Uploaded"
          width={2268}
          height={1267}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
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
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.4 },
          }}
          viewport={{ once: true, margin: "0px" }}
          className={styles.welcomeImage}
        >
          <Image
            style={{ boxShadow: "0px 0px 6px black" }}
            alt="Kids practicing Jiu Jitsu"
            src={HelpingUp}
            width={300}
            height={420}
          />
        </motion.div>
      </div>
      <div className={styles.homeCardCont}>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.1 },
          }}
          viewport={{ once: true, margin: "0px" }}
          className={styles.homeCard1}
        >
          <Link href="/timetable">
            <h1>Timetable</h1>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4, delay: 0.1 },
          }}
          viewport={{ once: true }}
          className={styles.homeCard2}
        >
          <Link href="/little-ninjas">
            <h1>Kids Classes</h1>
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0, delay: 0.1 }}
          whileInView={{
            y: 0,
            opacity: 1,
            transition: { duration: 0.4 },
          }}
          viewport={{ once: true, margin: "0px" }}
          className={styles.homeCard3}
        >
          <Link href="/pricing">
            <h1>Pricing</h1>
          </Link>
        </motion.div>
      </div>
      <div className={styles.bottomImage}></div>
    </div>
  );
}
