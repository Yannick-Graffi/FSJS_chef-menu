import React, { useEffect, useState } from 'react';
import '../styles/CarteClient.css';
import CarteClientPreview from '../../components/CarteClientPreview/CarteClientPreview';
import CarteClientForm from '../../components/CarteClientForm/CarteClientForm'
import axios from 'axios';

function Carte() {
    const [formules, setFormules] = useState({})
    // const [entrées, setEntrées] = useState({})
    // const [plats, setPlats] = useState({})
    // const [desserts, setDesserts] = useState({})
    // const [boissons, setBoissons] = useState({})
    




    // const [display, setDisplay] = useState(false);
    // const [formData, setFormData] = useState({
    //     number: "",

    // })

    useEffect( () => {
        async function getFormules(){
            const result = await axios.get("http://localhost:3002/formules")
            setFormules(result.data)
        }
        getFormules()
    }, [])

    

    

    // function displayUpdate(id) {
    //     if (display) {
    //         setDisplay(false)
    //     } else {
    //         const result = tables.find(table => table._id === id)
    //         setTable(result)
    //         setFormData(result)

    //         setDisplay(true)
    //     }
    // }

   



    return (

        <h2>chef-sMenu</h2>,

       <div className="publish-container">
            <h2>Bienvenue sur la page du restaurant test</h2>
            <p>Ici, vous pouvez passer votre commande</p>
            <CarteClientPreview
            //  onSubmit={handleSubmit}
            //  onChange={handleChange}
        />
        <span style={{color:"#ff0000"}}>{message}</span>

            {[formules.map(
                (formules, index) => (
                    <CarteClientForm
                        key={index}
                        formule={formules}
                        // onClick={handleClick}
                        // onUpdate={displayUpdate}
                    />
                )
            )]}
        </div>
    );
}

export default Carte;