import styles from "./Tag.module.css"

function Tag({text}) {
    return <span className={styles.tag}>{text}</span>
}

export default Tag