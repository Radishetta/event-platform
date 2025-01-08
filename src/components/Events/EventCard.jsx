import React from "react";

export const EventCard = (event) => {
  return (
    <>
      Date: {event.date}
      Title: {event.title}
      Description: {event.description}
      Location: {event.location}
      Time: {event.time}
    </>
  );
};
