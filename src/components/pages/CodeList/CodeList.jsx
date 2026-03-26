import ListFilter from "./ListFilter"
import styles from "./CodeList.module.css"
import ListItem from "./ListItem"
import { useUser } from "../../../context/UserContext"
import SkeletonList from "./SkeletonList/SkeletonList"

function CodeList() {

    const { codes, isLoading, sortByDistance, setSortByDistance } = useUser()


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




    const codeList = sortedCodes.map(codeItem => (
        <ListItem key={codeItem._id} name={codeItem.name} code={codeItem.code} distance={codeItem.distance} />
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