import ListFilter from "./ListFilter"
import styles from "./CodeList.module.css"
import ListItem from "./ListItem"
import { useUser } from "../../../context/UserContext"

function CodeList() {

    const { codes, isLoading } = useUser()
    const codeList = codes.map(codeItem => (
        <ListItem name={codeItem.name} code={codeItem.code}/>
    ))
    const loader = <span class="loader accent"></span>
    
    return (
        <section className={styles.codesContainer}>
            <ListFilter />
            
            <div className={styles.listContainer}>
                {isLoading ? loader : codeList}
            </div>
        </section>
    )
}

export default CodeList