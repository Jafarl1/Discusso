import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export const USER_FILES = "userFiles";
export const PROFILE_IMAGE = "profile_image";
export const PLANS = "plans";

const storage = getStorage();

export async function uploadFilesToCloud(directory, id, fileName, file) {
  try {
    const storageRef = ref(storage, `${directory}/${id}/${fileName}`);
    await uploadBytes(storageRef, file);
    console.log("Файл успешно загружен в Firebase Storage");

    const url = await getDownloadURL(storageRef);
    return url;
  } catch (error) {
    console.error("Ошибка загрузки файла:", error);
    throw error;
  }
}

export async function getFilesFromCloud(directory, id, fileName) {
  try {
    const imageRef = ref(storage, `${directory}/${id}/${fileName}`);
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error("IMAGE UPLOAD ERROR: ", error);
    return null;
  }
}
