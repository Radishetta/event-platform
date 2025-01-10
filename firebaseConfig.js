import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBuc5BQ4zjbr_didKW9718q-I0ZEKq2wnk",
  authDomain: "events-platform-bdc33.firebaseapp.com",
  projectId: "events-platform-bdc33",
  storageBucket: "events-platform-bdc33.firebasestorage.app",
  messagingSenderId: "43825012023",
  appId: "1:43825012023:web:4708934b9a6dda4caaceb2",
  measurementId: "G-V95VJRKX85",
};

export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
