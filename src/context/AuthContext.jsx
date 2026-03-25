import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null)

export function AuthProvider({children}) {
    const[user, setUser] = useState(null)
    const[loading, setLoading] = useState(true)

    function setUserData(user) {
        setUser(user)
    }

    async function refreshUser() {
        const response = await fetch("/api/user/me", { credentials: "include" })
        if (response.ok) {
            const data = await response.json()
            setUser(data)
        }
    }

    async function logout() {
        await fetch("/api/auth/logout", {
            method: "POST",
            credentials: "include"
        })
        console.log("logging out")
        setUser(null)
    }

    async function fetchUser() {                               
        const response = await fetch("/api/user/me", {
    credentials: "include" })                                  
        if (response.ok) {
            const data = await response.json()                 
            setUser(data)
        }                                                      
        setLoading(false)
    } 
    
    useEffect(() => {
        fetchUser()
      },[]);


      return (
        <AuthContext.Provider value={{user, loading, setUserData, refreshUser, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext( AuthContext )
}