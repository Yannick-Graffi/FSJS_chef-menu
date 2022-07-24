import React from 'react';
import './HostPreview.css'

function HostPreview({restaurant, onDelete, onUpdate}) {
    return ( 
        <div className='Restaurant'>
            {/* <img src="" alt=''/> */}
            <h2>{restaurant.title}</h2>
            <p>{restaurant.description}</p>
            <p>Style {restaurant.style}</p>
            <button onClick={() => onDelete(restaurant._id)}>Supprimer</button>
            <button onClick={() => onUpdate(restaurant._id)}>Mettre à jour</button>
        </div>

  

     );
}

export default HostPreview;