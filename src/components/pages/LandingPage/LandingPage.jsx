import { ButtonLink } from "../../shared/Button/ButtonLink"
import logo from "../../../assets/images/logo-white.svg"
import styles from "./LandingPage.module.css"
import NavBar from "../../shared/NavBar/NavBar"

function LandingPage() {

    const pages = [
        {title: "How does it work?", url: ""},
        {title: "User stories", url: "#stories"},
        {title: "Prices", url: "#prices"},
        {title: "Contact us", url: "#contact"}
    ]

    return (
        <>
            <header><NavBar theme={"light"} pages={pages} /></header>
            <section className={styles.hero}>
                <img className={styles.logo} src={logo} alt="GetIn logotype" />
                <div className={styles.titleGroup}>
                    <h1 className={styles.title}>When you need the code - Right now</h1>
                    <p>Do you also keep forgetting your friends door codes? Never again </p>
                </div>
                <div className={styles.buttonGroup}>
                    <ButtonLink path={"/signup"} variant="primary" text="Create account"/>
                    <ButtonLink path={"/login"} text="Login"/>
                </div>

            </section>
        </>
    )
}

export default LandingPage