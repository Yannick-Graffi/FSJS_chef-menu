import './NewTableForm/NewTableForm.css'

function NewTableForm({bouton, onSubmit, onChange}) {
    return ( 
        <div className="newone">
            <form onSubmit={onSubmit}>
            <label>Table :</label>
                <input type="text" onChange={onChange} placeholder="Numéro de la table"/>                 
                <button className='Add'>{bouton}</button>
            </form>
        </div>
     );
}

export default NewTableForm;