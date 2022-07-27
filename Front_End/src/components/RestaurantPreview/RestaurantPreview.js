import React, { useEffect, useState } from 'react';
import './RestaurantPreview.css'
import { useParams } from 'react-router-dom';

function RestaurantPreview({restaurant, onClick}) {
    const [display, setDisplay] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        if (id === undefined) {
            console.log("false");
            setDisplay(false)
        } else {
            console.log("true");
            setDisplay(true)
        }
    },[])

    return ( 
        <div className='Restaurant'>
            <h2>{restaurant.name}</h2>
            <p>
                {`Adresse:\n ${restaurant.adress}\n ${restaurant.zipCode} ${restaurant.city}`}
            </p>
            <p>
                {`Horaires:\n ${restaurant.openingHours} - ${restaurant.closingHours}`}
            </p>
            {
                !display &&  <button onClick={() => onClick(restaurant)}>Gérer</button>
            }
           
        </div>

  

     );
}

export default RestaurantPreview;