import React, { useContext } from "react";
import "./App.css";
import { Events } from "./components/Events/Events";
import { Header } from "./components/Header/Header";
import { Logout } from "./components/Auth/Logout";
import { userContext, UserProvider } from "./contexts/userContext";

const AppContent = () => {
  const { user } = useContext(userContext);
  const AuthStack = () => {
    <div>
      <Header />
      <Events />
    </div>;
  };

  return (
    <>
      {user ? (
        <div>
          <Logout />
        </div>
      ) : (
        <div>
          <Header />
          <Events />
        </div>
      )}
    </>
  );
};
export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
