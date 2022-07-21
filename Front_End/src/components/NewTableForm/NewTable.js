import './NewTableForm.css';

function NewTableForm({onChange, onSubmit}) {
 
    return ( 


        <div className="newone">
            <form onSubmit={onSubmit}>
            <label>Table :</label>
                <input type="text" onChange={onChange} placeholder="Numéro de la table"/>
                               
                <button className='Add'>Ajouter une table</button>
            </form>
        </div>
     );
}

export default NewTableForm;