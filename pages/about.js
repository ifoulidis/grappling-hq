import Image from "next/image";
import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import TheCrew from "@/public/images/crew.jpg";

export default function About({ setPage }) {
  setPage("about");
  return (
    <div className={styles.aboutContainer}>
      <Image
        src={TheCrew}
        alt="The Grappling HQ crew."
        width={1000}
        height={562.5}
      />
      <div className={styles.story}>
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          Our Story: The Birth of Grappling HQ
        </motion.h1>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          In 2022, Stuart, Chris, Josh, and Kale were all searching for the
          perfect place to train. Each of us trained at different gyms, but once
          a week, we would gather to train together in Stuart&#39;s garage. We
          were united by our passion for jiu-jitsu, particularly no-gi
          grappling, and a thirst for knowledge that pushed us to want to train
          seven days a week. However, no single gym catered to all our needs, so
          we decided to create our own—Grappling HQ.
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          Our vision was to build a space that could keep pace with the
          ever-evolving sport, offering high-level coaching while supporting
          everyone from beginners to dedicated athletes. We started in a small
          basement that, to put it simply, resembled an underground fight
          club—perfect for our grassroots beginning! One of the first to join us
          was Dan, a close friend who shared our dedication and passion for the
          sport. He became an integral part of our team and played a huge role
          in our growth. Over the first two years, many friends joined us,
          contributing to the growth of Grappling HQ. We welcomed guest coaches
          and saw our own students rise to become coaches themselves, including
          Meshach, Garry, and our kids&#39; assistant coach Navjeet Singh.
        </motion.p>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          Fast forward to today, and Grappling HQ now boasts one of the largest
          training spaces in the Bay of Plenty. We offer a wide range of classes
          seven days a week, including wrestling, jiu-jitsu, and even MMA. It
          has been an incredible journey, filled with amazing like-minded
          individuals who have become close friends. A huge thank you to
          everyone who has been a part of this amazing project—we couldn&#39;t
          have done it without you!
        </motion.p>
      </div>
    </div>
  );
}
