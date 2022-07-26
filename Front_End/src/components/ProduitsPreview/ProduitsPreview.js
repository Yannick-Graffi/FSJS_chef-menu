import React from 'react';
import './ProduitsPreview.css';



function ProduitsPreview({produit, onDelete, onUpdate}) {
    return ( 
        <div className='Produits'>
            
            <h2>{produit._id}</h2>
            
            <button onClick={() => onDelete(produit._id)}>Supprimer</button>
            <button onClick={() => onUpdate(produit._id)}>Mettre à jour</button>
        </div>

  

     );
}

export default ProduitsPreview;