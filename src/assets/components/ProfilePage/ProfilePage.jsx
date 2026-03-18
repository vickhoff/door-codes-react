import { useAuth } from "../../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { getMe } from "../../../api/user"


export function ProfilePage() {

    const navigate = useNavigate()
    const { user, logout, loading } = useAuth()

    useEffect(() => {
        if (!loading && !user) navigate("/login")
    }, [loading, user])

    if (loading) return "Loading..."
    if (!user) return null

    getMe()

    return (
        <>
        <h1>Welcome {user.username}!</h1>
        <button onClick={logout}>Logout</button>
        </>
    )
}