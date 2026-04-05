import { useAuth } from "../../../context/AuthContext"
import { useState } from "react"
import CodeList from "../CodeList/CodeList"
import PageHeader from "../../shared/PageHeader/PageHeader"
import styles from "./ProfilePage.module.css"
import { createPortal } from 'react-dom'
import CodeModal from "../CodeList/CodeModal"
import AddressField from "../../shared/Input/AddressField"


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
            <AddressField label="Address" id="address" required={true} disabled={false} />
            <CodeList onAddCode={() => setShowAddModal(true)} onEditCode={handleEditCode} />
            {showAddModal && createPortal(
                <CodeModal mode="add" onClose={() => setShowAddModal(false)} />,
                document.body
            )}
            {showEditModal && createPortal(
                <CodeModal mode="edit" codeId={clickedItemId} onClose={() => setShowEditModal(false)} />,
                document.body
            )}
        </section>
    )
}

export default ProfilePage