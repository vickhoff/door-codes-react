import { TextField } from "../shared/Input/TextField"
import { Button } from "../shared/Button/Button"
import { Link } from "react-router-dom"
import { loginUser } from "../../../api/auth"
import { useState } from "react"

export function LoginPage() {

    const [error, setError] = useState(null)

    async function handleLoginForm(loginData) {
        const userData = Object.fromEntries(loginData);
        try {
            const data = await loginUser(userData)
        } catch(error) {
            setError(error.message)
        }
    }



    return (
        <>
            <h1>Login</h1>
            <form action={handleLoginForm}>
                <div>
                    <TextField required label="Email" id="input-email" placeholder="Enter your email" name="email"/>
                </div>

                <div>
                    <TextField required type="password" autocomplete="password" label="Password" id="input-password" placeholder="Enter your password" name="password"/>
                </div>
                <Button text="Login" />
            </form>
            <p>Not registered? <Link to="/signup">Signup here</Link></p>
        </>
    )
}