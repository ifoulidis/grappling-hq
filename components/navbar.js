import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/images/full-logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ModalMenu from "./modalMenu";
import { motion, AnimatePresence } from "framer-motion";

const hoverEffects = { scale: 1.2 };
const tapEffects = { scale: 0.9 };

function NavigationBar({ page, footerVisible }) {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  // Function to toggle the modal open/close state
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  // Determine which navigation item is active based on the "page" prop
  const isAbout = page === "about";
  const isTimetable = page === "timetable";
  const isContact = page === "contact";
  const isNinjas = page === "little-ninjas";
  const isPricing = page === "pricing";

  return (
    <nav className={`${styles.nav} ${footerVisible ? "" : styles.sticky}`}>
      <motion.div
        className={styles.logoContainer}
        whileHover={{ scale: 1.05 }}
        whileTap={tapEffects}
      >
        <Link href="/">
          <Image
            src={Logo}
            width={500}
            height={100}
            className={styles.brandImage}
            alt="Brand logo."
          />
        </Link>
      </motion.div>
      <div className={styles.desktopNav}>
        <motion.div
          whileHover={hoverEffects}
          whileTap={tapEffects}
          className={styles.desktopNavLinks}
        >
          <Link
            href="/about"
            className={`${styles.navItem} ${isAbout ? styles.active : ""}`}
          >
            About
          </Link>
        </motion.div>

        <motion.div
          whileHover={hoverEffects}
          whileTap={tapEffects}
          className={styles.desktopNavLinks}
        >
          <Link
            href="/timetable"
            className={`${styles.navItem} ${isTimetable ? styles.active : ""}`}
          >
            Timetable
          </Link>
        </motion.div>

        <motion.div
          whileHover={hoverEffects}
          whileTap={tapEffects}
          className={styles.desktopNavLinks}
        >
          <Link
            href="/little-ninjas"
            className={`${styles.navItem} ${isNinjas ? styles.active : ""}`}
          >
            Kids Classes
          </Link>
        </motion.div>

        <motion.div
          whileHover={hoverEffects}
          whileTap={tapEffects}
          className={styles.desktopNavLinks}
        >
          <Link
            href="/pricing"
            className={`${styles.navItem} ${isPricing ? styles.active : ""}`}
          >
            Pricing
          </Link>
        </motion.div>

        <motion.div
          whileHover={hoverEffects}
          whileTap={tapEffects}
          className={styles.desktopNavLinks}
        >
          <Link
            href="/contact"
            className={`${styles.navItem} ${isContact ? styles.active : ""}`}
          >
            Contact
          </Link>
        </motion.div>

        <motion.div
          whileHover={hoverEffects}
          whileTap={tapEffects}
          onClick={() => {
            toggleModal();
          }}
          className={styles.menuIcon}
        >
          <MenuIcon id="menuIconIcon" fontSize="inherit" />
        </motion.div>
      </div>

      <AnimatePresence
        // Disable any initial animations on children that
        // are present when the component is first rendered
        initial={false}
        // Only render one component at a time.
        // The exiting component will finish its exit
        // animation before entering component is rendered
        mode="wait"
        // Fires when all exiting nodes have completed animating out
        onExitComplete={() => null}
      >
        {modalOpen && <ModalMenu handleClose={close} page={page} />}
      </AnimatePresence>
    </nav>
  );
}

export default NavigationBar;
