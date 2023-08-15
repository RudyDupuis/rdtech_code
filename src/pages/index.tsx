import CustumHead from "@/components/CustumHead";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import HomeHeader from "@/components/home/HomeHeader";
import HomePresentation from "@/components/home/HomePresentation";
import HomeProjects from "@/components/home/HomeProjects";
import HomeSkills from "@/components/home/HomeSkills";
import { useBackPosition } from "@/helpers/useBackPosition";

export default function Home() {
  useBackPosition();

  return (
    <main>
      <CustumHead
        title={"Rudy Dupuis - Développeur Web et Web mobile et UX Designer"}
        desc={
          "Je suis Rudy Dupuis, un développeur Web et Web mobile et UX Designer passionné. J'ai fusionné ma passion pour le bricolage et le numérique dans la conception de ce site. Découvrez mon parcours et mes compétences en développement web et UX design. Contactez-moi pour discuter de votre projet numérique."
        }
        og={true}
      />

      <Nav />

      <HomeHeader />
      <HomePresentation />
      <HomeSkills />
      <HomeProjects />

      <Footer />
    </main>
  );
}
