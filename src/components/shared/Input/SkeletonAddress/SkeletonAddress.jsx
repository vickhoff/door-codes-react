import styles from "./SkeletonAddress.module.css"

function SkeletonAddress() {
    return (
    <div className={styles.container}>
        <div className={`skeleton-animation ${styles.skeletonItem}`}></div>
        <div className={`skeleton-animation ${styles.skeletonItem}`}></div>
        <div className={`skeleton-animation ${styles.skeletonItem}`}></div>
    </div>
            
    )
}

export default SkeletonAddress