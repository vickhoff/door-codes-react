import styles from "./Authentication.module.css"
import logo from "../../images/logo.svg"
import AuthForm from "./AuthForm"

export default function AuthenticationPage({authType}) {

    const heroClassName = authType === "login" ? styles.login : styles.signup
    const heroContent = {
        login: { 
            title: "Hope you at least get in here",
            message: "Kidding, you probably have another app to remember the credentials for this site." 
        },       
        signup: { 
            title: "...",
            message: "..."
        }                                        
    }[authType]  


    return (
        <section className={styles.authContainer}>
            <section className={`${styles.heroContainer} ${heroClassName}`}>
                <img className={styles.logo} src={logo} alt="GetIn logo" />
                <div>
                    <h2 className={styles.heading2}>{heroContent.title}</h2>
                    <p>{heroContent.message}</p>
                </div>
            </section>
            <section className={styles.formContainer}><AuthForm authType={authType}/></section>
        </section>
    )
}