import React from "react";
import { app } from "../../../firebaseConfig";
import { collection, query, getDocs, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

export const Events = () => {
  // try {
  //   const db = getFirestore(app);

  //   const q = query(collection(db, "events"), where("location", "==", "London"));
  //   const querySnapshot = await getDocs(q);
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });
  // } catch (e) {
  //   console.error(e);
  // }

  return <div>Events</div>;
};
