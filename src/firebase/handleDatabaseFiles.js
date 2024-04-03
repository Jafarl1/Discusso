import { getDatabase, ref, child, get } from "firebase/database";

export const getUserDataFromDatabase = async (data) => {
  try {
    const dbRef = ref(getDatabase());
    const snapshot = await get(child(dbRef, `users/${data}`));

    return snapshot.val() || null;
  } catch (error) {
    console.error(error);
  }
};
