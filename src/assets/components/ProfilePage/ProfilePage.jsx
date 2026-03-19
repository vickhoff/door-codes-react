import { useAuth } from "../../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { getMe } from "../../../api/user"


export function ProfilePage() {

    const navigate = useNavigate()
    const { user, logout, loading } = useAuth()
    const [codeData, setCodeData] = useState([])

    useEffect(() => {
        if (!loading && !user) navigate("/login")
    }, [loading, user])

    useEffect(() => {           
        async function fetchData() {                           
            const data = await getMe()                         
            setCodeData(data)                            
        }                                                      
        fetchData()                                            
    }, [])   

    if (loading) return "Loading..."
    if (!user) return null

    return (
        <div>
        <h1>Welcome {user.username}!</h1>
        <button onClick={logout}>Logout</button>
        {
            codeData.map(codeItem => (
                <p>{codeItem.name}</p>
            ))
        }
        </div>
    )
}