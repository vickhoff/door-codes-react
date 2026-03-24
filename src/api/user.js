export async function getMe() {
    const response = await fetch("/api/items", {
        credentials: "include"
    })

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Something went wrong")
    }
    const data = await response.json()

    return data
}