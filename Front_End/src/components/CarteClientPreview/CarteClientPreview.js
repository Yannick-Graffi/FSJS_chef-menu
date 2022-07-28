import react from 'react'

function CarteClientPreview(){

    


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
export default CarteClientPreview;