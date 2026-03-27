import styles from "./ListItem.module.css"
import Tag from "../../shared/Tag/Tag"

function ListItem({name, code, distance, isClosest, onClick}) {

    return (
        <div className={styles.rowContainer}>
            <div>
                <p>{name}</p>
                <p className={styles.code}>{code}</p>
            </div>
            <div className={styles.distance}>
                {isClosest && <Tag text={"Nearest"}/>}
                <span>{distance} km</span>
            </div>
        </div>
    )
}

export default ListItem