import { journeyData } from "../../data/journeyData";
import ProjectThumbnail from "../ProjectThumbnail";

const MyJourneyTimeline = () => {
  let years = 0;
  const firstJourney = journeyData[0];

  return (
    <section className="my-journey-timeline">
      {journeyData.map((journey) => {
        const { name, dateNumb } = journey;
        const currentYear = dateNumb[1];
        const isFirstJourney = name === firstJourney.name;

        if (currentYear !== years) {
          years = currentYear;

          return (
            <div key={name}>
              {!isFirstJourney && (
                <div className="my-journey-timeline--decorative-line"></div>
              )}
              <h3>{currentYear}</h3>
              <div className="my-journey-timeline--decorative-line"></div>
              <ProjectThumbnail project={journey} />
            </div>
          );
        }

        return (
          <div key={name}>
            <div className="my-journey-timeline--decorative-line"></div>
            <ProjectThumbnail project={journey} />
          </div>
        );
      })}
    </section>
  );
};

export default MyJourneyTimeline;
