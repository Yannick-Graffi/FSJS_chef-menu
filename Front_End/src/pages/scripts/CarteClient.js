import React, { useEffect, useState } from 'react';
import '../styles/CarteClient.css';
import CarteClientPreview from '../../components/CarteClientPreview/CarteClientPreview';

import axios from 'axios';

function Carte() {
    const [formules, setFormules] = useState([])
    const [entrees, setEntrees] = useState([])
    const [plats, setPlats] = useState([])
    const [desserts, setDesserts] = useState([])
    const [boissons, setBoissons] = useState([])
    




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
        async function getEntrees(){
            const result = await axios.get("http://localhost:3002/entrees")
            setEntrees(result.data)
        }
        getEntrees()
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
            <h3>Ici, vous pouvez passer votre commande</h3>
            
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

            {[entrees.map(
                (entrees, index) => (
                    <CarteClientPreview
                        key={index}
                        entree={entrees}
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