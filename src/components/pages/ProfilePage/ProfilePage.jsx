import { useAuth } from "../../../context/AuthContext"
import { useUser } from "../../../context/UserContext"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import CodeList from "../CodeList/CodeList"
import PageHeader from "../../shared/PageHeader/PageHeader"
import styles from "./ProfilePage.module.css"
import { createPortal } from 'react-dom';
import Modal from '../../shared/Modal/Modal';
import Form from "../../shared/Form/Form"
import { TextField } from "../../shared/Input/TextField"


function ProfilePage() {

    const navigate = useNavigate()
    const { user, logout, loading } = useAuth()
    const { codes, isLoading } = useUser()
    const[showModal, setShowModal] = useState(false)

    if (loading) return "Loading..."

    return (
        <section className={styles.section}>
            <PageHeader title={`Welcome ${user.name}`} message={"What code did you forget today?"}/>
            <CodeList />
        </section>
    )
}

export default ProfilePage