import Button from "../Button/Button"
import styles from "./Form.module.css"
import {useState} from "react"
import Spinner from "../Spinner/Spinner"

export default function Form({fields, buttons, handleSubmit, generalError, isLoading}) {

    const [blurErrors, setBlurErrors] = useState({})

    function handleBlur(e) {
        const {name, value, required} = e.target
        if (required && value.trim() === "") {
            setBlurErrors(prev => ({...prev, [name]: "This field is required"}))
        } else {
            setBlurErrors(prev => ({...prev, [name]: undefined}))
        }
    }

    if (isLoading) return <div className={styles.spinnerContainer}><Spinner variant={"accent"}/></div>

    return (

        <form className={styles.form} action={handleSubmit}>
            {fields.map(({ component: Component, ...field}) => (
                <Component key={field.name} {...field} onBlur={handleBlur} error={field.error || blurErrors[field.name]} />
            ))}

            { generalError && <p className={styles.generalFormError}>{generalError}</p> }

            <div className={styles.buttonContainer}>
                {buttons.map(button => (
                    <Button key={button.text} className={buttons.length === 1 ? styles.fullWidthSubmit : ""} variant={button.variant} text={button.text} onClick={button.onClick} />
                ))}
            </div>

        </form>
    )
}