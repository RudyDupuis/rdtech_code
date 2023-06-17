import Image from "next/image";

interface Props {
  name: string;
  color: "normal" | "grey" | "active";
  onClick?: () => void;
}

const Skill = ({ name, color, onClick }: Props) => {
  //Remove accents, transform . in - and uppercase in lowercase
  const link = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\./g, "-");

  const srcCreate = (color: string) => {
    switch (color) {
      case "normal":
        return `/skills/${link}.svg`;
      case "grey":
        return `/skills/grey/${link}-grey.svg`;
      case "active":
        return `/skills/active/${link}-active.svg`;
      default:
        return "";
    }
  };

  return (
    <div className="skill" onClick={onClick}>
      <Image
        src={srcCreate(color)}
        alt={`Un dessin du logo de ${name}`}
        width={80}
        height={80}
      />

      <p>{name}</p>
    </div>
  );
};

export default Skill;
