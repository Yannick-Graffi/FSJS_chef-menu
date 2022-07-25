import React from 'react';
import './App.css';
import Register from './pages/Register.js';
import Connexion from './pages/Connexion.js';
import Navbar from './components/Navbar.js';
import Homepage from './pages/Homepage.js';
import Table from './pages/Table.js';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import Restaurant from './pages/Restaurant';

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
          <Route path="/table" element={<Table/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
          <Route path="/restaurant" element={<Restaurant/>}></Route>
        </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
