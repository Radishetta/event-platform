import React from "react";
import "../../styles/EventCard.css";

export const EventCard = (event) => {
  return (
    <div className="event-card">
      Date: {event.date}
      <br />
      Title: {event.title}
      <br />
      Description: {event.description}
      <br />
      Location: {event.location}
      <br />
      Time: {event.time}
    </div>
  );
};
