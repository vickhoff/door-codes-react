import {useState, useEffect} from "react"

export function useFetchAPI(url, initialValue) {
    const[data, setData] = useState(initialValue)
    const [isLoading, setIsLoading] = useState(true)

    async function fetchData() {
        try {
            const response = await fetch(url, {
                credentials: "include"
            })

            if(!response.ok) {
                const error = await response.json()
                throw new Error(error.message || "Something went wrong")
            }

            const result = await response.json()
            setData(result)
        } catch(error) {
            console.error(`Failed to fetch from ${url}`)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return { data, isLoading, setData }
}