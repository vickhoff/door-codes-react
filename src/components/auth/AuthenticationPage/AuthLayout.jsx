import { Outlet, Link } from 'react-router-dom';
import styles from "./Authentication.module.css"

export function AuthLayout() {
    return(
        <main className={styles.authMain}>
            <Link to="/">Back</Link>
            <Outlet />
        </main>
    )
}