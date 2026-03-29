import ListFilter from "./ListFilter"
import styles from "./CodeList.module.css"
import ListItem from "./ListItem"
import { useUser } from "../../../context/UserContext"
import SkeletonList from "./SkeletonList/SkeletonList"
import Button from "../../shared/Button/Button"

function CodeList({onAddCode}) {

    const { codes, isLoadingCodes, sortByDistance, setSortByDistance } = useUser()


    function sortCodes(array, value) {
        return [...array].sort((a, b) => {
            if (a[value] < b[value]) return -1
            if (a[value] > b[value]) return 1
            return 0
        })
    }

    const nearCodes = sortCodes(codes, "distance")
    const allCodes = sortCodes(codes, "name")
    const sortedCodes = sortByDistance ? nearCodes : allCodes

    function handleRowClick(event) {
            console.log(event.target)
    }


    const codeList = sortedCodes.map(codeItem => (
        <ListItem onClick={handleRowClick} key={codeItem._id} name={codeItem.name} code={codeItem.code} distance={codeItem.distance} isClosest={codeItem.isClosest} />
    ))

    return (
        <div>
            <ListFilter onAddCode={onAddCode} />
            <div className={styles.listContainer}>
                {isLoadingCodes
                    ? <SkeletonList />
                    : sortedCodes.length === 0
                        ? <div className={styles.emptyState}>
                            <p>No codes added yet 😢</p>
                            <Button text="Add your first code" />
                        </div>  
                        : codeList
                } 
            </div>
        </div>
    )
}

export default CodeList