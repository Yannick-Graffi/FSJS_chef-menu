import React from 'react';
import '../CarteClientForm/CarteClientForm.css';




function CarteClientForm({onClick, onUpdate, formule}) {
    
    
    console.log(formule)
   
 

    
 return (


    <div className="Formules">
    <form onSubmit={onSubmit}>
    <label>Formules :</label>
        <input type="text" onChange={onChange} placeholder="quantité"/>           
        <button className='Add'>{bouton}</button>

    </form>
</div>

 )
    


      
 } 
export default CarteClientForm;