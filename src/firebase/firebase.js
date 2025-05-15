import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

import { firebaseConfig } from "./config";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveContactForm = async (data) => {
  try {
    await addDoc(collection(db, "contacts"), data);
    return true;
  } catch (e) {
    console.error("Erreur en sauvegardant le formulaire :", e);
    return false;
  }
};
