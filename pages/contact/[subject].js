import { useRouter } from "next/router";
import ContactForm from "../../components/contactForm"; // Update the import path accordingly

function ContactPage() {
  const router = useRouter();
  const { subject } = router.query; // Access the subject parameter from the URL

  return <ContactForm initialSubject={subject} />;
}

export default ContactPage;
