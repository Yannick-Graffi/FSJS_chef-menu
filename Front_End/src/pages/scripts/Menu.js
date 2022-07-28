import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import NewProduitsForm from '../../components/ProduitsForm/NewProduitsForm'
import ProduitsPreview from "../../components/ProduitsPreview/ProduitsPreview";
import '../styles/menu.css'

function Menu() {
    let accesToken = localStorage.getItem('token')
    let config = {
        headers: {'Authorization' : `Bearer ${accesToken}`}
    }

    const {id} = useParams()
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState({
        name:"",
        category:"",
        HT:"",
    })

    const [displayForm, setDisplayForm] = useState(false)
    
    const getProduct = () => {
        axios.get(`http://localhost:3002/product/${id}`, config)
             .then(res => {
                setProducts(res.data)
             })
    
    }

    const handleChange = (e) => { 
        setProduct(
            prevState => (
                {
                    ...prevState,
                    [e.target.name]:e.target.value,            
                }
            )
        )
    } 

    const postProduct = () => {

        axios.post(`http://localhost:3002/product/${id}`, product , config)
            .then(res => {
                console.log("produit tout seul dans DB =", res.data);
                getProduct()
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postProduct();
        setDisplayForm(false);

    }

    const addProduct = () => {
        if (displayForm) {
            setDisplayForm(false)
        } else {
            setDisplayForm(true)
        }
    }

    const filterByCategory = (category) => {
        const filteredProduct = products.filter(function (product) {
            return (
                product.category === category
            ) 
        })
        return filteredProduct.map((product, index) => {
            return (
                <ProduitsPreview
                    key={index}
                    produit={product}
                />)
        })              
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (  
        <div>
            <Navbar 
                id2={id}
            />
            <div>
                <div>
                    <h1>Carte</h1>
                </div>
                {!displayForm ? <button onClick={addProduct}>Ajouter un produit</button> : <button onClick={addProduct}>Annuler</button>}
                {displayForm 
                && <NewProduitsForm
                    onSubmit={handleSubmit}
                    onChange={handleChange}
                />}
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

export default Menu;