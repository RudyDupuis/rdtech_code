import { useScreenSizeDetect } from "@/helpers/useScreenSizeDetect";
import Image from "next/image";
import { useState } from "react";
import LinkButton from "../LinkButton";

const HomePresentation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useScreenSizeDetect(setIsSmallScreen, 1100);

  return (
    <section className="home__presentation" id="presentation">
      {!isSmallScreen && (
        <Image
          src="/home/rudy-picture.svg"
          alt="Une photo de rudy dupuis"
          width={303}
          height={305}
        />
      )}

      <div>
        <h2>Qui suis je ?</h2>

        {isSmallScreen && (
          <Image
            src="/home/rudy-picture.svg"
            alt="Une photo de rudy dupuis"
            width={303}
            height={305}
          />
        )}

        <p>
          Passionné par le bricolage et le numérique, j&apos;ai fusionné ces
          deux univers dans la conception de ce site. Tout comme le bricolage
          nécessite l&apos;utilisation d&apos;outils, je donne vie à des
          concepts numériques à l&apos;aide des langages de programmation et des
          logiciels.
          <br />
          <br />
          Je suis <strong>développeur Web</strong> avec une appétence pour
          l&apos;
          <strong>UX designer</strong>, impliqué dans toutes les étapes du
          processus, de la <strong>recherche utilisateur</strong> à la{" "}
          <strong>conception graphique</strong> jusqu&apos;au{" "}
          <strong>développement</strong>.
          <br />
          <br />
          Contactez moi pour discuter de vos besoins en développement web et UX
          design. Ensemble, nous réaliserons votre projet numérique.
        </p>

        <LinkButton content="Me contacter" link="/me-contacter" />
      </div>
    </section>
  );
};

export default HomePresentation;
