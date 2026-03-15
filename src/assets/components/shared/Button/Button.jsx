import { useFormStatus } from "react-dom"
import styles from "./Button.module.css"

export function Button({ text, variant = "secondary"}) {
        const buttonVariant = variant === "secondary" ? styles.secondary : styles.primary;
        const { pending } = useFormStatus()

        return <button className={`${styles.button} ${buttonVariant}`} disabled={pending}>{pending ? "Loading" : text}</button>
}