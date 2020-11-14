import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {

    const location = useLocation();

    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <h3>Google Books</h3>
                </li>
                <li className="nav-item hoverable">
                    <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Search    
                    </Link>
                </li>
                <li className="nav-item hoverable">
                <Link to="/saved" className={location.pathname === "/Saved" ? "nav-link active" : "nav-link"}>
                Saved
                </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;