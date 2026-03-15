
import styles from "./Input.module.css"

export function TextField({
    label,
    required,
    defaultValue,
    id,
    name,
    placeholder,
    autocomplete,
    errorText
}) {

    
    return (
        <div className={styles.inputDiv}>
           {label && <label htmlFor={id}>{label}</label>}
            <input required ={required} className={styles.input} type="text" defaultValue={defaultValue} id={id} name={name} placeholder={placeholder} autoComplete={autocomplete}
             />
             {errorText && <span className={styles.helper}></span>}
        </div>
    )

}