import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "../../../context/AuthContext"


function PrivateRoutes() {
    const { user, loading } = useAuth()
    if (loading) return null
    return user ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoutes