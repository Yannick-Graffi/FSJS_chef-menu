import './NewProduitsForm.css';

function ProduitsForm({onChange, onSubmit}) {
 
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
    
                <button className='Add'>Ajouter le produit</button>
            </form>
        </div>
     );
}

export default ProduitsForm;