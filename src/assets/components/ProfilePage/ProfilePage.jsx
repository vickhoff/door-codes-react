import { useAuth } from "../../../context/AuthContext"
import { useUser } from "../../../context/UserContext"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import CodeList from "../CodeList/CodeList"


function ProfilePage() {

    const navigate = useNavigate()
    const { user, logout, loading } = useAuth()
    const { codes, isLoading } = useUser()


    if (loading) return "Loading..."

    return (
        <>
        <h1>Welcome {user.name}!</h1>
        <p>What code did you forget today?</p>

        <CodeList />

        </>
    )
}

export default ProfilePage