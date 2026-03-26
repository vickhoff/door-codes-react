import styles from "./ListItem.module.css"

function ListItem({name, code, distance}) {

    return (
        <div className={styles.rowContainer}>
            <div>
                <p>{name}</p>
                <p className={styles.code}>{code}</p>
            </div>
            <p>5m</p>
        </div>

    )
}

export default ListItem