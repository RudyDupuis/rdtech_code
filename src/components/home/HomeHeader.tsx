import Image from "next/image";
import LinkButton from "../LinkButton";
import { useScreenSizeDetect } from "@/helpers/useScreenSizeDetect";
import { useState } from "react";

const HomeHeader = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useScreenSizeDetect(setIsSmallScreen, 850);

  return (
    <header className="home__header">
      <div>
        <h1>Rudy Dupuis</h1>
        <p>
          Dévelopeur javascript <br /> Ux designer
        </p>

        {isSmallScreen && (
          <Image
            src="/home/tools-box.svg"
            alt="Un dessin d'une boite à outils"
            width={350}
            height={266}
            priority
          />
        )}

        <LinkButton content="Découvrir mon profil" link="#presentation" />
      </div>

      {!isSmallScreen && (
        <Image
          src="/home/tools-box.svg"
          alt="Un dessin d'une boite à outils"
          width={350}
          height={266}
          priority
        />
      )}
    </header>
  );
};

export default HomeHeader;
