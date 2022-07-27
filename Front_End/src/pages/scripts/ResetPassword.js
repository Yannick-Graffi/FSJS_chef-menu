import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
    const {id:accesToken} = useParams();
    const navigate = useNavigate();

    const [message, setMessage] = useState("")
    const [formData, setFormData] = useState({
        mail:"",
        newPassword:"",
        confirmPassword:"",
    });

    const handleChange = (e) => {
        setFormData(
            prevState => (
                {
                    ...prevState,
                    [e.target.name]:e.target.value
                }
            )
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let config = {
            headers: {'Authorization' : `Bearer ${accesToken}`}
        }
        if (formData.newPassword === formData.confirmPassword) {
            await axios
                .post('http://localhost:3002/reset', formData, config)
                .then(res => {
                    console.log(res);
                    navigate('/')
                })
                .catch(err => {
                    setMessage(err.response.data.message)
                })
        } else {
            setMessage("Les mots de passe ne corresponspondent pas")
        }
    };

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                type="mail" 
                name="mail"
                placeholder="Email"
                onChange={handleChange}
            />
            <input 
                type="password"
                name="newPassword"
                placeholder="Mot de passe"
                onChange={handleChange}
            />
            <input 
                type="password"
                name="confirmPassword"
                placeholder="Confirmer le mot de passe"
                onChange={handleChange}
            />
            <button>Envoyer</button>
        </form>
        <div>
            {message}
        </div>
    </div>
    
    );
};

export default ResetPassword;