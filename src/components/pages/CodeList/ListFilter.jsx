import Button from "../../shared/Button/Button"
import styles from "./ListFilter.module.css"
import { useUser } from "../../../context/UserContext"
import { useState } from "react"
import { createPortal } from "react-dom"
import AddModal from "./AddModal"



function ListFilter() {

    const { sortByDistance, setSortByDistance, addCodeItem } = useUser()
    
    const[showModal, setShowModal] = useState(false)

    return (
        <div className={styles.container}>
            <button onClick={() => setSortByDistance(true)} className={`${styles.filterButton} ${sortByDistance ? styles.active : ""}`}>Codes near you</button>
            <button onClick={() => setSortByDistance(false)} className={`${styles.filterButton} ${!sortByDistance ? styles.active : ""}`}>All your codes</button>
            <Button onClick={() => setShowModal(true)} text="Add a code" variant="primary"/>
        
            {showModal && createPortal(
                <AddModal onClose={() => setShowModal(false)}/>
                ,document.body
  )}
        </div>
    )
}

export default ListFilter