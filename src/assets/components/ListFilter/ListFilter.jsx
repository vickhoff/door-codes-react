import Button from "../shared/Button/Button"
import styles from "./ListFilter.module.css"

function ListFilter() {

    return (
        <div className={styles.container}>
            <button className={styles.filterButton}>Codes near you</button>
            <button className={styles.filterButton}>All your codes</button>
            <Button text="Add a code" variant="primary"/>
        </div>
    )
}

export default ListFilter