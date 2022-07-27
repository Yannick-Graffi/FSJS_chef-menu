import React, { useState } from 'react';
import UpdateTableForm from '../UpdateTableForm'
import './TablePreview.css';
// import QRCode from '../components/QRCode';

function TablePreview({table, onDelete, onUpdate}) {
    const [isUpdate, setIsUpdate] = useState(false)

    const handleUpdate = () => {
        if (isUpdate) {
            setIsUpdate(false)
        } else {
            setIsUpdate(true)
        }
    }
    
    return ( 
        <div className='Table'>
            
            {!isUpdate 
            ? <div>
                <h2>Table {table.number}</h2>
                {/* <h5>{QRCode}</h5> */}
                <button onClick={() => onDelete(table._id)}>Supprimer</button>
                <button onClick={handleUpdate}>Modifier</button>
              </div>
            
            : <UpdateTableForm
                tableID={table}
                bouton="Valider"
                onSubmit={() => onUpdate(table._id)}    
            />
            }

        </div>

     );
}

export default TablePreview;