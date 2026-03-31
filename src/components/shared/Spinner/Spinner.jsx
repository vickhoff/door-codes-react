import styles from "./Spinner.module.css"

function Spinner({variant}) {

    return <span className={`${styles.spinner} ${variant === "inverted" ? styles.inverted : styles.accent}`} />    
}

export default Spinner