import React, { useContext, useState } from "react";
import "./App.css";
import { Events } from "./components/Events/Events";
import { Header } from "./components/Header/Header";
import { LogIn } from "./components/Auth/LogIn";
import { SignUp } from "./components/Auth/SignUp";
import { userContext } from "./contexts/userContext";
import { Routes, Route } from "react-router-dom";

export default function App() {
  const { user } = useContext(userContext);
  const [search, setSearch] = useState("");
  const [events, setEvents] = useState([]);

  const handleSearchChange = (search) => {
    setSearch(search);
  };

  const handleSetEvents = (events) => {
    setEvents(events);
  };

  return (
    <main>
      <Header
        search={search}
        handleSearchChange={handleSearchChange}
        handleSetEvents={handleSetEvents}
      />
      <Routes>
        <Route path="/" element={<Events events={events} />} />
        <Route path="/events" element={<Events events={events} />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </main>
  );
}
