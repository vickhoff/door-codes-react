import ListFilter from "./ListFilter"
import styles from "./CodeList.module.css"
import ListItem from "./ListItem"
import { useUser } from "../../../context/UserContext"
import SkeletonList from "./SkeletonList/SkeletonList"

function CodeList() {

    const { codes, isLoading } = useUser()
    const codeList = codes.map((codeItem, i) => (
        <>
        <ListItem key={codeItem._id} name={codeItem.name} code={codeItem.code} distance={(i + 1) * 5}/>
        </>
    ))
    
    return (
        <div>
            <ListFilter />
            
            <div className={styles.listContainer}>
                {isLoading ? <SkeletonList /> : codeList}
                
            </div>
        </div>
    )
}

export default CodeList