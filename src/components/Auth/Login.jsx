import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "../../styles/Login.css";
import { userContext } from "../../contexts/userContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, doc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { app } from "../../../firebaseConfig";
import { useNavigate } from "react-router-dom";
Modal.setAppElement("#root");

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useContext(userContext);

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const onLoginPress = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const db = getFirestore(app);

    try {
      setIsLoading(true);
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const userID = userCredential.user.uid;
      const getUser = query(collection(db, "users"), where("user_id", "==", userID));
      const querySnapshot = await getDocs(getUser);
      const userSnap = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });

      await AsyncStorage.setItem("user", JSON.stringify(userSnap[0]));
      setUser(userSnap[0]);

      setIsLoading(false);
    } catch (error) {
      if (error.message.includes("auth/invalid-credential")) {
        alert("Invalid e-mail or password");
        console.error("ERROR", error.message);
      }
    }
  };
  return (
    <>
      <div id="login">
        Log in
        <form>
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </form>
        <button id="login-btn" onClick={onLoginPress}>
          Log In
        </button>
        <button id="back-btn" onClick={handleBackButton}>
          Back
        </button>
      </div>
    </>
  );
};
