import { Children, createContext,useContext,useEffect,useState} from "react";
import {jwtDecode} from "jwt-decode";

const authContext=createContext();

export const AuthProvider=({children}) =>{

    const [stud,setStud]=useState(null);

    useEffect(()=>{

        const token=localStorage.getItem("token");

        if(token)
        {
            setStud(jwtDecode(token));
        }
    },[])

    return(
        <authContext.Provider value={[stud,setStud]}>
            {children}
        </authContext.Provider>
    );
};

const useAuth= ()=>useContext(authContext);

export {authContext,useAuth};