import {
  useState,
  useContext,
  createContext,
  useCallback,
  useEffect,
} from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { getUserDataFromDatabase } from "../firebase/handleDatabaseFiles";
import { doSignOut } from "../firebase/auth";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  const initializedUser = useCallback(async (user) => {
    if (user) {
      const userData = await getUserDataFromDatabase(user.uid);
      setCurrentUser({ ...user, ...userData });
    } else {
      setCurrentUser(null);
    }
  }, []);

  const userSigning = (user) => {
    if (user) {
      setUserLoggedIn(true);
    } else {
      const db = getDatabase();
      set(ref(db, "loggedUser"), null);
      setUserLoggedIn(false);
      setCurrentUser(null);
    }
  };

  async function getLoggedUserId() {
    try {
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, "loggedUser"));

      return snapshot.val() || null;
    } catch (error) {
      console.error(error);
    }
  }

  const loggedUserId = useCallback(async () => {
    const userID = await getLoggedUserId();
    if (userID) {
      const userData = await getUserDataFromDatabase(userID);
      setCurrentUser(userData);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }, []);

  const onAuthChange = () => {
    return onAuthStateChanged(auth, initializedUser);
  };

  useEffect(() => {
    loggedUserId();
  }, [loggedUserId]);

  useEffect(() => {
    return () => {
      doSignOut(auth);
    };
  }, []);

  const value = {
    loading,
    currentUser,
    userLoggedIn,
    userSigning,
    onAuthChange,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContext;

export function useAuth() {
  return useContext(AuthContext);
}
