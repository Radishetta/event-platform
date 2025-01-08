import React, { useContext } from "react";
import "./App.css";
import { Events } from "./components/Events/Events";
import { Header } from "./components/Header/Header";
import { Logout } from "./components/Auth/Logout";
import { Login } from "./components/Auth/Login";
import { Signin } from "./components/Auth/Signin";
import { userContext, UserProvider } from "./contexts/userContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const AppContent = () => {
  const { user } = useContext(userContext);

  return (
    <>
      {user ? (
        <div>
          <Logout />
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      )}
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
