import react, { useState } from 'react'

function CarteClientPreview({key, produit}){
    const [quantity, setQuantity] = useState(0)

console.log(produit);

const handleChange = (e) => {
    setQuantity(e.target.value)
}

const handleSubmit = () => {

}

return (
<div >

    <div className='produits'>

        <div>
            
            <h4>{produit.name}</h4>
            <h5>Tarifs</h5>
            <span>TTC : {produit.TTC} €</span>
            <form onSubmit={handleSubmit}>                
                <input onChange={handleChange} name="increment" type="number" min={0}></input>
                <button>Ajouter</button>
            </form>
        </div>

    </div>

</div>
)
}
export default CarteClientPreview;