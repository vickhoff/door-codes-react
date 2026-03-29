import { Outlet } from "react-router-dom"
import NavBar from "../../shared/NavBar/NavBar"
import styles from "./LoggedInLayout.module.css"

function LoggedInLayout() {

    const pages = [
        {title: "Codes", url: "/me"},
        {title: "User settings", url: "/settings"},
        {title: "Log out", url: ""}
    ]

    return (

        <div className={styles.container}>
            <div className={styles.layout}></div>
            <header>
                <NavBar pages={pages} theme={"dark"}/>
            </header>
            <main className={styles.loggedInMain}>
                <Outlet />
            </main>
        </div>

    )
}

export default LoggedInLayout