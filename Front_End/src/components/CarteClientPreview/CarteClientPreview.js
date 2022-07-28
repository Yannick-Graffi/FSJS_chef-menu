import react from 'react'

function CarteClientPreview(produit){

console.log(produit);

return (
<div >

    <div className='produits'>

        <div>
            
            <h4>{produit.name}</h4>
            <h5>Tarifs</h5>
            <span>HT : {produit.HT} €</span>
            <span>TVA : {produit.TVA*100} %</span>
            <span>TTC : {produit.TTC} €</span>
                    
        </div>

    </div>
    {/* <form onSubmit={onSubmit}>
    <label>Formules :</label>
        <input type="text" onChange={onChange} placeholder="quantité"/>           
        <button className='Add'>{bouton}</button>

    </form> */}
</div>
)
}
export default CarteClientPreview;