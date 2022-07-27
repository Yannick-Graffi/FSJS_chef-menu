import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'


function ForgotPassword() {
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")

    const navigate = useNavigate()

    const handleChange = (e) => {
        setMail(e.target.value)
    }

    const sendMail = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/forgotPassword', {
            mail
        })
        .then(res => {
            setMessage(res.data.message)
            navigate("../connexion")
        })
        .catch(err =>{
            setMessage(err.response.data)
        })
        }
    
    
    return (  
        <div>
            <h1>Récupération du mot de passe</h1>
            <Link to={"../connexion"}>Retour</Link>
            <form onSubmit={sendMail}>
                <input 
                    type="email" 
                    onChange={handleChange}
                    placeholder="saisissez votre adresse mail"/>
                <button>Envoyer</button>
            </form>
            <p style={{color : "#ff0000"}}>{message}</p>
        </div>
    );
}

export default ForgotPassword;