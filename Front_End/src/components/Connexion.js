import React, { useState } from 'react';
import "./Connexion.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../lib/Social-Network-Library"; 

function Connexion() {
  const [email, setEmail] = useState("")
  const [motDePasse, setMotDePasse] = useState("")
  const [messageErreur, setMessageErreur] = useState("")
  let navigate = useNavigate();

  function handleChangeMail(e) {
    setEmail(e.target.value)
  }
  function handleChangeMDP(e) {
    setMotDePasse(e.target.value)
  }

  const handleLogin = async () => {
    let result = await login(email, motDePasse)
    console.log(result)
    
    if(result.success) {
      navigate("/home", { replace: true });
      setMessageErreur("")
    } else {
      setMessageErreur(result.message)
    }
  }

  return (
    <div className='connexion-container'>
      <h2>Connexion</h2>
      <div className='input-container mail-container'>
        <label htmlFor="mail">Mail</label>
        <input onChange={handleChangeMail} className="mail" type="text" placeholder="mail" />
      </div>
      <div className='input-container password-container'>
        <label htmlFor="password">Mot de passe</label>
        <input onChange={handleChangeMDP} className="password" type="text" placeholder="mot de passe" />
      </div>
      <button onClick={handleLogin} className='login-btn'>Login</button>
      {/* Si messageErreur alors affiche moi le message d'erreur*/}
      { messageErreur && <p className='error-message'>{messageErreur}</p> }
      <div style={{margin: "20px"}}>
        <Link to="/register">Pas de compte ?</Link>
      </div>
    </div>
  );
}

export default Connexion;