import { NavLink, Link } from "react-router-dom"
import styles from "./NavBar.module.css"

function NavBar() {
    return (
        <header>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink to="/me">Codes</NavLink></li>
                    <li><NavLink to="/settings">User settings</NavLink></li>
                    <li><NavLink to="">Log out</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar