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
    "Tout afficher",
    "Projets uniquement",
    "Formations uniquement",
  ];

  const storedDisplayButton =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("journey-display-buttons")
      : null;
  const parsedDisplayButton =
    storedDisplayButton !== null ? storedDisplayButton : displayButtons[0];
  const [displayActive, setDisplayActive] =
    useState<string>(parsedDisplayButton);
  const classActive = "my-journey-settings--active";

  const storedSkillsList =
    typeof localStorage !== "undefined"
      ? localStorage.getItem("journey-skills-buttons")
      : null;
  const parsedSkillsList =
    storedSkillsList !== null ? JSON.parse(storedSkillsList) : [];
  const [skillsList, setSkillsList] = useState<string[]>(parsedSkillsList);

  const skillsAddOrRemove = (skillName: string) => {
    let updatedSkillsList: string[];

    if (skillsList.includes(skillName)) {
      updatedSkillsList = skillsList.filter((skill) => skill !== skillName);
    } else {
      setDisplayActive("Projets uniquement");
      localStorage.setItem(
        "journey-display-buttons",
        String("Projets uniquement")
      );
      updatedSkillsList = [...skillsList, skillName];
    }

    setSkillsList(updatedSkillsList);
    localStorage.setItem(
      "journey-skills-buttons",
      JSON.stringify(updatedSkillsList)
    );
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
            onClick={() => {
              setDisplayActive(btn);
              localStorage.setItem("journey-display-buttons", String(btn));
            }}
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
