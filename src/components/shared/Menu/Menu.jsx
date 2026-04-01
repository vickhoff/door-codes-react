import LogoBlack from "../../../assets/images/logo-black.svg"
import LogoWhite from "../../../assets/images/logo-white.svg"
import hamburgerIconBlack from "../../../assets/images/hamburger-black.svg"
import hamburgerIconWhite from "../../../assets/images/hamburger-white.svg"
import closeIconBlack from "../../../assets/images/close-icon-black.svg"
import closeIconWhite from "../../../assets/images/close-icon-white.svg"
import styles from "./Menu.module.css"
import NavBar from "../NavBar/NavBar"
import { Children, cloneElement, useState } from "react"


function Menu({ theme, pages, children }) {
    const [navIsVisible, setNavIsVisible] = useState(false)
    const styledChildren = Children.map(children, child => {
        return cloneElement(child, { className: theme === "light" ? styles.light : styles.dark })
    })

    return (
        <>
            <div className={`${styles.mobileNav} ${theme === "light" ? styles.light : styles.dark} ${navIsVisible && styles.visible}`}>
                <button onClick={() => setNavIsVisible(!navIsVisible)}><img src={theme === "light" ? closeIconBlack : closeIconWhite} alt="Close icon" /></button>
                <NavBar theme={theme} pages={pages} />
            </div>

            <header className={`${styles.menu} ${theme === "light" ? styles.light : styles.dark}`}>
                <img className={styles.logo} src={theme === "light" ? LogoBlack : LogoWhite} alt="GetIn logotype" />
                <div className={styles.navContainer}>
                    <NavBar theme={theme} pages={pages} />
                </div>
                <div className={styles.hamburgerLogout}>
                    <div className={styles.linkGroup}>
                        {styledChildren}
                    </div>
                    <button className={styles.hamburger} onClick={() => setNavIsVisible(!navIsVisible)}><img src={theme === "light" ? hamburgerIconBlack : hamburgerIconWhite} alt="Hamburger icon" /></button>
                </div>
            </header>
        </>
    )
}

export default Menu