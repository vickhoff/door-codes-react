import {Outlet} from "react-router-dom"
import NavBar from "../NavBar/NavBar"

function LoggedInLayout() {

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default LoggedInLayout