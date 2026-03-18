export async function getMe() {
    const response = await fetch("/api/items", {
        credentials: "include"
    })
    const data = await response.json()

    console.log(data)
}