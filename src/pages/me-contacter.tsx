import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import CustumHead from "@/components/CustumHead";

export default function MeContacter() {
  const form = useRef<HTMLFormElement>(null);
  const [formMessage, setFormMessage] = useState("");

  const displayMessage = (message: string) => {
    setFormMessage(message);

    setTimeout(() => {
      setFormMessage("");
    }, 5000);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (res) => {
            if (form.current) {
              form.current.reset();
            }
            displayMessage("Message envoyé");
          },
          (err) => {
            displayMessage("Une erreur s'est produite, veuillez réessayer");
          }
        );
    }
  };

  return (
    <main>
      <CustumHead
        title={
          "Rudy Dupuis - Développeur JavaScript et UX Designer | Me Contacter"
        }
        desc={
          "Besoin de mes services en développement web ? Utilisez le formulaire de contact pour me laisser votre votre message. Je serai ravi de discuter de votre projet et de vous apporter mon expertise. Contactez-moi dès maintenant et travaillons ensemble pour concrétiser votre vision"
        }
        og={false}
      />

      <Nav />

      <h1 className="header-title">Me Contacter</h1>

      <section className="contact-form">
        <form ref={form} onSubmit={sendEmail} className="contact-form__form">
          <Image
            src="/contact/tape-measure.svg"
            alt="Un dessin d'un mètre (bricolage)"
            width={139}
            height={64}
            priority
            className="contact-form__tape-measure"
          />

          <input
            type="text"
            name="name"
            required
            autoComplete="off"
            id="name"
            placeholder="Nom"
            className="contact-form__inputs"
          />
          <input
            type="email"
            name="email"
            required
            autoComplete="off"
            id="email"
            placeholder="Email"
            className="contact-form__inputs"
          />
          <textarea
            name="message"
            id="mess"
            rows={8}
            placeholder="Message"
            className="contact-form__inputs"
          />
          <input
            type="submit"
            value="Envoyer"
            className="contact-form__button"
          />

          <Image
            src="/contact/hammer.svg"
            alt="Un dessin d'un marteau et d'un clou"
            width={182}
            height={122}
            priority
            className="contact-form__hammer"
          />
        </form>

        <div className="contact-form__message">{formMessage}</div>
      </section>

      <Footer />
    </main>
  );
}
