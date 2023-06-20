import Image from "next/image";

const ToolsBoxAnim = () => {
  return (
    <div className="tools-box-anim">
      <Image
        src="/tools-box/tools-box-back.svg"
        alt="Le dessin du derrière d'une boite à outils"
        width={350}
        height={266}
        priority
        className="tools-box-anim__back"
      />
      <Image
        src="/tools-box/tools-box-middle.svg"
        alt="Le dessin du milieu d'une boite à outils"
        width={350}
        height={266}
        priority
        className="tools-box-anim__middle"
      />
      <Image
        src="/tools-box/hammer.svg"
        alt="Le dessin d'un marteau"
        width={56}
        height={161}
        priority
        className="tools-box-anim__hammer"
      />
      <Image
        src="/tools-box/saw.svg"
        alt="Le dessin d'une scie"
        width={278}
        height={73}
        priority
        className="tools-box-anim__saw"
      />
      <Image
        src="/tools-box/screwdriver.svg"
        alt="Le dessin d'un tournevis"
        width={225}
        height={33}
        priority
        className="tools-box-anim__screwdriver"
      />
      <Image
        src="/tools-box/spanner.svg"
        alt="Le dessin d'une clef (outil)"
        width={222}
        height={39}
        priority
        className="tools-box-anim__spanner"
      />
      <Image
        src="/tools-box/tape-measure.svg"
        alt="Le dessin d'un mètre (outil)"
        width={160}
        height={74}
        priority
        className="tools-box-anim__tape-measure"
      />
      <Image
        src="/tools-box/tools-box-front.svg"
        alt="Le dessin du devant d'une boite à outils"
        width={350}
        height={266}
        priority
        className="tools-box-anim__front"
      />
    </div>
  );
};

export default ToolsBoxAnim;
