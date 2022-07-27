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
<<<<<<< HEAD
import Formule from './pages/scripts/Formule';
=======
import Dashboard from './pages/scripts/Dashboard';
>>>>>>> fa4968aaec08a5f74fea9599f8669bdd6ac5d128

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
<<<<<<< HEAD
          <Route path="/formules" element={<Formule/>}></Route>
          {/* <Route path="/restaurant/:id" element={<Restaurant/>}></Route>
          <Route path="/restaurant/:name" element={<Restaurant/>}></Route> */}
=======
          <Route path="/dashboard/:id" element={<Dashboard/>}></Route>
>>>>>>> fa4968aaec08a5f74fea9599f8669bdd6ac5d128
          <Route path='/reset/:id' element={<ResetPassword/>}></Route>
        </Routes> 
        </BrowserRouter>
    </div>
  );
}

export default App;
