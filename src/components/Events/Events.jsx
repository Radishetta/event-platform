import React, { useEffect, useState } from "react";
import { app } from "../../../firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { EventCard } from "./EventCard";
import "../../styles/Events.css";

export const Events = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const db = getFirestore(app);

      const eventsRef = collection(db, "events");
      const eventsQuery = query(eventsRef, where("location", "!=", false));
      const eventsData = await getDocs(eventsQuery);

      const eventsList = eventsData.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setEvents(eventsList);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return events.map((event) => {
    return (
      <div key={event.id} className="event-cards">
        <EventCard {...event} />
      </div>
    );
  });
};
