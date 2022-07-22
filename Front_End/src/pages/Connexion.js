import React, { useState } from 'react';
import "./Connexion.css";
import axios from 'axios'
import { set } from 'mongoose';

// import { login } from "react"; 

function Connexion() {
  const [email, setEmail] = useState("")
  const [motDePasse, setMotDePasse] = useState("") 
  const [message, setMessage] = useState("") 

  function handleChangeMail(e) {
    setEmail(e.target.value)
  }
  function handleChangeMDP(e) {
    setMotDePasse(e.target.value)
  }

  const handleLogin = async () => {
    // let result = await login(email, motDePasse)
    // console.log(result)
    console.log("j'arrive dans la fonction après le clic du bouton");
    
    await axios
    .post("http://localhost:3002/connexion", {
      mail:email, 
      password:motDePasse,
    })
    .then( response => {
      setMessage(response.data.message)
      return response
    })
    .catch(err =>{
      setMessage(err.response.data.message);
    })

    // localStorage.setItem("token", res.data.token)
    // console.log("token sauvegardé");

  }

  return (
    <div className='connexion-container'>
      <h2>Connexion</h2>
      <div className='input-container mail-container'>
        <label htmlFor="mail">Mail : </label>
        <input 
          onChange={handleChangeMail} 
          className="mail" 
          type="text" 
          placeholder="Mail" />
      </div>
      <div className='input-container password-container'>
        <label htmlFor="password">Mot de passe : </label>
        <input 
          onChange={handleChangeMDP} 
          className="password" 
          type="password" 
          placeholder="Mot de passe" />
      </div>
      <span style={{color:"#FF0000"}}>{message}</span>
      <button onClick={handleLogin} className='login-btn'>Connexion</button>
      
    </div>
  );
}
console.log('test app.js bien envoyé')
export default Connexion;