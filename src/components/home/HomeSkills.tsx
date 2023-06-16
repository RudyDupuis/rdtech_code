import Skill from "../Skill";
import { skillsData } from "../../data/skillsData";

const HomeSkills = () => {
  return (
    <section className="home__skills">
      <h2>Ma boite à outils de compétences</h2>

      <h3>Hard skills</h3>

      <div>
        {skillsData[0].map((skill) => (
          <Skill name={skill} key={skill} />
        ))}
      </div>

      <h3>Soft skills</h3>

      <div>
        {skillsData[1].map((skill) => (
          <Skill name={skill} key={skill} />
        ))}
      </div>
    </section>
  );
};

export default HomeSkills;
