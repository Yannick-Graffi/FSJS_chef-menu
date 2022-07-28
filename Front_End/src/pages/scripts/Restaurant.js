import React, { useEffect, useState } from 'react';
import '../styles/Restaurant.css';
import axios from 'axios';
import NewRestaurantForm from '../../components/NewRestaurantForm/NewRestaurantForm';
import RestaurantPreview from '../../components/RestaurantPreview/RestaurantPreview';
import { useNavigate } from 'react-router-dom';
// import UpdateForm from '../components/UpdateForm/UpdateForm'

function Restaurant() {
    const [restaurants,setRestaurants] = useState([]);
    const [message, setMessage] = useState("")
    const [display, setDisplay] = useState(false)
    const [formData, setFormData] = useState({
        name:"",
        adress:"",
        zipCode:"",
        city:"",
        openingHours: "",
        closingHours: "",
    })

    let navigate = useNavigate()
    let accesToken = localStorage.getItem('token')
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    }

    async function getRestaurant(){
        await axios
            .get("http://localhost:3002/restaurant", config)
            .then(res => {
                console.log("log après GET",res.data, "type des res.data = ", typeof res.data);
                setRestaurants(res.data)
            })
            .catch(err => {
                console.log(err.response);
            })

    }

    useEffect( () => {
        getRestaurant()
    }, [])

    function handleChange(e) {
        setFormData(
            prevState => (
                {
                    ...prevState,
                    [e.target.name]:e.target.value
                }
            )
        )
    }

    const handleClick = (resto) => {
        navigate(`/dashboard/${resto._id}`)
    }    

    async function handleSubmit(e) {
        e.preventDefault()
        await axios
            .post(`http://localhost:3002/restaurant/`, formData, config)
            .then( res =>{
                console.log(res);
                setMessage("")
                getRestaurant();
                setDisplay(false);
            })
            .catch(err => {
              setMessage(err)  
            })
    }

    const addResto = () =>{
        if (display) {
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }

    const toDeconnect = () => {
        navigate("/")
        localStorage.setItem("token", "")
    }
    
    return (
  
        <div>
            <nav className="navbar" >
                <div className="Title">
                    <h2>Chef Menu</h2>
                </div>
                 <a href="#" onClick={toDeconnect}>Se déconnecter</a>
            </nav>
            
            <div className="publish-container">
                <h2>Bienvenue sur votre page restaurant</h2>
                {!display ? <button onClick={addResto}>Ajouter un restaurant</button> : <button onClick={addResto}>Annuler</button>}
                {/* <p>Ici, vous pourrez ajouter, modifier ou supprimer vos restaurants</p> */}
                {display 
                &&  <NewRestaurantForm
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                        bouton="Ajouter un restaurant"
                    />
                }
                    
                <p>{message}</p>

                {[restaurants.map((restaurant, index) => (
                        <RestaurantPreview 
                            key={index}
                            restaurant={restaurant}
                            onClick={handleClick}
                        />                    
                    )
                )]}
            </div>
        </div>
    );
}

export default Restaurant;