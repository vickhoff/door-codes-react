async function autoComplete(inputData) {
    const response = await fetch("/api/address/autocomplete", {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
            "input": inputData,
        })
    })
    if (!response.ok) throw new Error("Failed to fetch addresses")

    return response.json()
}

export default autoComplete