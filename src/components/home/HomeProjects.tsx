import LinkButton from "../LinkButton";
import ProjectThumbnail from "../ProjectThumbnail";
import { journeyData } from "../../data/journeyData";

const HomeProjects = () => {
  const projectFilter = (name: string) => {
    return journeyData.filter((project) => project.name === name)[0];
  };

  return (
    <section className="home__projects">
      <h2>Mes projets favoris</h2>

      <div className="home__projects--list">
        <ProjectThumbnail project={projectFilter("MielsDupuis")} />
        <ProjectThumbnail project={projectFilter("Stratège")} />
        <ProjectThumbnail project={projectFilter("OSNA")} />
      </div>

      <LinkButton content="Voir mon parcours" link="/mon-parcours" />
    </section>
  );
};

export default HomeProjects;
