import './NewRestaurantForm.css';

function NewLodgeForm({onChangeT, onChangeD, onChangeS, onSubmit}) {
 
    return ( 


        <div className="newone">
            <form onSubmit={onSubmit}>
            <label>Titre :</label>
                <input type="text" onChange={onChangeT} placeholder="Titre de l'annonce"/>
                <label>Description :</label>
                <textarea onChange={onChangeD} placeholder="Description"/>
                <label>Style :</label>
                <input type="text" onChange={onChangeS} placeholder="Style"/>
                <button className='Add'>Ajouter un restaurant</button>
            </form>
        </div>
     );
}

export default NewLodgeForm;
