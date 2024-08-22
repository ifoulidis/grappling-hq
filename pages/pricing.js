import Image from "next/image";
import styles from "../styles/Pricing.module.css";
import { motion } from "framer-motion";

export default function Pricing({ setPage }) {
  setPage("pricing");
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div className={styles.pricingContainer}>
      <h1>Pricing</h1>

      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className={styles.membershipSection}
      >
        <h2>Adults Memberships</h2>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className={styles.membershipCard}
        >
          <h3>$25</h3>
          <p>Any two classes per week</p>
          {/* Add more details or benefits here */}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className={styles.membershipCard}
        >
          <h3>$39</h3>
          <p>Unlimited classes per week</p>
          {/* Add more details or benefits here */}
        </motion.div>
      </motion.section>
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className={styles.membershipSection}
      >
        <h2>Kids Memberships</h2>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className={styles.membershipCard}
        >
          <h3>$25</h3>
          <p>2 classes per week</p>
          {/* Add more details or benefits here */}
        </motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className={styles.membershipCard}
        >
          <h3>$200</h3>
          <p>Per term&mdash;10 weeks, 20 classes</p>
          {/* Add more details or benefits here */}
        </motion.div>
      </motion.section>
      <motion.section
        initial="hidden"
        animate="show"
        variants={fadeInUp}
        className={styles.membershipSection}
      >
        <h2>Free Trial</h2>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className={styles.membershipCard}
        >
          <h3>Free</h3>
          <p>Unlimited classes for 1 week</p>
          {/* Add more details or benefits here */}
        </motion.div>
      </motion.section>
    </div>
  );
}
