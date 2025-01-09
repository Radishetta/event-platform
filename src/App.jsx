import React, { useContext } from "react";
import "./App.css";
import { Events } from "./components/Events/Events";
import { Header } from "./components/Header/Header";
import { LogOut } from "./components/Auth/LogOut";
import { LogIn } from "./components/Auth/LogIn";
import { SignUp } from "./components/Auth/SignUp";
import { userContext, UserProvider } from "./contexts/userContext";
import { Routes, Route } from "react-router-dom";

const AppContent = () => {
  const { user } = useContext(userContext);

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </div>
    </>
  );
};
export default function App() {
  return (
    <div className="App">
      <UserProvider>
        <AppContent />
      </UserProvider>
    </div>
  );
}
