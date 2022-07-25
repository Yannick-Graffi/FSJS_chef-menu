import './ProduitsForm.css';

function ProduitsForm({onChangeT, onChangeD, onChangeS, onSubmit}) {
 
    return ( 


        <div className="newproduit">
            <form onSubmit={onSubmit}>
                <label>Nom :</label>
                <input type="text" onChange={onChangeT} placeholder="Nom du produit"/>
                <label>Catégorie :</label>
                <select onChange={onChangeD}>
  <option selected value="entrée">Entrées</option>
  <option value="plat">Plats</option>
  <option value="dessert">Desserts</option>
  <option value="boisson">Boissons</option>
                </select>
                <label>Prix HT :</label>
                <input type="text" onChange={onChangeS} placeholder="Prix HT"/>
                <label>TVA :</label>
                <input type="text" onChange={onChangeS} placeholder="TVA"/>
                
                <button className='Add'>Ajouter le produit à la base de données</button>
            </form>
        </div>
     );
}

export default ProduitsForm;