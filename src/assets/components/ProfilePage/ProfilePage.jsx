import { useAuth } from "../../../context/AuthContext"
import { useNavigate } from "react-router-dom"


export function ProfilePage() {

    const navigate = useNavigate()
    const { user } = useAuth()
    const  { logout } = useAuth()

    if (user === null) navigate("/login")


    return <h1>Welcome {user.username}!</h1>
}