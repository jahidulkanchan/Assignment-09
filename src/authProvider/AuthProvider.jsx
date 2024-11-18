/* eslint-disable react/prop-types */
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebaseAuth/firebase.init";


// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  console.log(user)

  // OnAuth State Change handler =====================
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  
  //SignWithGoogle =========================
  const googleProvider = new GoogleAuthProvider();
  const signWithGoogle = ()=>{
    return signInWithPopup(auth, googleProvider)
  }


  // Sign Up user ==================================
  const signUpUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // sign In user ==================================
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Update user profile =================================
  const updateUserProfile = (updateInfo)=>{
    return updateProfile(auth.currentUser, updateInfo)
  }
  const signOutUser = () => {
    return signOut(auth);
  };

  const dataInfo = {
    loading,
    user,
    setUser,
    signUpUser,
    signInUser,
    signOutUser,
    signWithGoogle,
    updateUserProfile
  };
  return (
    <>
      <AuthContext.Provider value={dataInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default AuthProvider;
