import { useAuth } from "../../../context/AuthContext"
import { useState } from "react"
import CodeList from "../CodeList/CodeList"
import PageHeader from "../../shared/PageHeader/PageHeader"
import styles from "./ProfilePage.module.css"
import { createPortal } from 'react-dom'
import AddModal from "../CodeList/AddModal"
import EditModal from "../CodeList/EditModal"


function ProfilePage() {
    
    const { user, loading: isLoadingAuth } = useAuth()
    const [showAddModal, setShowAddModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [clickedItemId, setClickedItemId] = useState()

    function handleEditCode(id) {
        setClickedItemId(id)
        setShowEditModal(true)
    }
    
    return (
        <section className={styles.section}>
            <PageHeader title={`Welcome ${user.name}`} message={"What code did you forget today?"}/>
            <CodeList onAddCode={() => setShowAddModal(true)} onEditCode={handleEditCode} setId={setClickedItemId} />
            {showAddModal && createPortal(
                <AddModal onClose={() => setShowAddModal(false)} />,
                document.body
            )}
            {showEditModal && createPortal(
                <EditModal id={clickedItemId} onClose={() => setShowEditModal(false)} />,
                document.body
            )}
        </section>
    )
}

export default ProfilePage