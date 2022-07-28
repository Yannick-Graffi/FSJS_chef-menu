import './UpdateProduitsForm.css';

function ProduitsForm({bouton, onChange, onSubmit}) {
 
    return ( 
        <div className="newproduit">
            <form onSubmit={onSubmit}>
                <label>Nom :</label>
                <input name="name" type="text" onChange={onChange} placeholder="Nom du produit"/>
                <label>Catégorie :</label>

                <select name="category" onChange={onChange}>
                    <option value="starters">Entrées</option>
                    <option value="mainCourses">Plats</option>
                    <option value="desserts">Desserts</option>
                    <option value="drinks">Boissons</option>
                </select>

                <label>Prix HT :</label>
                <input name="HT" type="number" onChange={onChange} placeholder="Prix HT"/>
    
                <button className='Add'>{bouton}</button>
            </form>
        </div>
     );
}

export default ProduitsForm;