import React, { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from 'react-router-dom'


function ForgotPassword() {
    const [mail, setMail] = useState("")
    const [message, setMessage] = useState("")
    const [isRegistered, setIsRegistered] = useState(true)

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
            navigate("/")
        })
        .catch(err =>{
            // console.log(err.response.data.message);
            setMessage(err.response.data.message)
            if (err.response.data.message == "Aucun compte existant avec cette adresse mail") {
                setIsRegistered(false)
            } 
        })
        }
    
    
    return (  
        <div>
            <h1>Récupération du mot de passe</h1>
            <Link to={"/"}>Retour</Link>
            <form onSubmit={sendMail}>
                <input 
                    type="email" 
                    onChange={handleChange}
                    placeholder="saisissez votre adresse mail"/>
                <button>Envoyer</button>
            </form>
            <p style={{color : "#ff0000"}}>{message}</p> 
            {!isRegistered && <Link to="/Register" style={{marginRight:"10px"}}>Cliquez ici pour créer un compte</Link>}
        </div>
    );
}

export default ForgotPassword;