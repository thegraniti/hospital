import React from "react";
import Team from "../../../components/Person/Team";
import { TeamMembers, responsive } from "../../../constant/theteamData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./TheTeam.css";



function TheTeam() {
  const showTeam = TeamMembers.map((teams) => {
    return <Team key={teams.id} {...teams} />;
  });

  return (
    <div className="section">
      <div className="team-header flex header">
        <h2>Our Doctors</h2>
        <h1>
          Qualified Healthcare
          <br />
          Professionals
        </h1>
      </div>
      <div className="team-data">
        <Carousel responsive={responsive} infinite>{showTeam}</Carousel>
      </div>
    </div>
  );
}

export default TheTeam;
