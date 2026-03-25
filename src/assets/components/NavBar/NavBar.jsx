import { NavLink, Link } from "react-router-dom"

function NavBar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="">Codes</NavLink></li>
                    <li><NavLink to="">User settings</NavLink></li>
                    <li><NavLink to="">Log out</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar