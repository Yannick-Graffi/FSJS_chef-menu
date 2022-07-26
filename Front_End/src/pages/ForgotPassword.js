import React, { useState } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'


function ForgotPassword() {

    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")

    const handleChange = (e) => {
        setMail(e.target.value)
    }

    const sendMail = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3002/forgotPassword', {
            mail
        })
        .then(res => {
            console.log("token, es-tu là ?",res.data);
            localStorage.setItem("resetPasswordToken", res.data.token)
            setMessage(res.data.message)
        })
        .catch(err =>{
            setMessage(err.response.data.message)
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
                    placeholder="saiissez votre adresse mail"/>
                <button>Envoyer</button>
            </form>
            <p style={{color : "#ff0000"}}>{message}</p>
        </div>
    );
}

export default ForgotPassword;