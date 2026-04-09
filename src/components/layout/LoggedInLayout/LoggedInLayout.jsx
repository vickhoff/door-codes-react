import { Outlet, useNavigate } from "react-router-dom"
import styles from "./LoggedInLayout.module.css"
import { useAuth } from "../../../context/AuthContext"
import Menu from "../../shared/Menu/Menu"
import { useState } from "react"
import Spinner from "../../shared/Spinner/Spinner"

function LoggedInLayout() {

    const { logout } = useAuth()
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)

    async function handleLogout() {
        try {                      
            setIsLoading(true)
            await logout()    
            navigate("/login")                                                             
        } finally {           
            setIsLoading(false)                                                            
        }  
    }

    const pages = [
        {title: "Codes", url: "/me"},
        {title: "User settings", url: "/settings"}
    ]

    return (

        <div className={styles.container}>
            <div className={styles.layout}></div>
            <header className={styles.loggedInMenu}>
                <Menu pages={pages} theme={"dark"}>
                    <button onClick={handleLogout}>Log out {isLoading && <Spinner />}</button>
                </Menu>
            </header>
            <main className={styles.loggedInMain}>
                <Outlet />
            </main>
        </div>

    )
}

export default LoggedInLayout