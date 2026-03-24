import styles from "./Authentication.module.css"
import logo from "../../images/logo.svg"
import Form from "../shared/Form/Form"
import { TextField } from "../shared/Input/TextField"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import { useState, useEffect, useRef } from "react"
import { loginUser, registerUser } from "../../../api/auth"
import { Link } from "react-router-dom"


export default function AuthenticationPage({authType}) {

    const navigate = useNavigate();
    const {setUserData} = useAuth()
    const {user} = useAuth()
    const [error, setError] = useState({})

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
            setError({general: error.message})
        }
    }

    async function handleSignupForm(signupData) {
        const newUserData = Object.fromEntries(signupData);
        try {
            await registerUser(newUserData)
            const userResponse = await fetch("/api/user/me", {
                credentials: "include"
            })
            const userData = await userResponse.json()
            setUserData(userData)
            navigate("/me")
            console.log(error)
            
        } catch (error) {
            if (error.message.toLowerCase().includes("name")) {
                setError(prev => ({ ...prev, name: "Name already exists" }))
            } else if (error.message.toLowerCase().includes("email")) {
                setError(prev => ({ ...prev, email: "Email already exists"}))
            } else {
                setError(prev => ({ ...prev, password: error.message }))
            }
        }
    }

    let heroClassName, heroMessage, formMessage, formContent, formSubmit, formLink, submitText

    if (authType === "login") {
        heroClassName = styles.login

        heroMessage = {
                title: "Hope you at least get in here",
                message: "Kidding, you probably have another app to remember the credentials for this site." 
            }

        formMessage = {
            title:"Welcome back!",
            message:"Add your credentials"
        }

        formContent = [
            { component: TextField, autoFocus: true, label: "Email", type: "email", name: "email", required:true, id: "input-email", placeholder: "Enter your email", error: error.name},
            { component: TextField, label: "Password", type: "password", name: "password", required: true, id: "input-password", placeholder: "Enter your password", error: error.password}
        ]
        
        formSubmit = handleLoginForm

        submitText = "Login"

        formLink = <>Not registered? <Link to="/signup">Signup here</Link></>
    } else if (authType === "signup") {
        heroClassName = styles.signup
        
        heroMessage = {
            title: "Be prepared to never ask for a forgotten door code again",
            message: "" 
        }

        formMessage = {
            title:"Create your account"
        }
        
        formContent = [
            { component: TextField, autoFocus: true, label: "Name", type: "text", name: "name", required: true, id: "input-name", placeholder: "Enter your name", error: error.name },
            { component: TextField, label: "Email", type: "email", name: "email", required: true, id: "input-email", placeholder: "Enter your email", error: error.email },
            { component: TextField, label: "Password", type: "password", name: "password", required:true, id: "input-password", placeholder: "Choose a password", error: error.password }
        ]

        formSubmit = handleSignupForm

        submitText = "Signup"

        formLink = <>Already have an account? <Link to="/login">Login here</Link></>

    }

    useEffect(() => {
        setError({})
    }, [authType])

    return (
        <main className={styles.authContainer}>
            <section className={`${styles.heroContainer} ${heroClassName}`}>
                <Link to="/"><img className={styles.logo} src={logo} alt="GetIn logo" /></Link>
                <div className={styles.heroMessage}>
                    <h2 className={styles.heading2}>{heroMessage.title}</h2>
                    <p>{heroMessage.message}</p>
                </div>
            </section>
            <section className={styles.formContainer}>
                <header>
                    <h2>{formMessage.title}</h2>
                    {formMessage && <p>{formMessage.message}</p>}
                </header>
                <Form generalError={error.general} authType={authType} fields={formContent} handleSubmit={formSubmit} buttonText={submitText}/>
                <p>{formLink}</p>
            </section>
        </main>
    )
}