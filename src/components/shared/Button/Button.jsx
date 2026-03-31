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

        const { pending } = useFormStatus()
        const isSubmit = type !== "button"  

        return <button
        type={type} className={`${isSubmit && pending || loading ? styles.loading : ""} ${styles.button} ${buttonVariant} ${className ?? ""} ${pending}` }
                        disabled={pending} {...rest}
                >
                        {isSubmit && pending || loading ? <Spinner variant={buttonVariant === destructive ? "accent" : "inverted"} />: ""}{text}
                </button>
}

export default Button