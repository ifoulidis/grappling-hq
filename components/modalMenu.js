import { motion } from "framer-motion";
import Image from "next/image";
import Backdrop from "./Backdrop";
import styles from "../styles/ModalMenu.module.css";
import Link from "next/link";
import Logo from "@/public/images/hq-red-black-outline.png";

const slideUp = {
  hidden: {
    y: "100%", // Initially, the modal is off the screen below (100% of its height)
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: "-100%", // Slide the modal off the screen below (100% of its height)
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const ModalMenu = ({ handleClose, page }) => {
  const isAbout = page === "about";
  const isTimetable = page === "timetable";
  const isContact = page === "contact";
  const isNinjas = page === "little-ninjas";
  const isPricing = page === "pricing";
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className={styles.menuModal}
        variants={slideUp}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        <Image
          src={Logo}
          width={48}
          height={27}
          className={styles.logo}
          alt="Brand logo"
        />
        <button className={styles.closeButton} onClick={handleClose}>
          &#x2715;
        </button>
        <motion.div
          className={styles.linkContainter}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
        >
          <Link
            href="/about"
            className={`${styles.navLinks} ${isAbout ? styles.active : ""}`}
          >
            About
          </Link>
        </motion.div>
        <motion.div
          className={styles.linkContainter}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
        >
          <Link
            href="/timetable"
            className={`${styles.navLinks} ${isTimetable ? styles.active : ""}`}
          >
            Timetable
          </Link>
        </motion.div>
        <motion.div
          className={styles.linkContainter}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
        >
          <Link
            href="/little-ninjas"
            className={`${styles.navLinks} ${isNinjas ? styles.active : ""}`}
          >
            Kids Classes
          </Link>
        </motion.div>
        <motion.div
          className={styles.linkContainter}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
        >
          <Link
            href="/pricing"
            className={`${styles.navLinks} ${isPricing ? styles.active : ""}`}
          >
            Pricing
          </Link>
        </motion.div>
        <motion.div
          className={styles.linkContainter}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClose}
        >
          <Link
            href="/contact"
            className={`${styles.navLinks} ${isContact ? styles.active : ""}`}
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>
    </Backdrop>
  );
};

export default ModalMenu;
