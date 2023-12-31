import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut, GithubAuthProvider, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../Firebase/firebase.config.js';
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const loginWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }
    const loginWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, GitProvider)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logOut = () => {
        return signOut(auth)
    }

    // this state is for updating college data
    const [updatePer, setUpdatePer] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unsubscribe(); // Unsubscribe from the authentication state changes
        };
    }, []);



    const allInfo = {
        user,
        loading,
        logOut,
        loginWithGoogle,
        loginWithGitHub,
        resetPassword,
        registerUser,
        loginWithEmailAndPassword,
        setUpdatePer,
        updatePer
    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;