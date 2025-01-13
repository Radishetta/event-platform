import React from "react";
import "../../styles/Events.css";
import { EventCard } from "./EventCard";

export const Events = ({ events }) => {
  return (
    <div className="events">
      {events.map((event) => {
        return <EventCard key={event.event_id} event={event} />;
      })}
    </div>
  );
};
