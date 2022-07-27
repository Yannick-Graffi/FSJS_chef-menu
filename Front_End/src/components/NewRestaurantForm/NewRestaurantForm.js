import './NewRestaurantForm.css';

function NewRestaurantForm ({onChange, onSubmit}) {
 
    return ( 


        <div className="newone">
            <form onSubmit={onSubmit}>
                <label>Nom :</label>
                <input type="text" name="name" onChange={onChange} placeholder="Nom du restaurant"/>
                
                <label>Adresse :</label>
                <input type="text" name="adress" onChange={onChange} placeholder="Numéro et nom de la rue"/>
                
                <div className="zipCodeCity">
                    <div>
                        <label>Code postal :</label>
                        <input type="text" name="zipCode" onChange={onChange} placeholder="Code postal"/>
                    </div>
                    <div>
                        <label>Ville :</label>
                        <input type="text" name="city" onChange={onChange} placeholder="Ville"/>
                    </div>
                
                </div>
                <div className="hours">
                    <div>
                        <label>Ouverture :</label>
                        <input type="text" name="openingHours" onChange={onChange} placeholder="Heure d'ouverture"/>
                    </div>

                    <div>
                        <label>Fermeture :</label>
                        <input type="text" name="closingHours" onChange={onChange} placeholder="Heure de fermeture"/>
                    </div>
                </div>
                <button className='Add'>Ajouter un restaurant</button>
            </form>
        </div>
     );
}

export default NewRestaurantForm;
