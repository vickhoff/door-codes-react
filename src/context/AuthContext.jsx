import { createContext, useContext, useState, useEffect } from "react";

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
            console.log("fetching user")
            const response = await fetch("/api/user/me", {
                credentials: "include"
            })
            const data = await response.json()
            
            console.log("session restore:", response.status)
            setUser(data)
        }
        setLoading(false)
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