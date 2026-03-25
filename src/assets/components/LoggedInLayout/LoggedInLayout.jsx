import { Outlet } from "react-router-dom"
import NavBar from "../NavBar/NavBar"
import styles from "./LoggedInLayout.module.css"

function LoggedInLayout() {

    return (


        <div className={styles.container}>
            <div className={styles.layout}></div>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </div>

    )
}

export default LoggedInLayout