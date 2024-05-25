import Image from "next/image";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import ChrisChoking from "@/public/images/chris-one-arm-choke.jpg";

export default function About({ setPage }) {
  setPage("about");
  return (
    <div className={styles.container}>
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
            Chris
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            Chris is a Brazilian Jiu Jitsu brown belt competing in BJJ and MMA.
            After being a builder for a decade, Chris decided to turn his love
            of grappling into a profession. With a passion for the sport, years
            of experience and a sharp mind for the game, you&apos;re in good
            hands.
          </motion.p>
        </div>
        <div className={styles.welcomeImage}>
          <Image
            style={{ boxShadow: "0px 0px 6px black" }}
            alt="Kids practicing Jiu Jitsu"
            src={ChrisChoking}
            width={400}
            height={300}
          />
        </div>
      </div>
      <div className={styles.bottomImage}></div>
    </div>
  );
}
