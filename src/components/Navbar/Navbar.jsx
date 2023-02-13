import React from "react";
import Menu from "./menu";
import { GiHamburgerMenu } from 'react-icons/gi'
import { RiCloseLine} from 'react-icons/ri'
import './Navbar.css'


export default function Navbar(){


    const [toggleMenu, setToogleMenu] = React.useState(false)

    function handleChange(){
        setToogleMenu(prevMenu => !prevMenu)
    }
    
    return (
        <div className="navbar-container">
            <div className="navbar-information">
                <div className="navbar-information1">
                    <p><i className="fa-solid fa-phone"></i> +012 345 6789</p>
                    <span>|</span>
                    <p><i className="fa-regular fa-envelope"></i> info@example.com</p>
                </div>
                <div className="navbar-information2">
                    <p><i className="fa-brands fa-facebook-f"></i></p>
                    <p><i className="fa-brands fa-twitter"></i></p>
                    <p><i className="fa-brands fa-linkedin-in"></i></p>
                    <p><i className="fa-brands fa-instagram"></i></p>
                    <p><i className="fa-brands fa-youtube"></i></p>
                </div>
            </div>
            <nav className="navbar-links">
                <div className="navbar-logo">
                    <h1><i className="fa-solid fa-house-chimney-medical"></i>Medinova</h1>
                </div>
                <div className="navbar-link">
                    <Menu/>
                </div>
            </nav>
            <nav className="navbar-links-mobile">
            <div className="navbar-logo">
                    <h1><i className="fa-solid fa-house-chimney-medical"></i>Medinova</h1>
                </div>
                <div className="mobile-menu"  onClick={handleChange}>
                {toggleMenu ? <RiCloseLine color="#13C5DD" size={27} /> : <GiHamburgerMenu color="#13C5DD" size={27} /> }
                </div>
                {toggleMenu && <div className="navbar-link">
                    <Menu/>
                </div>}
            </nav>
        </div>
    )
}