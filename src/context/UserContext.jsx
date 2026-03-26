import { createContext, useContext, useState, useEffect } from "react"
import { useFetchAPI } from "../hooks/useFetchAPI"
import { useMemo } from "react"

const UserContext = createContext()

export function UserProvider({children}) {

    const { data, isLoading } = useFetchAPI("/api/items", [])

    function randomDistance() {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(100);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    const codes = useMemo(() =>
        data.map(codeItem => ({...codeItem, distance: randomDistance()}))
    , [data])

    const[sortByDistance, setSortByDistance] = useState(true)

    return (
        <UserContext.Provider value={{codes, isLoading, sortByDistance, setSortByDistance}}>                             
            {children}
        </UserContext.Provider>
    )
    
}

export function useUser() {
    return useContext( UserContext )
}