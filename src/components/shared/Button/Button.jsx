import { useFormStatus } from "react-dom"
import styles from "./Button.module.css"
import Spinner from "../Spinner/Spinner"

function Button({ text, variant = "secondary", className, loading, type, ...rest}) {

        let buttonVariant = "secondary"

        if (variant === "primary") {
                buttonVariant = styles.primary
        } else if (variant === "secondary") {
                buttonVariant = styles.secondary
        } else if (variant === "ghost") {
                buttonVariant = styles.ghost
        } else if (variant === "destructive") {
                buttonVariant = styles.destructive
        }

        return (
                <button
                type={type}
                className={`${loading ? styles.loading : ""} ${styles.button} ${buttonVariant} ${className ?? ""}`}
                disabled={loading}
                {...rest}
            >
                {loading ? <Spinner variant={variant} /> : ""}{text}
            </button>
            )
}

export default Button
