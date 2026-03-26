import ListFilter from "../ListFilter/ListFilter"
import styles from "./CodeList.module.css"
import ListItem from "../ListItem/ListItem"
import { useUser } from "../../../context/UserContext"

function CodeList() {

    const { codes, isLoading } = useUser()
    
    return (
        <section className={styles.codesContainer}>
            <ListFilter />
            <div className={styles.listContainer}>
            {
            codes.map(codeItem => (
                <ListItem name={codeItem.name} code={codeItem.code}/>
            ))
        }
            </div>
        </section>
    )
}

export default CodeList