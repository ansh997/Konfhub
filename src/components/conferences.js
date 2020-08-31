import React from "react";
// import Image from "react-bootstrap/Image";
// poster image, date, name of the conference,
// is it free or paid & place
// , and the link to visiting the conference website
const Conferences = (props) => {
  // console.log(props);
  // console.log("");
  if (!props.conference) {
    return <div>didn't get a person</div>;
  } else {
    return (
      <div>
        {props.conference.map((conference) => (
          <div class="card">
            <div class="card-body">
              {/* <Image class="image" src={conference.imageURL thumbnail /> */}
              <h5 class="card-title">{conference.confName}</h5>
              <span>{conference.confStartDate}</span>
              <br />
              <span class="card-subtitle mb-2 text-muted">
                <a href={conference.confUrl}>{conference.confUrl}</a>
              </span>
              <br />
              <span>Venue: {conference.venue}</span>
              <br />
              <span>Type: {conference.entryType}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
export default Conferences;
