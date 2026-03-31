import LogoBlack from "../../../assets/images/logo-black.svg"
import LogoWhite from "../../../assets/images/logo-white.svg"
import styles from "./Menu.module.css"
import NavBar from "../NavBar/NavBar"
import { Children, cloneElement } from "react"

function Menu({theme, pages, children}) {

    const styledChildren = Children.map(children, child =>{
        return cloneElement(child, { className: theme === "light" ? styles.light : styles.dark})
    })

    return (
        <header className={styles.menu}>                
            <img className={styles.logo} src={theme === "light" ? LogoBlack : LogoWhite} alt="GetIn logotype" />
            <NavBar theme={theme} pages={pages} />
            <div className={styles.linkGroup}>
                {styledChildren}
            </div>
        </header>
    )
}

export default Menu