import React, {useState } from 'react';
import axios from 'axios';
import './Register.css';
import {useNavigate } from 'react-router-dom';

function Register() {
  let navigate = useNavigate();

  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    firstname:"",
    lastname:"",
    mail:"",
    password:"",
    passwordConfirm:"",
  })
  
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

  const onClickRegister = async (e) => {
    e.preventDefault()

    if (formData.password === formData.passwordConfirm) {
      await axios
      .post('http://localhost:3002/users', formData)
      .then(res => {
        setMessage(res.data.message);
        navigate("../connexion")
      })
      .catch(err =>{
        setMessage(err.response.data.message);
      })      
    } else {
      setMessage("Les mots de passe ne corresponspondent pas")
    }
  }

  return (
    <form onSubmit={onClickRegister}>
      <div className='creation-compte-container'>
        <h2>Créez votre compte Restaurateur</h2>
        <div className='input-container prenom-container'>
          <label htmlFor="prenom">Prénom : </label>
          <input 
            onChange={handleChange} 
            name="firstname" 
            type="text" 
            placeholder="Prenom" />
        </div>
        <div className='input-container nom-container'>
          <label htmlFor='nom'>Nom : </label>
          <input 
            onChange={handleChange} 
            Name="lastname" 
            type="text" 
            placeholder="Nom" />
        </div>
        <div className='input-container email-container'>
          <label htmlFor="email">Mail : </label>
          <input 
            onChange={handleChange} 
            defaultValue=""
            name="mail" 
            type="email" 
            placeholder="Email" />
        </div>
        <div className='input-container password-container'>
          <label htmlFor="password">Mot de passe : </label>
          <input 
            onChange={handleChange} 
            defaultValue=""
            name="password" 
            type="password" 
            placeholder="Mot de passe" />
          <br/>
          <input 
            onChange={handleChange} 
            name="passwordConfirm" 
            type="password" 
            placeholder="Confirmation du mot de passe" />
        </div>
        <button className='register-btn'>Créer mon compte</button>
        <p style={{color:"#ff0000"}}>{message}</p>
      </div>
    </form>
  );
}

export default Register;