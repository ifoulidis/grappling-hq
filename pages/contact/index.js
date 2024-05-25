// pages/contact/index.js
import ContactForm from "../../components/contactForm";

export default function ContactPage({ setPage }) {
  setPage("contact");
  return <ContactForm initialSubject="" />;
}
