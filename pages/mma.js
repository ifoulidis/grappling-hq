import styles from "@/styles/MMA.module.css";
import { CalendarToday } from "@mui/icons-material";
import { motion } from "framer-motion";

export default function MMA({ setPage }) {
  setPage("mma");

  return (
    <div className={styles.container}>
      <div className={styles.mmaClassHeader}>
        <div>
          <h1>MMA</h1>
          <div className={styles.days}>
            <CalendarToday fontSize="inherit" />
            <h3>Mondays, Wednesdays, and Saturdays</h3>
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
          Train like a fighter with pro-level coaching in striking, wall
          wrestling, and ground-and-pound. Three action-packed sessions a week.
          All levels welcome. Fun, physical, and social.
        </motion.p>
      </div>
    </div>
  );
}
