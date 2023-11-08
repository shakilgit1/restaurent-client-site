import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

const auth = getAuth(app);
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signInUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogin = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const profileUpdate = (name, photo) =>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            const loggedUser = currentUser?.email || user?.email;
            const userEmail = {email: loggedUser};

            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);

            if(currentUser){
                axios.post('https://restaurent-server-site.vercel.app/jwt', userEmail, {withCredentials: true})
                .then(res => {
                    console.log(res.data);
                })
            }else{
                axios.post('https://restaurent-server-site.vercel.app/logOut', userEmail, {withCredentials: true})
            }
        })
        return () =>{
        return unSubscribe()
        }
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        signInUser,
        googleLogin,
        profileUpdate,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
  }