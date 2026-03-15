const baseUrl = "https://door-codes-seven.vercel.app/api"

export async function registerUser(userData) {
            const response = await fetch(`${baseUrl}/auth/register`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(userData),
                })

                if (!response.ok) {
                    const error = await response.json()
                    throw new Error(error.message)
                }

                console.log("You signed up!")
                return response.json()
}

export async function loginUser(userData) {
    const response = await fetch(`${baseUrl}/auth/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            'Content-Type': "application/json",
        },
        body: JSON.stringify(userData),
        })

        if (!response.ok) {
            const error = await response.json()
            throw new Error(error.message)
        }

        console.log("You logged in!")
        return response.json()
}