import Link from "next/link";
import React from "react";

const MyJourneyInsctructions = () => {
  return (
    <Link href="#parcours">
      <div className="my-journey-instructions">
        <p>Faites défiler pour voir mon parcours</p>

        <p className="my-journey-instructions__arrow">↓</p>
      </div>
    </Link>
  );
};

export default MyJourneyInsctructions;
