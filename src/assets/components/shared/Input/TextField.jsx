
import styles from "./Input.module.css"

export function TextField({ref, label, error, id, required, ...rest}) {

    
    return (
        <div className={styles.inputDiv}>
            {label && 
                <label htmlFor={id}>{label}{required && <span className={styles.required}> *</span>}</label>
            }
            <input className={styles.input} ref={ref} {...rest} />
            {error && <span className={styles.helper}>{error}</span>}
        </div>
    )

}