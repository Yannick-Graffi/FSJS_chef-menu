import React, { useEffect, useState } from 'react';
import UpdateTableForm from '../UpdateTableForm'
import './TablePreview.css';
import QRCode from 'qrcode';

function TablePreview({restaurant, table, onDelete, onUpdate}) {
    const [isUpdate, setIsUpdate] = useState(false)
    const [source, setSource] = useState('')
    
    console.log("resto dans tablepreview",restaurant);

    let url = `http://localhost:3000/${restaurant}/${table.number}`
    
    const handleUpdate = () => {
        if (isUpdate) {
            setIsUpdate(false)
        } else {
            setIsUpdate(true)
        }
    }

    useEffect(()=>{
        QRCode.toDataURL(url).then((data) => {
            setSource(data)
        })
    }, [])
    
    return ( 
        <div className='Table'>
            
            {!isUpdate 
            ? <div>
                <h2>Table {table.number}</h2>
                <img src={source} />
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