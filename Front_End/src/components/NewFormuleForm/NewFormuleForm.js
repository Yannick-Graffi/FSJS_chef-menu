import './NewFormuleForm.css';

function NewFormuleForm({onChangeT, onChangeD, onChangeS, onSubmit}) {
 
    return ( 


        <div className="newformule">
            <form onSubmit={onSubmit}>
                <label>Nom de la formule:</label>
                <input type="text" onChange={onChangeT} placeholder="Nom de la formule"/>

                <label>Prix de la formule:</label>
                <input type="text" onChange={onChangeT} placeholder="Prix de la formule"/>

                <label>Entrées :</label>
                <select onChange={onChangeD}>

  <option select multiple={true} value={['']}></option>
  <h4>ou</h4>
  <option select multiple={true} value={['']}></option>
  <h4>ou</h4>
  <option select multiple={true} value={['']}></option>

                </select>

                <label>Plats :</label>
                <select onChange={onChangeS}/>
  <option select multiple={true} value={['']}></option>
  <h4>ou</h4>
  <option select multiple={true} value={['']}></option>
  <h4>ou</h4>
  <option select multiple={true} value={['']}></option>

                <label>Desserts :</label>
                <select onChange={onChangeS}/>
  <option select multiple={true} value={['']}></option>
  <h4>ou</h4>
  <option select multiple={true} value={['']}></option>
  <h4>ou</h4>
  <option select multiple={true} value={['']}></option>

                 
<button className='Add'>Ajouter la formule à la base de données</button>
            </form>
        </div>
     );
}

export default NewFormuleForm;