import React from 'react';
import './TablePreview.css';
import QRCode from '../QRCode';


function TablePreview({table, onDelete, onUpdate, onPrint}) {
    return ( 
        <div className='Table'>
            
            <h2>{table.number}</h2>
            <h5>{QRCode}</h5> 
            <button onClick={() => onDelete(table._id)}>Supprimer</button>
            <button onClick={() => onUpdate(table._id)}>Mettre à jour</button>
            <button onClick={() => onPrint(table._id)}>Imprimer le QR Code</button>
        </div>

   

     );
}

export default TablePreview;