import { Journey } from "@/interfaces/interface";
import { journeyData } from "../data/journeyData";
import slugify from "slugify";
import Nav from "@/components/Nav";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import { useRouter } from "next/router";
import Skill from "@/components/Skill";
import Footer from "@/components/Footer";
import CustumHead from "@/components/CustumHead";

interface Props {
  project: Journey;
}

export default function ProjectPage({ project }: Props) {
  const buttonsList = [
    ["Découvrir le projet", project.projectLink],
    ["Voir le code", project.codeLink],
    ["Lire la documentation", project.docLink],
  ];

  const router = useRouter();

  const goBack = () => {
    router.back();
  };
  return (
    <main className="project">
      <CustumHead
        title={`Rudy Dupuis - Développeur JavaScript et UX Designer | ${project.name}`}
        desc={`Découvrez le projet ${project.name}. Ce projet a été réalisé en ${project.date}. Explorez ce projet pour en savoir plus sur son concept, ses fonctionnalités et les défis surmontés lors de sa réalisation. N'hésitez pas à me contacter si vous souhaitez en discuter davantage ou si vous avez des questions. Ensemble, nous pouvons réaliser votre vision numérique.`}
        og={false}
      />

      <Nav />

      <button onClick={goBack} className="project__return-button">
        Retour
      </button>

      <section className="project__top">
        <div>
          <h1>{project.name}</h1>
          <h2>{project.title}</h2>
          <p>{project.date}</p>
        </div>

        <Image
          src={project.img ? project.img : ""}
          alt={`Une image du projet ${project.name}`}
          width={400}
          height={196}
          priority
        />
      </section>

      <section className="project__bottom">
        <p>{project.desc}</p>

        <div className="project__bottom--right">
          <h3>Technologies utilisées :</h3>

          <div className="project__bottom--right--skills">
            {project.techUsed?.map((skill) => (
              <Skill name={skill} color="normal" key={skill} />
            ))}
          </div>
        </div>
      </section>

      <section className="project__buttons">
        {buttonsList.map(
          (button) =>
            button[1] && (
              <LinkButton
                content={button[0] ? button[0] : ""}
                link={button[1]}
                blank={true}
                key={button[0]}
              />
            )
        )}
      </section>

      <Footer />
    </main>
  );
}

export async function getStaticPaths() {
  const projectPaths = journeyData
    .filter((item) => item.type === "project")
    .map((item) => ({ params: { name: normalizeNameForURL(item.name) } }));

  return { paths: projectPaths, fallback: false };
}

function normalizeNameForURL(name: string): string {
  return slugify(name, { lower: true });
}

export async function getStaticProps({ params }: { params: { name: string } }) {
  const projectName = params.name;
  const project = journeyData.find(
    (item) => normalizeNameForURL(item.name) === projectName
  );

  return { props: { project } };
}
