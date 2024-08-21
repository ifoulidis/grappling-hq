import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/LittleNinjas.module.css";
import Image from "next/image";

export const Slideshow = ({ image, index }) => (
  <AnimatePresence>
    <motion.div
      key={index}
      initial={{ x: `${index * 100}%` }}
      animate={{ x: 0 }}
      transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
      className={styles.rotatingImage}
    >
      <Image
        alt={`Kids practicing Jiu Jitsu ${index}`}
        key={index}
        src={image}
        width={400}
        height={600}
        className={styles.img}
      />
    </motion.div>
  </AnimatePresence>
);
