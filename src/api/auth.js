
export async function loginUser(userData) {
    const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
        },
        credentials: "include",
        body: JSON.stringify(userData),
        })

        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message)
        }
        console.log("You logged in!")
        return response.json()
}

export async function registerUser(userData) {
            const response = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                },
                credentials: "include",
                body: JSON.stringify(userData),
                })
                if (!response.ok) {
                    const error = await response.json()
                    throw new Error(error.message || "Something went wrong")
                }

                console.log("You signed up!")
                return response.json()
}
