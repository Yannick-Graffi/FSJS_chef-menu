import React, { useEffect, useState } from 'react';
import './RestaurantPreview.css'
import { useParams } from 'react-router-dom';

function RestaurantPreview({restaurant, onClick}) {
    const [display, setDisplay] = useState(false)
    const {id} = useParams()

    // Condtion pour l'affichage du bouton "Gérer" si l'URL contient un id ou non. 
    // S'il n'y a pas d'id, c'est qu'on est sur la page "restaurant", 
    // s'il y en a un, c'est qu'on est sur le dashboard
   
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
        // Component utilisé pour afficher tous les restaurants d'un utilisateur mais aussi 
        // pour afficher les infos d'un restaurant dans le Dashboard
        <div className='Restaurant'>
            <h2>{restaurant.name}</h2>
            <p>
                {`Adresse:\n ${restaurant.adress}\n ${restaurant.zipCode} ${restaurant.city}`}
            </p>
            <p>
                {`Horaires:\n ${restaurant.openingHours} - ${restaurant.closingHours}`}
            </p>
            {/* Bouton pour accéder au Dashboard. Ne s'affiche pas une fois dessus */}
            {
                !display &&  <button onClick={() => onClick(restaurant)}>Gérer</button>
            }
           
        </div>

  

     );
}

export default RestaurantPreview;