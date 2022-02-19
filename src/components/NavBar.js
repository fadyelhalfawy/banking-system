import React from "react";
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return(
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
            <Link className="navbar-brand container" to="/">Bank System...</Link>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/home">
                        Home
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/clients">
                        Clients
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/transactions">
                        Transactions
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/about-us">
                        About Us
                    </NavLink>
                </div>

            </div>
        </nav>
    );
}

export default NavBar;