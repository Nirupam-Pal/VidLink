import { createContext, useContext } from "react";
import axios from "axios";

export const AuthContext = createContext({});

const client = axios.create({
    baseUrl: "localhost:8000/api/v1/users"
})

export const AuthProvider = ({children}) =>{

    const authContext = useContext(AuthContext)
    
}