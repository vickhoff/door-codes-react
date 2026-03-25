import { useAuth } from "../../../context/AuthContext"
import { useUser } from "../../../context/UserContext"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMe } from "../../../api/user"


function ProfilePage() {

    const navigate = useNavigate()
    const { user, logout, loading } = useAuth()
    const { codes, isLoading } = useUser()
    const [codeData, setCodeData] = useState([])

    if (loading) return "Loading..."

    return (
        <div>
        <h1>Welcome {user.name}!</h1>
        <button onClick={logout}>Logout</button>
        {
            codes.map(codeItem => (
                <p key={codeItem._id}>{codeItem.name}</p>
            ))
        }
        </div>
    )
}

export default ProfilePage