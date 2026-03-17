import { TextField } from "../shared/Input/TextField"
import { Button } from "../shared/Button/Button"
import { Link } from "react-router-dom"
import { loginUser } from "../../../api/auth"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"


export function LoginPage() {

    const navigate = useNavigate();
    
    const {setUserData} = useAuth()
    
    const {user} = useAuth()
    
    const [error, setError] = useState(null)

    async function handleLoginForm(loginData) {
        const formData = Object.fromEntries(loginData);
        try {
            const data = await loginUser(formData)
            const userResponse = await fetch("/api/user/me", {
                credentials: "include"
            })
            const userData = await userResponse.json()
            console.log(userData)
            setUserData(userData)
            navigate("/me")
        } catch(error) {
            setError(error.message)
        }
    }



    return (
        <>
            <h1>Login</h1>
            <form action={handleLoginForm}>
                <div>
                    <TextField required type="email" label="Email" id="input-email" placeholder="Enter your email" name="email"/>
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