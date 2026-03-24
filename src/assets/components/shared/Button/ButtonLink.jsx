import styles from "./Button.module.css"
import { Link } from "react-router-dom"

export function ButtonLink({ text, path, variant = "secondary"}) {
        const buttonVariant = variant === "secondary" ? styles.secondary : styles.primary;

        return <Link to={path} className={`${styles.button} ${styles.buttonLink} ${buttonVariant}`}>{text}</Link>
}