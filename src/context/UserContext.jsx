import { createContext, useContext, useState, useEffect } from "react"
import { useFetchAPI } from "../hooks/useFetchAPI"
import { useMemo } from "react"
import { createCode, updateCode, deleteCode } from "../api/codes"

const UserContext = createContext()

export function UserProvider({ children }) {

    const { data, setData, isLoading: isLoadingCodes } = useFetchAPI("/api/items", [])

    function randomDistance() {
        const minCeiled = Math.ceil(1);
        const maxFloored = Math.floor(100);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    const codesWithDistance = useMemo(() =>
        data.map(codeItem => ({ ...codeItem, distance: randomDistance() }))
        , [data])
    
    const codes = useMemo(() => {
        if (!codesWithDistance.length) return []
        const closest = Math.min(...codesWithDistance.map(c => c.distance))
        return codesWithDistance.map(codeItem => ({
            ...codeItem,
            isClosest: codeItem.distance === closest
        }))
    }, [codesWithDistance])

    const [sortByDistance, setSortByDistance] = useState(true)

    async function addCodeItem(codeData) {
        const newItem = await createCode(codeData)
        setData(prev => [...prev, newItem])
    }

    async function updateCodeItem(codeData, id) {
        const { data: savedItem } = await updateCode(codeData, id)
        setData(prev => prev.map(codeItem => codeItem._id === id ? savedItem : codeItem))
    }

    async function deleteCodeItem(id) {
        const { data: deletedItem } = await deleteCode(id)
        setData(prev => prev.filter(codeItem => codeItem._id === id ? deletedItem : codeItem))
    }

    const[navIsVisible, setNavIsVisible] = useState(false)

    return (
        <UserContext.Provider value={{ codes, navIsVisible, isLoadingCodes, sortByDistance, setSortByDistance, addCodeItem, updateCodeItem, deleteCodeItem }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return useContext(UserContext)
}