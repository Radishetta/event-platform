import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { userContext } from "../../contexts/userContext";

export const Logout = () => {
  const { user, setUser } = useContext(userContext);

  const handleSignOut = () => {
    const auth = getAuth();

    signOut(auth)
      .then(() => {
        setUser(null);
        AsyncStorage.setItem("user", null);
        console.log("User signed out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div id="logout" onClick={handleSignOut}>
      Logout
    </div>
  );
};
