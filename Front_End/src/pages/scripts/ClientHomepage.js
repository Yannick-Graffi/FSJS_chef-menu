import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CarteClientPreview from "../../components/CarteClientPreview/CarteClientPreview";
import '../styles/ClientHomepage.css'

function ClientHomepage() {
    const {restoID:id} = useParams()
    // let restoName = name.split("-").join(" ").replace(/^./, name[0].toUpperCase())
    
    let accesToken = localStorage.getItem('token')
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    }

    const [products, setProducts] = useState([])
    const [restoName, setRestoName] = useState("")

    const getRestoName = () => {
        axios.get(`http://localhost:3002/restaurant/${id}`, config)
        .then(res =>{
            // console.log("ce log ?", res.data.data[0].name);
            setRestoName(res.data.data[0].name);
        })
    }
    
    const getProduct = () => {
        axios.get(`http://localhost:3002/product/${id}`, config)
             .then(res => {
                setProducts(res.data)
             })
    
    }

    const filterByCategory = (category) => {
        const filteredProduct = products.filter(function (product) {
            return (
                product.category === category
            ) 
        })
        return filteredProduct.map((product, index) => {
            return (
                <CarteClientPreview
                    key={index}
                    produit={product}
                />)
        })              
    }

    useEffect(() => {
        getProduct()
        getRestoName()
    }, [])

    return (  

        <div className="carteClient">
            <div className="publish-container">
                <h3>Bienvenue sur la page du restaurant</h3>
                <h1>{restoName}</h1>
                <h4>Ici, vous pouvez passer votre commande</h4>
            
                <div>
                    <div>
                        <h1>Carte</h1>
                    </div>
                    <div>
                        <h2>Formules</h2>

                    </div>

                    <h2>Entrées</h2>
                    <div className="category">
                        {filterByCategory("starters")}
                    </div>

                    <h2>Plats</h2>
                    <div className="category">
                        {filterByCategory("mainCourses")}
                    </div>

                    <h2>Desserts</h2>
                    <div className="category">
                        {filterByCategory("desserts")}
                    </div>
                    
                    <h2>Boissons</h2>
                    <div className="category">
                        {filterByCategory("drinks")}
                    </div>

                </div>
            </div>
            <div className="ticket">
                <h2>Résumé de la commande</h2>
            </div>

        </div>
    );
}

export default ClientHomepage;