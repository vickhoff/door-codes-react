import { ButtonLink } from "../shared/Button/ButtonLink"
import styles from "./LandingPage.module.css"

function LandingPage() {
    return (
        <section>
            <h1>GetIn</h1>
            <p>When you need the code - RIGHT NOW</p>
            <div className={styles.buttonGroup}>
                <ButtonLink path={"/signup"} variant="primary" text="Signup"/>
                <ButtonLink path={"/login"} text="Login"/>
            </div>

        </section>
    )
}

export default LandingPage