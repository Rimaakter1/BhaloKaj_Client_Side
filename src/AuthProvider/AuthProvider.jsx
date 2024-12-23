import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../firebase/firebase.config';
export const authContext = createContext();

const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logout = () => {
        setLoading(true);
        signOut(auth);
    };
    const manageProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const info = {
        handleGoogleLogin,
        handleRegister,
        manageProfile,
        handleLogin,
        logout,
        user,
        setUser,
        loading,
        setLoading
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
                setLoading(false);

            }
            else {
                setUser(null)
            }
            setLoading(false)

            return () => {
                unsubscribe()
            }
        })
    }, [])


    return (
        <div>
            <authContext.Provider value={info}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;