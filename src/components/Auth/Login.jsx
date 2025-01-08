import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "../../styles/Login.css";
import { userContext } from "../../contexts/userContext";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, query, where, getDocs, doc } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { app } from "../../../firebaseConfig";
Modal.setAppElement("#root");

export const Login = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useContext(userContext);

  const openModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  if (modalIsOpen) {
    const clearLogin = () => {
      setEmail("");
      setPassword("");
    };

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const onLoginPress = async (event) => {
      event.preventDefault();
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
        closeModal();
        clearLogin();
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <>
        <div id="login" onClick={openModal}>
          Log in
        </div>

        <Modal
          style={{
            overlay: { backgroundColor: "transparent" },
            content: {
              backgroundColor: "gray",
              top: "50px",
              bottom: "400px",
            },
          }}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Log In Screen"
        >
          <form>
            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </form>
          <button onClick={onLoginPress}>Log In</button>
        </Modal>
      </>
    );
  } else {
    return (
      <div id="login" onClick={openModal}>
        Log in
      </div>
    );
  }
};
