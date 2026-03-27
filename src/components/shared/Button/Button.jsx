import { useFormStatus } from "react-dom"
import styles from "./Button.module.css"

function Button({ text, variant = "secondary", className, ...rest}) {
        const primary = styles.primary
        const secondary = styles.secondary
        const ghost = styles.ghost

        let buttonVariant = secondary

        if (variant === "primary") {
                buttonVariant = primary
        } else if (variant === "secondary") {
                buttonVariant = secondary
        } else if (variant === "ghost") {
                buttonVariant = ghost
        }

        //const buttonVariant = variant === "secondary" ? styles.secondary : styles.primary;
        const { pending } = useFormStatus()

        return <button className={`${styles.button} ${buttonVariant} ${className ?? ""}`} disabled={pending} {...rest}>{pending ? <span className="loader" /> : text}</button>
}

export default Button