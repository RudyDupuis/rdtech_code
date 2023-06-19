import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import HomeHeader from "@/components/home/HomeHeader";
import HomePresentation from "@/components/home/HomePresentation";
import HomeProjects from "@/components/home/HomeProjects";
import HomeSkills from "@/components/home/HomeSkills";
import { useBackPosition } from "@/helpers/useBackPosition";
import Head from "next/head";

export default function Home() {
  useBackPosition();

  return (
    <main>
      <Head>
        <title>Rudy Dupuis - Développeur JavaScript et UX Designer</title>
        <meta
          name="description"
          content="Je suis Rudy Dupuis, un développeur JavaScript et UX Designer passionné. J'ai fusionné ma passion pour le bricolage et le numérique dans la conception de ce site. Découvrez mon parcours et mes compétences en développement web et UX design. Contactez-moi pour discuter de votre projet numérique."
        />
        <meta
          property="og:title"
          content="Rudy Dupuis - Développeur JavaScript et UX Designer"
        />
        <meta
          property="og:description"
          content="Je suis Rudy Dupuis, un développeur JavaScript et UX Designer passionné. J'ai fusionné ma passion pour le bricolage et le numérique dans la conception de ce site. Découvrez mon parcours et mes compétences en développement web et UX design. Contactez-moi pour discuter de votre projet numérique."
        />
        <meta
          property="og:image"
          content="https://rdtech-code.vercel.app/open-graph.png"
        />
        <meta property="og:url" content="https://rdtech-code.vercel.app//" />
        <meta property="og:type" content="website" />
        <meta
          property="og:site_name"
          content="Rudy Dupuis - Développeur JavaScript et UX Designer"
        />
      </Head>

      <Nav />

      <HomeHeader />
      <HomePresentation />
      <HomeSkills />
      <HomeProjects />

      <Footer />
    </main>
  );
}
