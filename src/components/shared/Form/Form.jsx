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

    const destructiveButton = buttons.filter(button => button.variant === "destructive")
    const nonDestructiveButtons = buttons.filter(button => button.variant !== "destructive")

    return (

        <form className={styles.form} action={handleSubmit}>
            {fields.map(({ component: Component, ...field}) => (
                <Component key={field.name} {...field} onBlur={handleBlur} error={field.error || blurErrors[field.name]} />
            ))}

            { generalError && <p className={styles.generalFormError}>{generalError}</p> }

            <div className={styles.buttonWrapper}> 
                {destructiveButton.length > 0 && destructiveButton.map(button => <Button key={button.text} variant={button.variant} type={"button"} text={button.text} loading={button.loading} onClick={button.onClick} />)}
                <div className={styles.buttonContainer}>
                    {nonDestructiveButtons.map(button => (
                        <Button key={button.text} className={buttons.length === 1 ? styles.fullWidthSubmit : ""} variant={button.variant} type={button.type} text={button.text} onClick={button.onClick} />
                    ))}
                </div>
            </div>

        </form>
    )
}