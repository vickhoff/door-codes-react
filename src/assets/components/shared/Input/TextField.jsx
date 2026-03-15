
import styles from "./Input.module.css"

export function TextField({
    label,
    required,
    defaultValue,
    type = "text",
    id,
    name,
    placeholder,
    autocomplete,
    errorText
}) {

    
    return (
        <div className={styles.inputDiv}>
           {label && <label htmlFor={id}>{label}{required && <span className={styles.required}> *</span>}</label>}
            <input required={required} className={styles.input} type={type} defaultValue={defaultValue} id={id} name={name} placeholder={placeholder} autoComplete={autocomplete}
             />
             {errorText && <span className={styles.helper}>{errorText}</span>}
        </div>
    )

}