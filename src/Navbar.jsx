import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <div className="navbar_logo">
                            <h2>Alfiya Artist</h2>
                            <img src="mehndiLogo2.jpg" alt="mehndi-logo" />
                        </div>
                        <div className="navbar_menu">
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Why Us</li>
                               <NavLink to="/gallery"><li>Gallery</li></NavLink>
                               <NavLink to="/videos"><li>Videos</li></NavLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
