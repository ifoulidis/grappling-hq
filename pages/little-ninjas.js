import styles from "../styles/LittleNinjas.module.css";
import { useState, useEffect } from "react";
import { motion, MotionConfig } from "framer-motion";
import KidsWrestling from "@/public/images/kids-wrestling.jpg";
import KidsRolling from "@/public/images/kids-rolling.jpg";
import KidsWarmUp from "@/public/images/kids-warm-up.jpg";
import { Slideshow } from "@/components/SlideShow";

export default function LittleNinjas({ setPage }) {
  let [index, setIndex] = useState(0);
  let [interaction, setInteraction] = useState(false);

  setPage("little-ninjas");

  const images = [KidsWarmUp, KidsWrestling, KidsRolling];

  useEffect(() => {
    let timeoutChangeImage, timeoutInteraction;

    if (!interaction) {
      timeoutChangeImage = setTimeout(() => {
        if (index + 1 < images.length) {
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          setIndex(0);
        }
      }, 3000);
    } else {
      setInteraction(true);
      timeoutInteraction = setTimeout(() => {
        setInteraction(false);
      }, 3000);
    }

    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      if (timeoutChangeImage) clearTimeout(timeoutChangeImage);
      if (timeoutInteraction) clearTimeout(timeoutInteraction);
    };
  }, [interaction, index]);

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
            Little Ninjas
          </motion.h1>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            At Grappling HQ, we welcome kids aged five to twelve, regardless of
            their experience level. For our youngest Ninjas, ages five to eight,
            we focus on the fundamentals of wrestling, teaching them how to
            control dominant positions and escape from tough spots. This
            foundation not only builds their skills but also boosts their
            confidence, making them &quot;bully-proof.&quot;
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.3 },
            }}
          >
            For our nine to twelve-year-olds, we take it up a notch! They begin
            to explore the world of submissions and discover their
            &quot;superpower&quot; on the mat. Alongside these techniques, they
            learn the importance of discipline and self-control, essential
            traits for both martial arts and life.
          </motion.p>
        </div>
        <MotionConfig
          transition={{
            duration: 0.7,
            ease: [0.32, 0.72, 0, 1],
          }}
        >
          <div className={styles.carousel}>
            <Slideshow image={images[index]} index={index} />

            <div className={styles.carouselButtons}>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                onClick={() => setIndex(index - 1)}
                disabled={index === 0}
                className={
                  index > 0
                    ? `${styles.activeButton}`
                    : `${styles.disabledButton}`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </motion.button>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                onClick={() => setIndex(index + 1)}
                disabled={index + 1 === images.length}
                className={
                  index + 1 < images.length
                    ? `${styles.activeButton}`
                    : `${styles.disabledButton}`
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </motion.button>
            </div>
          </div>
        </MotionConfig>
      </div>
    </div>
  );
}
