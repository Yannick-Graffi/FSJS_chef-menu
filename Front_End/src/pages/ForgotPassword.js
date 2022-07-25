import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'


function ForgotPassword() {
    let navigate = useNavigate();

    const [mail, setMail] = useState("")

    const handleChange = (e) => {
        setMail(e.target.value)
    }

    const sendMail = (e) => {
        e.preventDefault();
        navigate('../connexion')
    }
    
    return (  
        <div>
            <h1>Récupération du mot de passe</h1>
            <form onSubmit={sendMail}>
                <input 
                    type="email" 
                    onChange={handleChange}
                    placeholder="saiissez votre adresse mail"/>
                <button>Envoyer</button>
            </form>
        </div>
    );
}

export default ForgotPassword;