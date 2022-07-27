import React from 'react';
import './FormulePreview.css';
// import QRCode from '../components/QRCode';


function FormulePreview({formule, onDelete, onUpdate}) {
    return ( 
        <div className='Formule'>
            
            <h2>{formule.name}</h2>
            {/* <h5>{QRCode}</h5> */}
            <button onClick={() => onDelete(formule._id)}>Supprimer</button>
            <button onClick={() => onUpdate(formule._id)}>Mettre à jour</button>
        </div>

  

     );
}

export default FormulePreview;