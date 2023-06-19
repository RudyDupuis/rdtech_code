import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import MyJourneyTimeline from "@/components/myjourney/MyJourneyTimeline";
import { journeyData } from "../data/journeyData";
import MyJourneySettings from "@/components/myjourney/MyJourneySettings";
import { useState } from "react";
import { Journey } from "@/interfaces/interface";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useBackPosition } from "@/helpers/useBackPosition";
import Head from "next/head";

export default function MonParcours() {
  const [timelineData, setTimelineData] = useState<Journey[]>(journeyData);

  const handleTimelineDataChange = (data: Journey[]) => {
    setTimelineData(data);
  };

  useBackPosition();

  return (
    <main>
      <Head>
        <title>
          Rudy Dupuis - Développeur JavaScript et UX Designer | Mon Parcours
        </title>
        <meta
          name="description"
          content="Découvrez mon parcours en tant que développeur JavaScript et Ux Designer. Explorez mes compétences en HTML, CSS, JavaScript, TypeScript, Git, Node.js, React.js, Next.js et SEO dans mes différents projets. Consultez mes projets récents, tels que la création d'un site vitrine pour mon activité apicole et un petit réseau social en équipe."
        />
      </Head>

      <Nav />

      <h1 className="header-title">Mon parcours</h1>

      <MyJourneySettings
        onTimelineChange={handleTimelineDataChange}
        journeyData={journeyData}
      />

      <ScrollToTopButton />

      <MyJourneyTimeline timelineData={timelineData} />

      <Footer />
    </main>
  );
}
