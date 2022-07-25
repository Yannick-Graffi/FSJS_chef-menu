import React, { useState } from 'react';
import "./Connexion.css";
import axios from 'axios'

function Connexion() {
  const [message, setMessage] = useState("") 
  const [formData, setFormData] = useState({
    mail:"",
    password:"",
  })

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

  const handleLogin = async (e) => {
    e.preventDefault()

    await axios
    .post("http://localhost:3002/connexion", formData)
    .then( response => {
      setMessage(response.data.message)
      localStorage.setItem("token", response.data.token)
      console.log("token sauvegardé");
      return response
    })
    .catch(err =>{
      setMessage(err.response.data.message);
    })
  }

  return (
    <form 
      onSubmit={handleLogin}
      className='connexion-container'
    >
      <h2>Connexion</h2>
      <div className='input-container mail-container'>
        <label htmlFor="mail">Mail : </label>
        <input 
          onChange={handleChange} 
          name="mail" 
          type="text" 
          placeholder="Mail" />
      </div>
      <div className='input-container password-container'>
        <label htmlFor="password">Mot de passe : </label>
        <input 
          onChange={handleChange} 
          name="password" 
          type="password" 
          placeholder="Mot de passe" />
      </div>
      <span style={{color:"#FF0000"}}>{message}</span>
      <button className='login-btn'>Connexion</button>
      
    </form>
  );
}

export default Connexion;