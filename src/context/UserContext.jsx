import { createContext, useContext, useState, useEffect } from "react"
import { useFetchAPI } from "../hooks/useFetchAPI"

const UserContext = createContext()

export function UserProvider({children}) {
    const { data: codes, isLoading } = useFetchAPI("/api/items", [])

    // useEffect(() => {
    //         if (codes) setData(codes)
    // },[])


    console.log(codes)
    return (
        <UserContext.Provider value={{codes, isLoading}}>                             
            {children}
        </UserContext.Provider>
    )
    
}

export function useUser() {
    return useContext( UserContext )
}