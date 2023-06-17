import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import MyJourneyTimeline from "@/components/myjourney/MyJourneyTimeline";
import { journeyData } from "../data/journeyData";
import MyJourneySettings from "@/components/myjourney/MyJourneySettings";
import { useState } from "react";
import { Journey } from "@/interfaces/interface";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { useBackPosition } from "@/helpers/useBackPosition";

export default function MonParcours() {
  const [timelineData, setTimelineData] = useState<Journey[]>(journeyData);

  const handleTimelineDataChange = (data: Journey[]) => {
    setTimelineData(data);
  };

  useBackPosition();

  return (
    <main>
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
