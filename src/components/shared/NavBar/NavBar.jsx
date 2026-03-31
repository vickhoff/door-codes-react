import { NavLink, Link } from "react-router-dom"
import styles from "./NavBar.module.css"

function NavBar({pages, theme}) {

    return (
            <nav className={styles.nav}>
                <ul>
                    {pages.map(page =>
                        <li key={page.url}>
                            {page.url.startsWith("#") || page.url === ""
                                ? <a className={theme === "light" ? styles.light : styles.dark} href={page.url}>{page.title}</a>
                                : <NavLink className={theme === "light" ? styles.light : styles.dark} to={page.url}>{page.title}</NavLink>
                            }
                        </li>
                    )}
                </ul>
            </nav>
    )
}

export default NavBar