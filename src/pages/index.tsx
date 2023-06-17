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
      <Nav />

      <HomeHeader />
      <HomePresentation />
      <HomeSkills />
      <HomeProjects />

      <Footer />
    </main>
  );
}
