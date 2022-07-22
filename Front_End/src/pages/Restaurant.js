import React, { useEffect, useState } from 'react';
import './Restaurant.css';
import axios from 'axios';
import HostPreview from '../components/HostPreview/HostPreview';
import NewRestaurantForm from '../components/NewRestaurantForm/NewRestaurantForm';
import UpdateForm from '../components/UpdateForm/UpdateForm'

function Publication() {
    const [restaurants,setRestaurants] = useState([]);
    const [restaurant, setRestaurant] = useState({});

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [style, setStyle] = useState (0);

    const [display, setDisplay] = useState(false);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        style:""
    })

    useEffect( () => {
        async function getRestaurant(){
            const result = await axios.get("http://localhost:3002/restaurants")
            setRestaurants(result.data)
        }
        getRestaurant()
    }, [])

    async function handleDelete(id){
        await axios.delete(`http://localhost:3002/restaurant/${id}`)

 
        const filteredRestaurants = restaurants.filter(lodge => lodge._id !== id)

        setRestaurants(filteredRestaurants)
    }

    function handleChangeT(e) {
        setTitle(e.target.value)
    }
    function handleChangeD(e) {
        setDescription(e.target.value)
    }
    function handleChangeP(e) {
        setStyle(e.target.value)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post(`http://localhost:3002/restaurants/`, {
            title,
            description,
            style
        })
    }

    function displayUpdate(id) {
        if (display) {
            setDisplay(false)
        } else {
            const result = restaurants.find(restaurant => restaurant._id === id)
            setRestaurant(result) 
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
        const result = await axios.put(`http://localhost:3002/restaurants/${formData._id}`, formData)
    }

    return (
        display      
       ?<div>
            <p>Entrez vos modifications :</p>
            <UpdateForm 
                restaurant={restaurant}
                formData={formData}
                onChange={handleUpdateChange}
                onSubmit={handleUpdateSubmit}   
            />   
       </div>
       :<div className="publish-container">
            <h2>Bienvenue sur votre page restaurant</h2>
            <p>Ici, vous pourrez ajouter, modifier ou supprimer vos restaurants</p>
            <NewRestaurantForm
                onChangeT={handleChangeT}
                onChangeD={handleChangeD}
                onChangeP={handleChangeP}
                onSubmit={handleSubmit}
            />
            
            {[restaurants.map(
                (restaurant) => (
                    <HostPreview 
                        key={restaurant._id}
                        restaurant={restaurant}
                        onDelete={handleDelete}
                        onUpdate={displayUpdate}
                    />                    
                )
            )]}
        </div>
    );
}

export default Publication;