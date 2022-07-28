import React, { useEffect, useState, useRef, forwardRef } from 'react';
import UpdateTableForm from '../UpdateTableForm'
import './TablePreview.css';
import QRCode from 'qrcode';
import axios from 'axios';
import ReactToPrint, {PrintContextConsumer} from 'react-to-print';

const ComponentToPrint = forwardRef((props, ref) => {
    return <div ref={ref}>hello world</div>;
  });

function TablePreview({restaurant, table, onDelete, getTable}) {
    const [isUpdate, setIsUpdate] = useState(false)
    const [source, setSource] = useState('')
    const [tableNum, setTableNum] = useState({number:""})
    const [message, setMessage] = useState("")
    const ref = useRef();
    

    let id = table._id

    let accesToken = localStorage.getItem('token');
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    };

    let url = `http://localhost:3000/${restaurant}/${table.number}`
    
    const handleUpdate = () => {
        if (isUpdate) {
            setIsUpdate(false)
        } else {
            setIsUpdate(true)
        }
    }

    const handleChange = (e) => {
        setTableNum({
            number:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("id de la table = ", id);
        await axios 
            .put(`http://localhost:3002/table/${id}`, tableNum, config)
            .then(res => {
                console.log(res.data.message);
                getTable();
                setIsUpdate(false)
                // setMessage(res.data.message);
            })
            .catch(err => {
                // setMessage(err.response.data.message);
            });               
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
                
                     
            
                     <div>
      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({ handlePrint }) => (
            <button onClick={handlePrint}>Imprimer le QR Code</button>
          )}
        </PrintContextConsumer>
      </ReactToPrint>
      <ComponentToPrint ref={ref} />
                    </div>
                     
              </div>
            
            : <UpdateTableForm
                tableID={table}
                bouton="Valider"
                onSubmit={handleSubmit}   
                onChange={handleChange} 
            />
            }

        </div>

     );
}

export default TablePreview