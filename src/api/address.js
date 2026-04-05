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
            "locationBias": {
                "circle": {
                    "center": {
                        "latitude": 62.45211239799033,
                        "longitude": 15.279218389073096
                    },
                    "radius": 500.0
                }
            }
        })
    })
    if (!response.ok) throw new Error("Failed to fetch addresses")

    return response.json()
}

export default autoComplete