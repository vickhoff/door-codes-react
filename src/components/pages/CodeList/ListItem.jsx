import styles from "./ListItem.module.css"
import Tag from "../../shared/Tag/Tag"

function ListItem({name, code, distance, isClosest, onClick, id}) {

    return (
        <button className={styles.rowContainer} onClick={() => onClick(id)}>
            <div className={styles.innerContainer}>
                <div>
                    <p>{name}</p>
                    <p className={styles.code}>{code}</p>
                </div>
                <div className={styles.distance}>
                    {isClosest && <Tag text={"Nearest"}/>}
                    <span>{distance} km</span>
                </div>
            </div>
        </button>
    )
}

export default ListItem