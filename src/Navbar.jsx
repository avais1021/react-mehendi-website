import React from 'react'

const Navbar = () => {
    return (
        <header>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <div className="navbar_logo">
                            <h2>Apple Artist</h2>
                            <img src="mehndiLogo2.jpg" alt="mehndi-logo" />
                        </div>
                        <div className="navbar_menu">
                            <ul>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Why Us</li>
                                <li>Gallery</li>
                                <li>Videos</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
