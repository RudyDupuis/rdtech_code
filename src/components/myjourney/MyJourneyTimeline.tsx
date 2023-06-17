import { Journey } from "@/interfaces/interface";
import ProjectThumbnail from "../ProjectThumbnail";

interface Props {
  timelineData: Journey[];
}

const MyJourneyTimeline = ({ timelineData }: Props) => {
  let years = 0;
  const firstJourney = timelineData[0];

  return (
    <section className="my-journey-timeline">
      {timelineData.map((journey) => {
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
