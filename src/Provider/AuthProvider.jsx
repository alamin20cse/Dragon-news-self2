import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase.cofig/Firebase.config";



export const AuthContex=createContext();


const AuthProvider = ({children}) => {

    const [user,setuser]=useState(null);
    console.log(user);

    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logOut=()=>{
        return signOut(auth);
    }

    const userLogin=(email,password)=>{
        signInWithEmailAndPassword(auth,email,password);

    }








    const authInfo={

        user,
        setuser,
        createNewUser,
        logOut,
        userLogin
        
    }
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentuser=>{
            setuser(currentuser)
        })
        return ()=>{
            unsubscribe();
        }
    })

   
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;