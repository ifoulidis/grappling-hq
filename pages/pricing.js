import Head from "next/head";
import styles from "../styles/Pricing.module.css";
import { motion } from "framer-motion";

export default function Pricing({ setPage }) {
  setPage("pricing");
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <div>
      <Head>
        <title>Grappling HQ</title>
        <meta property="og:title" content="Grappling HQ" />
        <meta
          property="og:image"
          content={`https://grapplinghq.com/chris-one-arm-choke.jpg`}
        />
        <meta
          property="og:description"
          content="Free trial, $45 for unlimited classes per week..."
        />
        <meta
          name="twitter:image"
          content={`https://grapplinghq.com/chris-one-arm-choke.jpg`}
        />
        <meta
          name="description"
          content="Free trial, $45 for unlimited classes per week..."
        />
        <meta name="twitter:title" content="Grappling HQ" />
        <meta
          name="twitter:description"
          content="Free trial, $45 for unlimited classes per week..."
        />
        <meta
          name="twitter:image"
          content={`https://grapplinghq.com/chris-one-arm-choke.jpg`}
        />
      </Head>

      <div className={styles.pricingContainer}>
        <h1>Pricing</h1>

        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className={[styles.membershipSection, styles.separator].join(" ")}
        >
          <h2>Adults Memberships</h2>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            className={styles.membershipCard}
          >
            <h3>$32</h3>
            <p>Any two classes per week</p>
            {/* Add more details or benefits here */}
          </motion.div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeInUp}
            className={styles.membershipCard}
          >
            <h3>$45</h3>
            <p>Unlimited classes per week</p>
            {/* Add more details or benefits here */}
          </motion.div>
        </motion.section>
        <motion.section
          initial="hidden"
          animate="show"
          variants={fadeInUp}
          className={[styles.membershipSection, styles.separator].join(" ")}
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
    </div>
  );
}
