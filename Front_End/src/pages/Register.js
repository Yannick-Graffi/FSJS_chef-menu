import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';
import { set } from 'mongoose';

function Register() {
  const [prenom, setPrenom] = useState("")
  const [nom, setNom] = useState("")
  const [email, setEmail] = useState("")
  const [motDePasse, setMotDePasse] = useState("")
  const [message, setMessage] = useState("")
  
  function handleChangePrenom(e) {
    setPrenom(e.target.value)
  }
  function handleChangeNom(e) {
    setNom(e.target.value)
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value)
  }
  function handleChangeMDP(e) {
    setMotDePasse(e.target.value)
  }

  const onClickRegister = async () => {

   await axios
    .post('http://localhost:3002/users', {
      firstname:prenom,
      lastname:nom,
      mail:email,
      password:motDePasse,
    })
    .then(res => {
      setMessage(res.data.message);      
    })
    .catch(err =>{
      setMessage(err.response.data.message);
    })
  }

  return (
    <div>
      <div className='creation-compte-container'>
        <h2>Créez votre compte Restaurateur</h2>
        <div className='input-container prenom-container'>
          <label htmlFor="prenom">Prénom : </label>
          <input onChange={handleChangePrenom} className="prenom" type="text" placeholder="Prenom" />
        </div>
        <div className='input-container nom-container'>
          <label htmlFor='nom'>Nom : </label>
          <input onChange={handleChangeNom} className="nom" type="text" placeholder="Nom" />
        </div>
        <div className='input-container email-container'>
          <label htmlFor="email">Mail : </label>
          <input onChange={handleChangeEmail} className="email" type="email" placeholder="Email" />
        </div>
        <div className='input-container password-container'>
          <label htmlFor="password">Mot de passe : </label>
          <input onChange={handleChangeMDP} className="password" type="password" placeholder="Mot de passe" />
        </div>
        <button onClick={onClickRegister} className='register-btn'>Créer mon compte</button>
        <p style={{color:"#ff0000"}}>{message}</p>
      </div>
    </div>
  );
}

export default Register;