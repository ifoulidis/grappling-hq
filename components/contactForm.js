import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import styles from "../styles/Contact.module.css";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";
import PhoneIcon from "@/public/phone.svg";
import Head from "next/head";

function ContactForm({ initialSubject, ...props }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState(initialSubject || "");
  const [message, setMessage] = useState("");
  const [confirmation, setconfirmation] = useState("");
  const isSmallDevice = useMediaQuery("only screen and (max-width : 700px)");

  useEffect(() => {
    const timer = setTimeout(() => {
      setconfirmation("");
    }, 3000);
    return () => clearTimeout(timer);
  }, [confirmation]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Configure Email.js parameters
    const templateParams = {
      subject: subject,
      user_name: name,
      user_email: email,
      message: message,
    };
    if (subject === "") {
      setconfirmation("Subject cannot be blank");
    } else if (name === "") {
      setconfirmation("Name cannot be blank");
    } else if (email === "") {
      setconfirmation("Email cannot be blank");
    } else if (message === "") {
      setconfirmation("Message cannot be blank");
    } else {
      // Send the email using Email.js
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE,
          "contact_form",
          templateParams,
          process.env.NEXT_PUBLIC_EMAILJS_KEY
        )
        .then((response) => {
          console.log("Email sent!", response.status, response.text);
          setconfirmation("Email sent successfully!");
        })
        .catch((error) => {
          console.error("Error sending email:", error);
          setconfirmation(
            "There was an error sending your email! Please refresh the page and try again"
          );
        });
      // Clear form fields
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
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
          content="32 Second Avenue, Tauranga Central"
        />
        <meta
          name="twitter:image"
          content={`https://grapplinghq.com/chris-one-arm-choke.jpg`}
        />
        <meta name="description" content="32 Second Avenue, Tauranga Central" />
        <meta name="twitter:title" content="Grappling HQ" />
        <meta
          name="twitter:description"
          content="32 Second Avenue, Tauranga Central"
        />
        <meta
          name="twitter:image"
          content={`https://grapplinghq.com/chris-one-arm-choke.jpg`}
        />
      </Head>
      <main className="main">
        {/* <div className={styles.headerImage}></div> */}
        <section className={styles.section}>
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
          >
            <a href="tel:+642102340038">
              <Image
                src={PhoneIcon}
                alt="phone icon"
                width={350}
                height={350}
              />
            </a>
          </motion.div>
          <br />
          <h2>Call or text to ask how to get started!</h2>
          <h2>
            <a href="tel:+642102340038">02102340038</a>
          </h2>
        </section>
        <hr className={styles.divider} />
        <section className={styles.section}>
          <h1 className={styles.heading}>Ask Us Something</h1>
          <h1 className="confirmationText">{confirmation}</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{
                scale: 0.9,
                backgroundColor: "white",
                color: "black",
              }}
              type="submit"
            >
              Submit
            </motion.button>
          </form>
        </section>
        <hr className={styles.divider} />
        <section className={styles.section}>
          <h1 class={styles.heading}>Drive to Us</h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3157.279041196928!2d176.16524927587952!3d-37.689645272007105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6ddb389053eec7%3A0xf88dad25545ed86!2sGrapplingHQ%20%7C%20Jiu%20Jitsu%20and%20MMA%20gym!5e0!3m2!1sen!2snz!4v1716594990463!5m2!1sen!2snz"
            width={isSmallDevice ? "100%" : "600"}
            height={isSmallDevice ? "300" : "450"}
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </main>
    </div>
  );
}
export default ContactForm;
