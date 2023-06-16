import { useScreenSizeDetect } from "@/helpers/useScreenSizeDetect";
import Image from "next/image";
import { useState } from "react";

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
        <h2>{isSmallScreen ? "Qui suis je ?" : "Un aperçu de qui je suis"}</h2>

        {isSmallScreen && (
          <Image
            src="/home/rudy-picture.svg"
            alt="Une photo de rudy dupuis"
            width={303}
            height={305}
          />
        )}

        <p>
          Passionné par le bricolage et le numérique, j'ai fusionné ces deux
          univers dans la conception de ce site. Tout comme le bricolage
          nécessite l'utilisation d'outils, je donne vie à des concepts
          numériques à l'aide des langages de programmation et des logiciels.
          <br />
          <br />
          Je suis développeur JavaScript et UX designer, impliqué dans toutes
          les étapes du processus, de la recherche utilisateur à la conception
          graphique jusqu'au développement.
          <br />
          <br />
          Contactez moi pour discuter de vos besoins en développement web et UX
          design. Ensemble, nous réaliserons votre projet numérique.
        </p>
      </div>
    </section>
  );
};

export default HomePresentation;
