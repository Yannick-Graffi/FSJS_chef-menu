import React from 'react';
import './App.css';
import Register from './pages/scripts/Register.js';
import Connexion from './pages/scripts/Connexion.js';
// import Homepage from './pages/Homepage.js';
import Table from './pages/scripts/Table';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import ForgotPassword from './pages/scripts/ForgotPassword';
import Restaurants from './pages/scripts/Restaurant';
import ResetPassword from './pages/scripts/ResetPassword';
import Formule from './pages/scripts/Formule';
import Dashboard from './pages/scripts/Dashboard';
import ClientHomepage from './pages/scripts/ClientHomepage';

//Les Routes sont encore à faire, quand je les fait elles ne fonctionnent pas, je fait juste un appel pour le fonctionnement et mon organisation 

function App() {
  return (
    
    <div className="App">
   <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Homepage />} /> */}
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Connexion/>}/>
          <Route path="/table" element={<Table/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
          <Route path="/restaurants" element={<Restaurants/>}></Route>
          <Route path="/formules" element={<Formule/>}></Route>
          <Route path="/:name/:id" element={<ClientHomepage/>}></Route>
          <Route path="/dashboard/:id" element={<Dashboard/>}></Route>
          <Route path='/reset/:id' element={<ResetPassword/>}></Route>
        </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
