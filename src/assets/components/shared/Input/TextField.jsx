
import styles from "./Input.module.css"

export function TextField({label, error, id, required, ...rest}) {

    
    return (
        <div className={styles.inputDiv}>
            {label && 
                <label htmlFor={id}>{label}{required && <span className={styles.required}> *</span>}</label>
            }
            <input className={styles.input} {...rest} />
            {error && <span className="error-message">{error}</span>}
        </div>
    )

}