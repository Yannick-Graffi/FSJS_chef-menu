import React from 'react';
import './ProduitsPreview.css';

function ProduitsPreview({produit, onDelete, onUpdate}) {
    return ( 
        <div className='produits'>
            
            <h4>{produit.name}</h4>
            <h5>Tarifs</h5>
            <span>HT : {produit.HT} €</span>
            <span>TVA : {produit.TVA*100} %</span>
            <span>TTC : {produit.TTC} €</span>
            
            <button onClick={onDelete}>Supprimer</button>
            <button onClick={onUpdate}>Mettre à jour</button>
        </div>

     );
}

export default ProduitsPreview;