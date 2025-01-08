import React, { useContext, useState } from "react";
import "../../styles/Signin.css";
import { useNavigate } from "react-router-dom";
import { app } from "../../../firebaseConfig";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { userContext } from "../../contexts/userContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Signin = () => {
  const { setUser } = useContext(userContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleBackButton = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  const auth = getAuth(app);
  const db = getFirestore(app);

  const onSigninPress = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      setIsLoading(true);

      const response = await createUserWithEmailAndPassword(auth, email, password);
      const userID = response.user.uid;
      const newUser = {
        user_id: userID,
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        country,
        city,
      };
      const users = collection(db, "users");
      await addDoc(users, newUser);
      await AsyncStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
    } catch (error) {
      alert("Email already exists");
      console.error("ERROR", error);
    }
  };

  return (
    <>
      <div className="signin">
        Sign in
        <form>
          <label htmlFor="first-name">First name: </label>
          <input
            type="text"
            id="first-name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            required
          />
          <br />
          <label htmlFor="last-name">Last name: </label>
          <input
            type="text"
            id="last-name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            required
          />
          <br />
          <label htmlFor="email">E-mail: </label>
          <input
            type="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            required
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
          <br />
          <label htmlFor="confirm-password">Confirm password: </label>
          <input
            type="password"
            id="confirm-password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            required
          />
          <br />
          <label htmlFor="phone-number">Phone number: </label>
          <input
            type="tel"
            id="phone-number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            value={phoneNumber}
            required
          />
          <br />
          <label htmlFor="country">Country: </label>
          <input
            type="text"
            id="country"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            value={country}
            required
          />
          <br />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
            required
          />
          <br />
          <button id="signin-btn" onClick={onSigninPress}>
            Sign in
          </button>
          <button id="back-btn" onClick={handleBackButton}>
            Back
          </button>
        </form>
      </div>
    </>
  );
};
