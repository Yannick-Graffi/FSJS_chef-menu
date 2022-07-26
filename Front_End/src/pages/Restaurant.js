import React, { useEffect, useState } from 'react';
import './Restaurant.css';
import axios from 'axios';
import NewRestaurantForm from '../components/NewRestaurantForm/NewRestaurantForm';
import RestaurantPreview from '../components/RestaurantPreview/RestaurantPreview';
// import UpdateForm from '../components/UpdateForm/UpdateForm'

function Publication() {
    const [restaurants,setRestaurants] = useState([]);
    // const [restaurant, setRestaurant] = useState({});
    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        name:"",
        adress:"",
        zipCode:"",
        city:"",
        openingHours: "",
        closingHours: "",
    })

    // const [display, setDisplay] = useState(false);

    let accesToken = localStorage.getItem('token')
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    }

    useEffect( () => {
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
        getRestaurant()
    }, [])

    // async function handleDelete(id){
    //     await axios.delete(`http://localhost:3002/restaurant/${id}`, config)

 
    //     const filteredRestaurants = restaurants.filter(lodge => lodge._id !== id)

    //     setRestaurants(filteredRestaurants)
    // }

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
        console.log("Wahouuu, voici l'resto : ",resto);
    }    

    async function handleSubmit(e) {
        e.preventDefault()
        await axios
            .post(`http://localhost:3002/restaurant/`, formData, config)
            .then( res =>{
                console.log(res);
            })
            .catch(err => {
              setMessage(err)  
            })
    }

    // function displayUpdate(id) {
    //     if (display) {
    //         setDisplay(false)
    //     } else {
    //         const result = restaurants.find(restaurant => restaurant._id === id)
    //         setRestaurant(result) 
    //         setFormData(result)

    //         setDisplay(true)
    //     }
    // }

    // function handleUpdateChange(e) {
    //     setFormData(
    //         prevState => (
    //             {
    //                 ...prevState,
    //                 [e.target.name]:e.target.value
    //             }
    //         )
    //     )    
    // }

    // async function handleUpdateSubmit(e) {
    //     e.preventDefault()
    //     setDisplay(false)
    //     const result = await axios.put(`http://localhost:3002/restaurants/${formData._id}`, formData)
    // }

    return (
  
    //    <div>
    //         <p>Entrez vos modifications :</p>
    //         <UpdateForm 
    //             restaurant={restaurant}
    //             formData={formData}
    //             onChange={handleUpdateChange}
    //             onSubmit={handleUpdateSubmit}   
    //         />   
    //    </div>

       <div className="publish-container">
            <h2>Bienvenue sur votre page restaurant</h2>
            <p>Ici, vous pourrez ajouter, modifier ou supprimer vos restaurants</p>
            <NewRestaurantForm
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            <p>{message}</p>  

            {[restaurants.map((restaurant, index) => (
                    <RestaurantPreview 
                        key={restaurant._id}
                        restaurant={restaurant}
                        onClick={handleClick}
                        // onDelete={handleDelete}
                        // onUpdate={displayUpdate}
                    />                    
                )
            )]}
        </div>
    );
}

export default Publication;