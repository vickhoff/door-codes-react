import { useFormStatus } from "react-dom"
import { TextField } from "../shared/Input/TextField"
import styles from "./Authentication.module.css"
import { registerUser } from "../../../api/auth"
import { Button } from "../shared/Button/Button"
import { Link } from "react-router-dom"


export function SignupPage() {

    async function handleSignupForm(signupData) {
        const newUserData = Object.fromEntries(signupData);
        try {
            await registerUser(newUserData)
        } catch(error) {
            console.error(error)
        }
    }

    return (
        <>
            <h1>Signup</h1>
            <form action={handleSignupForm}>
                <div>
                    <TextField label="Name" id="input-name" placeholder="Enter your name" name="username"/>
                </div>

                <div>
                    <TextField type="email" defaultValue="@gmail.com" autocomplete="new-email" label="Email" id="input-email" placeholder="Enter your email" name="email"/>
                </div>

                <div>
                    <TextField type="password" defaultValue="password" autocomplete="new-password" label="Password" id="input-password" placeholder="Choose a password" name="password"/>
                </div>
                <Button text="Signup" />
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </>
    )
}
