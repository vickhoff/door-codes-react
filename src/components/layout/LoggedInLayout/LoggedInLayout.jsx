import { Outlet } from "react-router-dom"
import styles from "./LoggedInLayout.module.css"
import { useAuth } from "../../../context/AuthContext"
import Menu from "../../shared/Menu/Menu"

function LoggedInLayout() {

    const { logout } = useAuth()

    const pages = [
        {title: "Codes", url: "/me"},
        {title: "User settings", url: "/settings"}
    ]

    return (

        <div className={styles.container}>
            <div className={styles.layout}></div>
            <header className={styles.loggedInMenu}>
                <Menu pages={pages} theme={"dark"}>
                    <button onClick={logout}>Log out</button>
                </Menu>
            </header>
            <main className={styles.loggedInMain}>
                <Outlet />
            </main>
        </div>

    )
}

export default LoggedInLayout