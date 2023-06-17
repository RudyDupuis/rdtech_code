import { skillsData } from "@/data/skillsData";
import Skill from "../Skill";
import { useEffect, useState } from "react";
import { Journey } from "@/interfaces/interface";

interface Props {
  journeyData: Journey[];
  onTimelineChange: (data: Journey[]) => void;
}

const MyJourneySettings = ({ journeyData, onTimelineChange }: Props) => {
  const displayButtons = [
    "Tout Afficher",
    "Projets uniquement",
    "Formations uniquement",
  ];
  const [displayActive, setDisplayActive] = useState<string>(displayButtons[0]);
  const classActive = "my-journey-settings--active";

  const [skillsList, setSkillsList] = useState<string[]>([]);

  const skillsAddOrRemove = (skillName: string) => {
    if (skillsList.includes(skillName)) {
      setSkillsList(skillsList.filter((skill) => skill !== skillName));
    } else {
      setSkillsList([...skillsList, skillName]);
    }
  };

  const journeyDataSort = () => {
    let data = journeyData;

    if (displayActive === "Projets uniquement") {
      data = data.filter((e) => e.type === "project");
    }
    if (displayActive === "Formations uniquement") {
      data = data.filter((e) => e.type === "study");
    }

    skillsList.forEach(
      (skill) =>
        (data = data.filter(
          (e) => e.techUsed?.includes(skill) || e.type !== "project"
        ))
    );

    onTimelineChange(data);
  };

  useEffect(() => {
    journeyDataSort();
  }, [displayActive, skillsList]);

  return (
    <section className="my-journey-settings">
      <h2>Trier</h2>

      <div className="my-journey-settings--display">
        {displayButtons.map((btn) => (
          <button
            className={displayActive === btn ? classActive : ""}
            onClick={() => setDisplayActive(btn)}
            key={btn}
          >
            {btn}
          </button>
        ))}
      </div>

      <h2>Projet utilisant</h2>

      <div className="my-journey-settings--skills">
        {skillsData[0].map((skill) => (
          <Skill
            name={skill}
            color={skillsList.includes(skill) ? "active" : "grey"}
            key={skill}
            onClick={() => skillsAddOrRemove(skill)}
          />
        ))}
      </div>
    </section>
  );
};

export default MyJourneySettings;
