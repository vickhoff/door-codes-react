import {useState, useEffect} from "react"
import { TextField } from "../shared/Input/TextField"
import styles from "./Authentication.module.css"

export function Signup() {

    const[formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    async function signUp(signupData) {
        const newUserData = Object.fromEntries(signupData);
        console.log(newUserData)
        try {
            const response = await fetch("https://door-codes-seven.vercel.app/api/auth/register", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(newUserData),
                })
                if (!response.ok) {
                    const errorBody = await response.json()
                    console.error("400 error:", errorBody)
                    return
                }
                console.log("You signed up!")
        } catch(error) {
            console.error(error)
        }

    }

    return (
        <form action={signUp}>
            <div>
                <TextField defaultValue="David" label="Name" id="input-name" placeholder="Enter your name" name="username"/>
            </div>

            <div>
                <TextField type="email" defaultValue="david@gmail.com" autocomplete="new-email" label="Email" id="input-email" placeholder="Enter your email" name="email"/>
            </div>

            <div>
                <TextField type="password" defaultValue="password" autocomplete="new-password" label="Password" id="input-password" placeholder="Choose a password" name="password"/>
            </div>
            <button>Signup</button>
        </form>
    )
}