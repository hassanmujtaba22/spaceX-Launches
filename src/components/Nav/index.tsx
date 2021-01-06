import React from 'react'
import {NavLink, Link} from "react-router-dom"
import logo from "../../images/logo.png"

function Nav() {
    return (
        <>
            <nav>
                <div className="brand">
                    <Link to="/"><img src={logo} alt="SPACE X" /></Link>
                </div>
                <div className="nav-right">
                    <div className="nav-links">
                        <NavLink to="/" exact activeClassName="active">Home</NavLink>
                        <NavLink to="/launches" exact activeClassName="active">Launches</NavLink>
                        <NavLink to="/rocket" exact activeClassName="active">Rockets</NavLink>
                        <NavLink to="/about" exact activeClassName="active">About</NavLink>
                    </div>
                    <div className="search">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav
