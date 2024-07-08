import { NavLink } from "react-router-dom";
import '../styles.css'

const NavLinks = () => {
    return (
        <>
            <NavLink
                to="/invoice"
                className="nav-link ml-5 mr-40"
            >
                Invoice Gen
            </NavLink>
            <NavLink
                to="/"
                className="nav-link mx-2"
            >
                Home
            </NavLink>
        </>
    );
}

const Nav = () => {
    return (
        <nav className="w-1/3">
            <div className="flex flex-row-reverse">
                <NavLinks />
            </div>
        </nav>
    );
}

export default Nav;








