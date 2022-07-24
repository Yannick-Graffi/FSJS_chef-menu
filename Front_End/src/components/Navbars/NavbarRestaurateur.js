import React from 'react';
import './NavbarRestaurant.css'
import {Link} from 'react-router-dom'

function NavbarRestaurant() {
    return ( <nav className="navbarRestaurant" >
        <div className="Title">
            <h2>Chef Menu</h2>
        </div>
        
        <div className="pages">
        
            <Link to="/"style={{marginRight:"10px"}}>Homepage</Link> 
            <Link to="/Connexion" >Connexion restaurateur</Link>
            <Link to="/Register" style={{marginRight:"10px"}}>Création de compte</Link>
            <Link to="/Restaurant" style={{marginRight:"10px"}}>Restaurants</Link>
            
        </div>
      </nav>
);
}
export default NavbarRestaurant;