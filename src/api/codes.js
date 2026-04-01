async function createCode(codeData) {
    const response = await fetch("/api/items/add", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(codeData),
    })

        if (!res.ok) throw new Error("Failed to add code")

    return response.json()
}

async function updateCode(codeData, id) {
    const response = await fetch(`/api/items/update/${id}`, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(codeData),
    })

    if (!response.ok) throw new Error("Failed to update code")

    return response.json()
}

async function deleteCode(id) {
    console.log(id)
    const response = await fetch(`/api/items/delete/${id}`, {
        method: "DELETE",
        credentials: "include",
    })

    if (!response.ok) throw new Error("Failed to delete code")

    return response.json()
}

export { createCode, updateCode, deleteCode }