import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import CarteClientPreview from "../../components/CarteClientPreview/CarteClientPreview";

function ClientHomepage() {
    const {name} = useParams()
    let restoName = name.split("-").join(" ").replace(/^./, name[0].toUpperCase())
    
    let accesToken = localStorage.getItem('token')
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    }

    const [products, setProducts] = useState([])
    
    const getProduct = () => {
        // console.log("id = ",id);
        // axios.get(`http://localhost:3002/product/${id}`, config)
        //      .then(res => {
        //         console.log(res.data);
        //         setProducts(res.data)
        //      })
    
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
    }, [])

    return (  
        <div className="publish-container">
            <h2>Bienvenue sur la page du restaurant</h2>
            <h2>{restoName}</h2>
            <h3>Ici, vous pouvez passer votre commande</h3>
        
            <div>
                <div>
                    <h1>Carte</h1>
                </div>
                <div>
                    <h2>Formules</h2>

                </div>
                <div>
                    <h2>Entrées</h2>
                    {filterByCategory("starters")}
                </div>
                <div>
                    <h2>Plats</h2>
                    {filterByCategory("mainCourses")}
                </div>
                <div>
                    <h2>Desserts</h2>
                    {filterByCategory("desserts")}
                </div>
                <div>
                    <h2>Boissons</h2>
                    {filterByCategory("drinks")}
                </div>

            </div>
        </div>
    );
}

export default ClientHomepage;