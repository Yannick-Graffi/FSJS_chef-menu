import axios from 'axios';
import { useState } from 'react';
import './NewTableForm/NewTableForm.css'

function NewTableForm({tableID, bouton}) {
    let accesToken = localStorage.getItem('token');
    let id = tableID._id
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    };

    const [table, setTable] = useState({number:""})

    //fonction generate qr code

    const handleChange = (e) => {
        setTable({
            number:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("id de la table = ", id);
        await axios 
            .put(`http://localhost:3002/table/${id}`, table, config)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });

    }

 
    return ( 


        <div className="newone">
            <form onSubmit={handleSubmit}>
            <label>Table :</label>
                <input type="text" onChange={handleChange} placeholder="Numéro de la table"/>
                               
                <button className='Add'>{bouton}</button>

            </form>
        </div>
     );
}

export default NewTableForm;