import React from 'react';
import './TablePreview.css'

function TablePreview({table, onDelete, onUpdate}) {
    return ( 
        <div className='Table'>
            
            <h2>{table.number}</h2>
            <h5>{QRCode}</h5>
            <button onClick={() => onDelete(table._id)}>Supprimer</button>
            <button onClick={() => onUpdate(table._id)}>Mettre à jour</button>
        </div>

  

     );
}

export default TablePreview;