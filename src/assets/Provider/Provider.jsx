import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import { GoogleAuthProvider } from "firebase/auth";


export const authProvider = createContext(null)

const Provider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const handleRegister = (email, password) => {
        return  createUserWithEmailAndPassword(auth, email, password);
    }

    const handleLogin = (email, password) => {
        return   signInWithEmailAndPassword(auth, email, password)
    }

    const handleSingOut = () => {
        singOut(auth);
    }

    const handleGoogleLogin = () => {
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            console.log(currentUser)
            if(currentUser) {
                setUser(currentUser)
            }
            else{
                setUser(null)
            }
            return () => {
                unsubscribe()
            }
        })
    },[])
    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth,(currentUser)=> {
    //         console.log(currentUser)
    //         if(currentUser){
    //             setUser(currentUser)
    //         }
    //         else{
    //             setUser(null)
    //         }
    //         return () => {
    //             unsubscribe()
    //         }
    //     })
    // }, [])

    const authInfo = {
        handleRegister,
        handleGoogleLogin,
        handleLogin,
        handleSingOut
    }
    return (
        <authProvider.Provider value={authInfo}>
            {children}
        </authProvider.Provider>
    );
};

export default Provider;