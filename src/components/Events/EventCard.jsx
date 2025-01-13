import React from "react";
import "../../styles/EventCard.css";

export const EventCard = ({ event }) => {
  const imageAlt = `${event.title} image`;
  return (
    <div className="event-card">
      <div id="card-image">
        <img src={event.picture} alt={imageAlt} style={{ height: 198, width: 198 }} />
      </div>
      <div id="card-title">{event.title}</div>
      Date: {event.date}
      <div id="card-description">Description: {event.description}</div>
      Location: {event.location}
      Time: {event.time}
    </div>
  );
};
