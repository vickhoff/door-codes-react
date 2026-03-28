import { createContext, useContext, useState, useEffect } from "react"
import { useFetchAPI } from "../hooks/useFetchAPI"
import { useMemo } from "react"

const UserContext = createContext()

export function UserProvider({ children }) {

    const { data, setData, isLoading } = useFetchAPI("/api/items", [])



    function randomDistance() {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(100);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    const codesWithDistance = useMemo(() =>
        data.map(codeItem => ({ ...codeItem, distance: randomDistance() }))
        , [data])

    const codes = useMemo(() => {
        const closest = Math.min(...codesWithDistance.map(c => c.distance))
        return codesWithDistance.map(codeItem => ({
            ...codeItem,
            isClosest: codeItem.distance === closest
        }))
    }, [codesWithDistance])

    const [sortByDistance, setSortByDistance] = useState(true)

    async function addCodeItem(codeData) {
        const response = await fetch("/api/items/add", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            credentials: "include",
            body: JSON.stringify(codeData),
        })
        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message || "Something went wrong")
        }
        const savedItem = await response.json()
        setData(prev => [...prev, savedItem])
    }

    return (
        <UserContext.Provider value={{ codes, isLoading, sortByDistance, setSortByDistance, addCodeItem }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}