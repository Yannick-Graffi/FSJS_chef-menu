import React from 'react';
import './Navbar.css'
import {Link, useNavigate} from 'react-router-dom'

function Navbar({id2}) {
    let navigate = useNavigate()
    const toDeconnect = () => {
        navigate("/")
        localStorage.setItem("token", "")
    }

    return ( 
    <nav className="navbar" >

        <div className="Title">
            <h2>Chef Menu</h2>
        </div>
        <div className="pages">

            <Link to="/restaurants" style={{marginRight:"10px"}}>Restaurants</Link> 
            <Link to={`/dashboard/${id2}`} >Dashboard</Link>
            <Link to="/carte" style={{marginRight:"10px"}}>Carte</Link>
            <a href="#" onClick={toDeconnect}>Se déconnecter</a>
        </div>
    </nav>
);
}
export default Navbar;