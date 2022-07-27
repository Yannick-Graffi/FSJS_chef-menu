import React from 'react';
import './RestaurantPreview.css'

function RestaurantPreview({restaurant, onClick}) {
    return ( 
        <div className='Restaurant'>
            <h2>{restaurant.name}</h2>
            <p>
                {`Adresse:\n ${restaurant.adress}\n ${restaurant.zipCode} ${restaurant.city}`}
            </p>
            <p>
                {`Horaires:\n ${restaurant.openingHours} - ${restaurant.closingHours}`}
            </p>
            <button onClick={() => onClick(restaurant)}>Gérer</button>
        </div>

  

     );
}

export default RestaurantPreview;