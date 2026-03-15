import { TextField } from "../shared/Input/TextField"
import { useState } from "react"
import styles from "./Authentication.module.css"
import { registerUser } from "../../../api/auth"
import { Button } from "../shared/Button/Button"
import { Link } from "react-router-dom"

export function SignupPage() {

    const [errors, setErrors] = useState({
        name: null,
        email: null,
        password: null
    })

    async function handleSignupForm(signupData) {
        const newUserData = Object.fromEntries(signupData);
        try {
            await registerUser(newUserData)
        } catch (error) {
            if (error.message.toLowerCase().includes("username")) {
                setErrors(prev => ({ ...prev, name: "Username already exists" }))
            } else if (error.message.toLowerCase().includes("email")) {
                setErrors(prev => ({ ...prev, email: "Email already exists"}))
            } else {
                setErrors(prev => ({ ...prev, password: error.message }))
            }
        }
    }

    return (
        <>
            <h1>Signup</h1>
            <form action={handleSignupForm}>
                <div>
                    <TextField required label="Name" id="input-name" placeholder="Enter your name" name="username" errorText={errors.name}/>
                </div>

                <div>
                    <TextField required type="email" defaultValue="@gmail.com" autocomplete="new-email" label="Email" id="input-email" placeholder="Enter your email" name="email" errorText={errors.email} />
                </div>

                <div>
                    <TextField required type="password" defaultValue="password" autocomplete="new-password" label="Password" id="input-password" placeholder="Choose a password" name="password" />
                </div>
                <Button text="Signup" />
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </>
    )
}