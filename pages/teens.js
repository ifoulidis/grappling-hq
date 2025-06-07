import styles from "@/styles/MMA.module.css";
import { CalendarToday } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function Teens({ setPage }) {
  setPage("teens");

  return (
    <div className={styles.container}>
      <div className={styles.teensClassHeader}>
        <div>
          <h1>Teens</h1>
          <div className={styles.days}>
            <CalendarToday fontSize="inherit" />
            <h3>Tuesdays and Thursdays</h3>
          </div>
        </div>
      </div>
      <div class={styles.blurb}>
        <motion.p
          initial={{ x: 100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true }}
        >
          It's no secret that teens need a positive outlet, and martial arts is
          the perfect fit for many. It is competitive, strenuous, and highly
          skilled.
        </motion.p>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true }}
        >
          Here at Grappling HQ, we have a friendly atmosphere and great
          coaching. We teach our teens how to be careful and not cause
          unnecessary harm, how to stay patient and calm under pressure, and of
          course, how to defend themselves.
        </motion.p>
      </div>
    </div>
  );
}
