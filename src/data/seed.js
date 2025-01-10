import { app } from "../../firebaseConfig.js";
import { getFirestore } from "firebase/firestore";
import { faker } from "@faker-js/faker";
import { addDoc, collection } from "firebase/firestore";

const db = getFirestore(app);

const fakeIt = async () => {
  try {
    const newEvent = {
      created_at: faker.date.recent(),
      date: faker.date.future(),
      description: faker.food.description(),
      event_id: faker.string.uuid(),
      is_active: faker.datatype.boolean(),
      location: faker.location.city(),
      picture: faker.image.urlPicsumPhotos(),
      time: faker.date.future(),
      title: faker.book.title(),
    };
    const events = collection(db, "events");
    await addDoc(events, newEvent);
  } catch (error) {
    console.log(error);
  }
};

Array(9).fill(0).forEach(fakeIt);
