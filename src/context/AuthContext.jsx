import { createContext, useContext, useState, useEffect } from "react";
import { loginUser, registerUser } from "../api/auth";

const AuthContext = createContext(null)

export function AuthProvider({children}) {
    const[user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)

    function setUserData(user) {
        setUser(user)
    }

    async function logout() {
        await fetch("/api/auth/logout", {
            method: "POST",
            credentials: "include"
        })
        setUser(null)
    }
    
    useEffect(() => {
        async function fetchUser() {
            const response = await fetch("/api/user/me", {
                credentials: "include"
            })
            const data = await response.json()
            setUser(data)
        }
        fetchUser()
      },[]);

      return (
        <AuthContext.Provider value={{user, loading, setUserData, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext( AuthContext )
}