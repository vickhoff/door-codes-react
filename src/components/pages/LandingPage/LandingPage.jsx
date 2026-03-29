import { ButtonLink } from "../../shared/Button/ButtonLink"
import logo from "../../../assets/images/logo-white.svg"
import styles from "./LandingPage.module.css"

function LandingPage() {
    return (
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
    )
}

export default LandingPage