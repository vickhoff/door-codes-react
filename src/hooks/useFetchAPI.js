import {useState, useEffect} from "react"

export function useFetchAPI(url, initialValue) {
    const[data, setData] = useState(initialValue)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

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
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        if (!url) return
        fetchData()
    },[])

    return { data, isLoading, error, setData }
}