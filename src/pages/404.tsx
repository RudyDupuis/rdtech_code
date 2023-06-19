import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Image from "next/image";

const Error404 = () => {
  return (
    <main>
      <Nav />

      <section className="error-404">
        <h1>Il y a une erreur 404 !</h1>
        <Image
          src="/home/tools-box.svg"
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
