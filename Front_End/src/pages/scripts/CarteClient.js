import React, { useEffect, useState } from 'react';
import '../styles/CarteClient.css';
import CarteClientPreview from '../../components/CarteClientPreview/CarteClientPreview';

import axios from 'axios';

function Carte() {
    const [formules, setFormules] = useState([])
     const [entrées, setEntrées] = useState({})
     const [plats, setPlats] = useState({})
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

    useEffect( () => {
        async function getEntrées(){
            const result = await axios.get("http://localhost:3002/entrées")
            setEntrées(result.data)
        }
        getEntrées()
    }, [])

    useEffect( () => {
        async function getPlats(){
            const result = await axios.get("http://localhost:3002/plats")
            setPlats(result.data)
        }
        getPlats()
    }, [])

    useEffect( () => {
        async function getDesserts(){
            const result = await axios.get("http://localhost:3002/desserts")
            setDesserts(result.data)
        }
        getDesserts()
    }, [])

    useEffect( () => {
        async function getBoissons(){
            const result = await axios.get("http://localhost:3002/boissons")
            setBoissons(result.data)
        }
        getBoissons()
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
            
              {/* onSubmit={handleSubmit}
              onChange={handleChange} */}
        
        

            {[formules.map(
                (formules, index) => (
                    <CarteClientPreview
                        key={index}
                        formule={formules}
                        // onClick={handleClick}
                        // onUpdate={displayUpdate}
                    />
                )
            )]}

            {[entrées.map(
                (entrées, index) => (
                    <CarteClientPreview
                        key={index}
                        entrée={entrées}
                        // onClick={handleClick}
                        // onUpdate={displayUpdate}
                    />
                )
            )]}

            {[plats.map(
                (plats, index) => (
                    <CarteClientPreview
                        key={index}
                        plat={plats}
                        // onClick={handleClick}
                        // onUpdate={displayUpdate}
                    />
                )
            )]}

            {[desserts.map(
                (desserts, index) => (
                    <CarteClientPreview
                        key={index}
                        dessert={desserts}
                        // onClick={handleClick}
                        // onUpdate={displayUpdate}
                    />
                )
            )]}

            {[boissons.map(
                (boissons, index) => (
                    <CarteClientPreview
                        key={index}
                        boisson={boissons}
                        // onClick={handleClick}
                        // onUpdate={displayUpdate}
                    />
                )
            )]}


        </div>
    );
}

export default Carte;