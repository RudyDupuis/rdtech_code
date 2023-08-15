import LinkButton from "../LinkButton";
import { useScreenSizeDetect } from "@/helpers/useScreenSizeDetect";
import dynamic from "next/dynamic";
import { useState } from "react";
const ToolsBoxAnim = dynamic(
  () => import("../animation/ToolsBoxAnim"),
  { ssr: false } // Prevent server-side rendering
);

const HomeHeader = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useScreenSizeDetect(setIsSmallScreen, 850);

  return (
    <header className="home__header">
      <div className="home__header__div">
        <h1>Rudy Dupuis</h1>
        <p>
          Dévelopeur Web et Web mobile
          <br /> Ux Designer
        </p>

        {isSmallScreen && <ToolsBoxAnim />}

        <LinkButton content="Découvrir mon profil" link="#presentation" />
      </div>

      {!isSmallScreen && <ToolsBoxAnim />}
    </header>
  );
};

export default HomeHeader;
