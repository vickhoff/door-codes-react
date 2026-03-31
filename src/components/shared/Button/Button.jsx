import { useFormStatus } from "react-dom"
import styles from "./Button.module.css"
import Spinner from "../Spinner/Spinner"

function Button({ text, variant = "secondary", className, loading, ...rest}) {
        const primary = styles.primary
        const secondary = styles.secondary
        const ghost = styles.ghost
        const destructive = styles.destructive

        let buttonVariant = secondary

        if (variant === "primary") {
                buttonVariant = primary
        } else if (variant === "secondary") {
                buttonVariant = secondary
        } else if (variant === "ghost") {
                buttonVariant = ghost
        } else if (variant === "destructive") {
                buttonVariant = destructive
        }

        const { pending } = useFormStatus()

        return <button
                        className={`${pending || loading ? styles.loading : ""} ${styles.button} ${buttonVariant} ${className ?? ""} ${pending}`}
                        disabled={pending} {...rest}
                >
                        {pending || loading ? <Spinner variant={"inverted"} />: ""}{text}
                </button>
}

export default Button