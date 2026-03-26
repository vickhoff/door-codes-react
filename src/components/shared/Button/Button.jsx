import { useFormStatus } from "react-dom"
import styles from "./Button.module.css"

function Button({ text, variant = "secondary", className, ...rest}) {
        const buttonVariant = variant === "secondary" ? styles.secondary : styles.primary;
        const { pending } = useFormStatus()

        return <button className={`${styles.button} ${buttonVariant} ${className ?? ""}`} disabled={pending} {...rest}>{pending ? <span className="loader" /> : text}</button>
}

export default Button