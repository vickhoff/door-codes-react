import { TextField } from "../shared/Input/TextField"
import { Button } from "../shared/Button/Button"
import { Link } from "react-router-dom"
import { loginUser } from "../../../api/auth"
import { useState, useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"

export default function AuthForm({authType}) {

    const navigate = useNavigate();
    const {setUserData} = useAuth()
    const {user} = useAuth()
    const [errors, setErrors] = useState(null)
    const inputRef = useRef()

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
            setErrors(error.message)
        }
    }

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
        <form action={authType === "login" ? handleLoginForm : handleSignupForm}>
            <div>
                <TextField autoFocus required type={"email"} label={"Email"} id={"input-email"} placeholder={"Enter your email"} name={"email"}/>
            </div>

            <div>
                <TextField required type={"password"} autoComplete={"password"} label={"Password"} id={"input-password"} placeholder={"Enter your password"} name={"password"}/>
            </div>
            <Button text="Login" />
        </form>
    )
}