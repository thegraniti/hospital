import React from "react"
import { Link } from "react-router-dom";


export default function Menu(){

    const [togglePages, setTogglePages] = React.useState(false)

    function handlePages(){
        setTogglePages(prevState => !prevState)
    }


    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li className="pages" onClick={handlePages}><Link>Pages <i className="fa-solid fa-caret-down"></i></Link>{ togglePages && <ul>
                <li><Link to="/blogGrid">Blog Grid</Link></li>
                <li><Link to="/theTeam">The Team</Link></li>
                <li><Link to="/testimonial">Testimonial</Link></li>
                <li><Link to="/appointment">Appointment</Link></li>
                </ul>}
                </li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    )
}