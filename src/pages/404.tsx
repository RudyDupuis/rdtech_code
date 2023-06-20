import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";

const Error404 = () => {
  return (
    <main>
      <Nav />

      <section className="error-404">
        <h1>Erreur 404</h1>
        <Image
          src="/tools-box/tools-box-full.svg"
          alt="Un dessin d'une boite à outils"
          width={175}
          height={133}
          priority
        />
        <h2>Désolé, la page que vous recherchez n&apos;existe pas.</h2>
      </section>

      <Footer />
    </main>
  );
};

export default Error404;
