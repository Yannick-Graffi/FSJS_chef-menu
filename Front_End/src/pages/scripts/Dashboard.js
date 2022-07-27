import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import RestaurantPreview from "../../components/RestaurantPreview/RestaurantPreview";
import '../styles/Dashboard.css'
import NewRestaurantForm from "../../components/NewRestaurantForm/NewRestaurantForm";
import Table from "../scripts/Table"

function Dashboard() {
    const [restaurant, setRestaurant] = useState([])
    const [message, setMessage] = useState("")
    const [isUpdate, setIsUpdate] = useState(false)
    const [formData, setFormData] = useState({
        name:"",
        adress:"",
        zipCode:"",
        city:"",
        openingHours: "",
        closingHours: "",
    })

    const {id} = useParams()
    let navigate = useNavigate()

    let accesToken = localStorage.getItem('token')
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    }

    useEffect(() => {
        const getResto = () => {
            axios
                .get(`http://localhost:3002/restaurant/${id}`, config)
                .then(res => {
                    setRestaurant(res.data.data)
                })
                .catch(err => {
                    console.log(err);
                })
        }
        getResto()
    }, [])

    const handleUpdate = () => {
        if (isUpdate) {
            setIsUpdate(false)
        } else {
            setIsUpdate(true)
        }
    }

    const handleChange = (e) => {
        setFormData(
            prevState => (
                {
                    ...prevState,
                    [e.target.name]:e.target.value
                }
            )
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios 
            .put(`http://localhost:3002/restaurant/${id}`, formData, config)
            .then(res => {
                setMessage(res.data.message)
                setIsUpdate(false)
            })
    }

    const showMenu = () => {

    }

    const handleDelete = () => {
         axios
            .delete(`http://localhost:3002/restaurant/${id}`, config)
            .then( res => {
                console.log(res.data);
                navigate('../restaurants')
            })
            .catch(err =>{
                console.log(err.response);
            })
    }

    return (  
        <div>
            <Navbar 
                id2={id}
            />
            <div className="infoResto">

                {isUpdate 
                ? <NewRestaurantForm
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                  /> 
                : [restaurant.map((resto, index) => (
                    <RestaurantPreview 
                        key={index}
                        restaurant={resto}
                    />                    
                ))]
                }  
                {message}
                <div className="buttons">
                    {!isUpdate ? <button onClick={handleUpdate}>Mettre à jour</button> : <button onClick={handleUpdate}>Annuler</button>}
                    <button onClick={showMenu}>Voir la carte</button>
                    <button onClick={handleDelete}>Supprimer</button>
                </div>
            </div>
            <div className="tables">
                <Table 
                    resto={restaurant}
                />
            </div>
            <div className="orders">
                <h1>Commandes</h1>
            </div>
        </div>
    );
}

export default Dashboard;