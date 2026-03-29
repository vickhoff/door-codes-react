import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from "../../../context/AuthContext"


function PrivateRoutes() {
    const { user, isLoadingAuth } = useAuth()
    if (isLoadingAuth) return null
    return user ? <Outlet/> : <Navigate to='/login'/>
}

export default PrivateRoutes