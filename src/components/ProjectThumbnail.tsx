import { Journey } from "@/interfaces/interface";
import Image from "next/image";

const ProjectThumbnail = ({ project }: { project: Journey }) => {
  return (
    <div className="project-thumbnail">
      {project.img && (
        <Image
          src={project.img}
          alt={`Une image représentant le projet ${project.name}`}
          width={500}
          height={245}
        />
      )}

      <h4>{project.name}</h4>

      <p className="project-thumbnail--date">{project.date}</p>

      <p>{project.smallDesc}</p>
    </div>
  );
};

export default ProjectThumbnail;
