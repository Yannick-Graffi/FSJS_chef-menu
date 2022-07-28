// import React, { useEffect, useState } from 'react';
import './Homepage.css'
import './Restaurant.js'
// import axios from 'axios';
import ForgotPassword from './ForgotPassword';


function Homepage() {
    
    // const [restaurant,setRestaurant] = useState ([])

    // useEffect(()=> {
    //     async function getRestaurant(){
    //         const result = await axios.get("http://localhost:3000/Restaurant")
    //         // setRestaurant(result.data)
    //     }
    //     getRestaurant()
    //     },[])
    
    return ( 
        <div>
            <h2>Chef Menu</h2>
            <ForgotPassword/>
        </div>
    );
}

export default Homepage ;