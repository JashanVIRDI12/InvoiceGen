import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import '../styles.css';

const NavLinks = ({ user, handleLogout }) => {
    return (
        <>

            <NavLink to="/" className="nav-link mx-2">
                Home
            </NavLink>
            <NavLink to="/invoice" className="nav-link mx-2">
                Invoice Gen
            </NavLink>
            {user ? (
                <>
                    <NavLink to="/profile" className="nav-link mx-2">
                        Profile
                    </NavLink>
                    <button onClick={handleLogout} className="nav-link mx-2 btn btn-primary">
                        Logout
                    </button>
                </>
            ) : (
                <>
                    <NavLink to="/login" className="nav-link mx-2">
                        Login
                    </NavLink>
                    <NavLink to="/register" className="nav-link mx-2">
                        Register
                    </NavLink>
                </>
            )}
        </>
    );
};

const Nav = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await auth.signOut();
            navigate("/login");
            console.log("User logged out successfully!");
        } catch (error) {
            console.error("Error logging out:", error.message);
        }
    };

    return (
        <nav className="w-full">
            <div className="flex justify-end items-center">
                <NavLinks user={user} handleLogout={handleLogout} />
            </div>
        </nav>
    );
};

export default Nav;










