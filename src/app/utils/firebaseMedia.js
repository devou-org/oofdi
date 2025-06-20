import { db } from "../../../firebaseConfig";// your initialized Firestore `db`
import { doc, setDoc, deleteDoc } from "firebase/firestore";

// Save or update URLs
export const saveMediaUrls = async ({ imageUrl, videoUrl }) => {
  const ref = doc(db, "media", "adminUploads");
  await setDoc(ref, { imageUrl, videoUrl });
};

// Remove a specific field
export const deleteMediaUrl = async (type) => {
  const ref = doc(db, "media", "adminUploads");
  await deleteDoc(doc(db, "media", "adminUploads"), [type]);
};
