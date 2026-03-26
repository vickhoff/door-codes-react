import Button from "../../shared/Button/Button"
import styles from "./ListFilter.module.css"
import { useUser } from "../../../context/UserContext"



function ListFilter() {

    const { sortByDistance, setSortByDistance } = useUser()

    return (
        <div className={styles.container}>
            <button onClick={() => setSortByDistance(true)} className={`${styles.filterButton} ${sortByDistance ? styles.active : ""}`}>Codes near you</button>
            <button onClick={() => setSortByDistance(false)} className={`${styles.filterButton} ${!sortByDistance ? styles.active : ""}`}>All your codes</button>
            <Button text="Add a code" variant="primary"/>
        </div>
    )
}

export default ListFilter