import styles from "./SkeletonList.module.css"

function SkeletonList() {
    return (
    <div className={styles.container}>
        <div className={`skeleton-animation ${styles.skeletonItem}`}></div>
        <div className={`skeleton-animation ${styles.skeletonItem}`}></div>
        <div className={`skeleton-animation ${styles.skeletonItem}`}></div>
    </div>
            
    )
}

export default SkeletonList