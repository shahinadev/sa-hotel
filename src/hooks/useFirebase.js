import FirebaseApp from "../components/Firebase/Firebase";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";

FirebaseApp();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const GoogleSigIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then()
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, []);
  return {
    GoogleSigIn,
    logOut,
    user,
    isLoading,
  };
};

export default useFirebase;
