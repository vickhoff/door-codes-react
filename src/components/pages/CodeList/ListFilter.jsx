import Button from "../../shared/Button/Button"
import styles from "./ListFilter.module.css"
import { useUser } from "../../../context/UserContext"



function ListFilter() {

    const { setSortByDistance } = useUser()

    return (
        <div className={styles.container}>
            <button onClick={() => setSortByDistance(true)} className={styles.filterButton}>Codes near you</button>
            <button onClick={() => setSortByDistance(false)} className={styles.filterButton}>All your codes</button>
            <Button text="Add a code" variant="primary"/>
        </div>
    )
}

export default ListFilter