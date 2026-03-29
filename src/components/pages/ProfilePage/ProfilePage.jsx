import { useAuth } from "../../../context/AuthContext"
import { useUser } from "../../../context/UserContext"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import CodeList from "../CodeList/CodeList"
import PageHeader from "../../shared/PageHeader/PageHeader"
import styles from "./ProfilePage.module.css"
import { createPortal } from 'react-dom'
import AddModal from "../CodeList/AddModal"


function ProfilePage() {

    const navigate = useNavigate()
    const { user, isLoadingAuth } = useAuth()
    const [showAddModal, setShowAddModal] = useState(false)

    if (isLoadingAuth) return <h1>Loading...</h1>

    return (
        <section className={styles.section}>
            <PageHeader title={`Welcome ${user.name}`} message={"What code did you forget today?"}/>
            <CodeList onAddCode={() => setShowAddModal(true)} />
            {showAddModal && createPortal(
                <AddModal onClose={() => setShowAddModal(false)} />,
                document.body
            )}
        </section>
    )
}

export default ProfilePage