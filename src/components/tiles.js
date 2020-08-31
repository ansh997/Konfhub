import React from "react";
import Image from "react-bootstrap/Image";

const Conferences = (props) => {
  if (!props.conference) {
    return <div>didn't get a person</div>;
  } else {
    return (
      <div>
        {/* style="width: 18rem; */}
        {props.conference.map((conference) => (
          <div class="card" style={{ width: 18 + "rem" }}>
            <div class="card-body">
              <Image
                class="card-img-top"
                src={conference.confUrl}
                alt={conference.confName}
              />
              <h5 class="card-title">{conference.confName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {conference.confStartDate}
              </h6>
              <span class="card-text">Venue: {conference.venue}</span>
              <br />
              <a href="{conference.confUrl}" class="card-link">
                Card link
              </a>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default Conferences;
