import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";


export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    // creat user by email and pass word
    const creatUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign in 
    const signIn = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // log out
    const logOut = () =>{
        setloading(true)
        return signOut(auth)
    }





    // Observer
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth, currentUser =>{
            console.log('user on the state changed', currentUser);
            setUser(currentUser)
            setloading(false)
        })
        return ()=>{
            unSubcribe();
        }
    },[])






    const authInfo = {
        user,
        loading,
        creatUser,
        signIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;