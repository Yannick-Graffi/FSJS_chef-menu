import React, { useState } from 'react';
import './ProduitsPreview.css';
import UpdateProduitsForm from '../UpdateProduitsForm/UpdateProduitsForm'
import axios from 'axios';

function ProduitsPreview({produit, onDelete, getProduct}) {
    let accesToken = localStorage.getItem('token');
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    };

    const [isUpdate, setIsUpdate] = useState(false)
    const [productUpdate, setProductUpdate] = useState({
        name:"",
        category:"",
        HT:"",
    })

    let id = produit._id

    const handleChange = (e) => {
        setProductUpdate(
            prevState => (
                {
                    ...prevState,
                    [e.target.name]:e.target.value
                }
            )
        )
    }

    const handleSubmit = (e) => {
        console.log(productUpdate);
        e.preventDefault()
            axios.put(`http://localhost:3002/product/${id}`, productUpdate, config)
            .then(res =>{
                console.log(res.data);
                setProductUpdate(res.data)
                getProduct()
                setIsUpdate(false)
            })
            .catch(err => {
                console.log(err);
            })

    }

    const handleUpdate = () => {
        if (isUpdate) {
            setIsUpdate(false)
        } else {
            setIsUpdate(true)
        }
    }

    return ( 
        <div className='produits'>
            {!isUpdate 
            ? <div>
                
                <h4>{produit.name}</h4>
                <h5>Tarifs</h5>
                <span>HT : {produit.HT} €</span>
                <span>TVA : {produit.TVA*100} %</span>
                <span>TTC : {produit.TTC} €</span>
                
                <button onClick={() => onDelete(produit._id)}>Supprimer</button>
                {/* <button onClick={handleUpdate}>Mettre à jour</button> */}
            
            </div>
            : <UpdateProduitsForm 
                bouton="Valider"
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            }
        </div>
     );
}

export default ProduitsPreview;