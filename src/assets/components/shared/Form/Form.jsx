import {Button} from "../Button/Button"
import styles from "./Form.module.css"
import {useState} from "react"

export default function Form({fields, handleSubmit, buttonText, generalError}) {

    const [blurErrors, setBlurErrors] = useState({})

    function handleBlur(e) {
        const {name, value, required} = e.target
        if (required && value.trim() === "") {
            setBlurErrors(prev => ({...prev, [name]: "This field is required"}))
        } else {
            setBlurErrors(prev => ({...prev, [name]: undefined}))
        }
    }

    return (
        <form className={styles.form} action={handleSubmit}>
            {fields.map(({ component: Component, ...field}) => (
                <Component key={field.name} {...field} onBlur={handleBlur} error={field.error || blurErrors[field.name]} />
            ))}

            { generalError && <p className={styles.generalFormError}>{generalError}</p> }

            <Button className={styles.extraTopMargin} text={buttonText} variant={"primary"}/>
        </form>
    )
}