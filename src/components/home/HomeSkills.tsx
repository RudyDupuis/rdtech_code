import Skill from "../Skill";
import { skillsData } from "../../data/skillsData";

const HomeSkills = () => {
  return (
    <section className="home__skills">
      <h2>Ma boite à outils de compétences</h2>

      <h3>Hard skills</h3>

      <div className="home__skills--list">
        {skillsData[0].map((skill) => (
          <Skill name={skill} color="normal" key={skill} />
        ))}
      </div>

      <h3>Soft skills</h3>

      <div className="home__skills--list">
        {skillsData[1].map((skill) => (
          <Skill name={skill} color="normal" key={skill} />
        ))}
      </div>
    </section>
  );
};

export default HomeSkills;
