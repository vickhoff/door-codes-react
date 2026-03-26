import styles from "./PageHeader.module.css"

function PageHeader({title, message}) {

    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            {message && <p>{message}</p>}
        </header>
    )
}

export default PageHeader