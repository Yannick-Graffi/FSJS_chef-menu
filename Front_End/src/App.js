import React from 'react';
import './App.css';
import Register from './components/Register.js';
import Connexion from './components/Connexion.js';
import Navbar from './components/Navbar.js';
import Homepage from './components/Homepage.js';
import { Routes, Route, BrowserRouter} from 'react-router-dom';

//Les Routes sont encore à faire, quand je les fait elles ne fonctionnent pas, je fait juste un appel pour le fonctionnement et mon organisation 

function App() {
  return (
    
    <div className="App">
   <BrowserRouter>
   <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/connexion" element={<Connexion/>}/>
        </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
