import { Journey } from "@/interfaces/interface";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import slugify from "slugify";

const ProjectThumbnail = ({ project }: { project: Journey }) => {
  const [isActive, setIsActive] = useState(false);
  const nameUrl = slugify(project.name, { lower: true });

  const router = useRouter();

  useEffect(() => {
    if (project.type === "project") {
      const handleScroll = () => {
        const element = document.querySelector(`.${nameUrl}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const isMiddle =
            rect.top <= window.innerHeight / 2 &&
            rect.bottom >= window.innerHeight / 2;
          setIsActive(isMiddle);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [router.asPath]);

  const SaveScrollPosition = () => {
    const scrollPosition = window.scrollY || window.pageYOffset;
    localStorage.setItem("scrollPosition", String(scrollPosition));
    localStorage.setItem("pagePosition", String(router.asPath));
  };

  return (
    <div
      className={`project-thumbnail ${
        isActive ? "project-thumbnail-active" : ""
      }`}
      onClick={SaveScrollPosition}
    >
      {project.type === "project" ? (
        <Link href={`/${nameUrl}`}>
          <div className="project-thumbnail--see">
            <p>Voir le projet</p>
          </div>

          {project.img && (
            <Image
              className={nameUrl}
              src={project.img}
              alt={`Une image représentant le projet ${project.name}`}
              width={500}
              height={245}
            />
          )}

          <h4>{project.name}</h4>

          <p className="project-thumbnail--date">{project.date}</p>

          <p>{project.smallDesc}</p>
        </Link>
      ) : (
        <div>
          {project.img && (
            <Image
              className={nameUrl}
              src={project.img}
              alt={`Une image représentant le projet ${project.name}`}
              width={500}
              height={245}
            />
          )}
          <h4>{project.name}</h4>
          <p className="project-thumbnail--date">{project.date}</p>
          <p>{project.smallDesc}</p>{" "}
        </div>
      )}
    </div>
  );
};

export default ProjectThumbnail;
