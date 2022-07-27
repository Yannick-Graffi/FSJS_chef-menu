import React, { useEffect, useState } from 'react';
import './Produits.css';
import axios from 'axios';
import ProduitsForm from '../../components/ProduitsForm/NewProduitsForm';
import FormuleForm from '../../components/FormuleForm/FormuleForm';
import ProduitsPreview from '../../components/ProduitsPreview/ProduitsPreview';

function GestionProduits() {
    const [produits,setProduits] = useState([]);
    const [produit, setProduit] = useState({});

    const [nom, setNom] = useState("");
    const [catégorie, setCatégorie] = useState("");
    const [prixHT, setPrixHT] = useState ("");
    const [tva, setTva] = useState ("");

    const [display, setDisplay] = useState(false);
    const [formData, setFormData] = useState({
        nom: "",
        catégorie: "",
        prixHT:"",
        tva: "",
    })

    useEffect( () => {
        async function getProduit(){
            const result = await axios.get("http://localhost:3002/produits")
            setProduits(result.data)
        }
        getProduit()
    }, [])

    async function handleDelete(id){
        await axios.delete(`http://localhost:3002/produit/${id}`)

 
        const filteredProduits = produits.filter(produit => produit._id !== id)

        setProduits(filteredProduits)
    }

    function handleChangeT(e) {
        setNom(e.target.value)
    }
    function handleChangeD(e) {
        setCatégorie(e.target.value)
    }
    function handleChangeP(e) {
        setPrixHT(e.target.value)
    }
    function handleChangeP(e) {
        setTva(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post(`http://localhost:3002/produits/`, {
            nom,
            catégorie,
            prixHT,
            tva
        })
    }

    function displayUpdate(id) {
        if (display) {
            setDisplay(false)
        } else {
            const result = produits.find(produit => produit._id === id)
            setProduit(result) 
            setFormData(result)

            setDisplay(true)
        }
    }
    function handleUpdateChange(e) {
        setFormData(
            prevState => (
                {
                    ...prevState,
                    [e.target.name]:e.target.value
                }
            )
        )    
    }
    async function handleUpdateSubmit(e) {
        e.preventDefault()
        setDisplay(false)
        const result = await axios.put(`http://localhost:3002/produits/${formData._id}`, formData)
    }

    return (
         display      
        ?<div>
           <p>Entrez vos modifications :</p>
          <UpdateForm 
                produit={produit}
                formData={formData}
                 onChange={handleUpdateChange}
                 onSubmit={handleUpdateSubmit}   
           />   
        </div> 
       :<div className="publish-container">
            <h2>Bienvenue sur votre page de gestion de la carte</h2>
            <p>Ici, vous pourrez ajouter, modifier ou supprimer vos produits</p>
            <ProduitsForm
                onChangeT={handleChangeT}
                onChangeD={handleChangeD}
                onChangeP={handleChangeP}
                onSubmit={handleSubmit}
            />
            
            {[produits.map(
                (produit) => (
                    <ProduitsPreview 
                        key={produit._id}
                        produit={produit}
                        onDelete={handleDelete}
                        onUpdate={displayUpdate}
                    />                    
                )
            )]}
        </div>
    );
}

export default GestionProduits;