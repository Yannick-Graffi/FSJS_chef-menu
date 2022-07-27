import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import RestaurantPreview from "../../components/RestaurantPreview/RestaurantPreview";
import '../styles/Dashboard.css'

function Dashboard() {
    const [restaurant, setRestaurant] = useState([])

    const {id} = useParams()

    let accesToken = localStorage.getItem('token')
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    }

    useEffect(() => {
        const getResto = async() => {
            await axios
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
    return (  
        <div>
            <Navbar />
            <div className="infoResto">
                {[restaurant.map((resto, index) => (
                        <RestaurantPreview 
                            key={index}
                            restaurant={resto}
                        />                    
                    )
                )]}   
                <div className="buttons">
                    <button>Mettre à jour</button>
                    <button>Voir les tables</button>
                    <button>Supprimer</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;