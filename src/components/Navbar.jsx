import React from 'react'
import "../assets/css/Nav.css"

function Navbar() {
    return (
        <>
            <div className="navbar flex">
                <div className="nav-left flex">
                    <h1>Wallpix</h1>
                </div>
                <div className="nav-right flex">
                    <a href="https://www.instagram.com/wallpix.100" target='_blank'>
                        <img src="./images/2447888.webp" alt="ig" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navbar;