import Image from "next/image";

interface Props {
  name: string;
}

const Skill = ({ name }: Props) => {
  //Remove accents, transform . in - and uppercase in lowercase
  const link = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\./g, "-");

  return (
    <div className="skill">
      <Image
        src={`/skills/${link}.svg`}
        alt={`Un dessin du logo de ${name}`}
        width={80}
        height={80}
      />

      <p>{name}</p>
    </div>
  );
};

export default Skill;
