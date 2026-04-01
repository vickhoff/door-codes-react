import styles from "./Authentication.module.css"
import logoWhite from "../../../assets/images/logo-white.svg"
import logoBlack from "../../../assets/images/logo-black.svg"
import Form from "../../shared/Form/Form"
import { TextField } from "../../shared/Input/TextField"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import { useState, useEffect, useRef } from "react"
import { loginUser, registerUser } from "../../../api/auth"
import { Link } from "react-router-dom"

function AuthenticationPage({authType}) {

    const navigate = useNavigate();
    const {setUserData, fetchUser, user } = useAuth()
    const [error, setError] = useState({})

    const AUTH_CONFIG = {
        login: {
            heroClassName: styles.login,
            heroMessage: {
                title: "Hope you at least get in here",
                message: "Kidding, you probably have another app to remember the credentials for this site." 
            },
            formMessage: {
                title:"Welcome back!",
                message:"Add your credentials"
            },
            formContent: [
                { component: TextField, autoFocus: true, label: "Email", type: "email", name: "email", required:true, id: "input-email", placeholder: "Enter your email", error: error.email},
                { component: TextField, label: "Password", type: "password", name: "password", required: true, id: "input-password", placeholder: "Enter your password", error: error.password}
            ],
            buttons: [{variant: "primary", text: "Login"}],
            formSubmit: handleLoginForm,
            submitText: "Login",
            formLink: <>Not registered? <Link to="/signup">Signup here</Link></>
        },
        signup: {
            heroClassName: styles.signup,
            heroMessage: {
                title: "Be prepared to never ask for a forgotten door code again",
            },
            formMessage: {
                title:"Create your account"
            },
            formContent: [
                { component: TextField, autoFocus: true, label: "Name", type: "text", name: "name", required: true, id: "input-name", placeholder: "Enter your name", error: error.name },
                { component: TextField, label: "Email", type: "email", name: "email", required: true, id: "input-email", placeholder: "Enter your email", error: error.email },
                { component: TextField, label: "Password", type: "password", name: "password", required:true, id: "input-password", placeholder: "Choose a password", error: error.password }
            ],
            buttons: [{variant: "primary", text: "Signup"}],
            formSubmit: handleSignupForm,
            submitText: "Signup",
            formLink: <>Already have an account? <Link to="/login">Login here</Link></>
        }
    }

    async function handleLoginForm(loginData) {
        const formData = Object.fromEntries(loginData);
        try {
            await loginUser(formData)
            navigate("/me")
        } catch(error) {
            setError({general: error.message})
        }
    }
    
    async function handleSignupForm(signupData) {
        const formData = Object.fromEntries(signupData);
        try {
            await registerUser(formData)
            navigate("/me")
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

    const config = AUTH_CONFIG[authType]

    useEffect(() => {
        setError({})
    }, [authType])

    return (
        <main className={styles.authContainer}>
            <Link to="/" className={styles.logoCentered}><img className={`${styles.logo} ${styles.logoMobile}`} src={logoBlack} alt="GetIn logo" /></Link>
            <section className={`${styles.heroContainer} ${config.heroClassName}`}>
                <Link to="/"><img className={styles.logo} src={logoWhite} alt="GetIn logo" /></Link>
                
                <div className={styles.heroMessage}>
                    <h2 className={styles.heading2}>{config.heroMessage.title}</h2>
                    {config.heroMessage.message && <p>{config.heroMessage.message}</p>}
                </div>
            </section>
            <section className={styles.formContainer}>
                <header>
                    <h2>{config.formMessage.title}</h2>
                    {config.formMessage.message && <p>{config.formMessage.message}</p>}
                </header>
                <Form generalError={error.general} key={authType} authType={authType} fields={config.formContent} buttons={config.buttons} handleSubmit={config.formSubmit} primaryText={config.submitText}/>
                <p>{config.formLink}</p>
            </section>
        </main>
    )
}

export default AuthenticationPage