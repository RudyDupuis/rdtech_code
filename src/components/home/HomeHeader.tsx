import LinkButton from "../LinkButton";
import { useScreenSizeDetect } from "@/helpers/useScreenSizeDetect";
import { useState } from "react";
import ToolsBoxAnim from "../animation/ToolsBoxAnim";

const HomeHeader = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useScreenSizeDetect(setIsSmallScreen, 850);

  return (
    <header className="home__header">
      <div className="home__header__div">
        <h1>Rudy Dupuis</h1>
        <p>
          Dévelopeur JavaScript <br /> Ux Designer
        </p>

        {isSmallScreen && <ToolsBoxAnim />}

        <LinkButton content="Découvrir mon profil" link="#presentation" />
      </div>

      {!isSmallScreen && <ToolsBoxAnim />}
    </header>
  );
};

export default HomeHeader;
