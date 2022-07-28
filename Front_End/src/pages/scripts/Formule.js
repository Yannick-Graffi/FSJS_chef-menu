import React, { useEffect, useState } from 'react';
import '../styles/Formule.css';
import axios from 'axios';
import FormulePreview from '../../components/FormulePreview/FormulePreview';
import NewFormuleForm from '../../components/NewFormuleForm/NewFormuleForm';

function Formule() {
    const [formules,setFormules] = useState([]);
    const [formule, setFormule] = useState({
        nom:"",
        prix:"",
        entrée:"",
        plat: "",
        dessert:""
    });
    const [message, setMessage] = useState("")




    // const [display, setDisplay] = useState(false);
    // const [formData, setFormData] = useState({
    //     number: "",

    // })

    useEffect( () => {
        async function getFormule(){
            const result = await axios.get("http://localhost:3002/formule")
            setFormules(result.data)
        }
        getFormule()
    }, [])

    async function handleDelete(id){
        await axios.delete(`http://localhost:3002/formule/${id}`)


        const filteredFormules = formules.filter(formule => formule._id !== id)

         setFormules(filteredFormules)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        let accesToken = localStorage.getItem('token')
        let config = {
            headers: {'Authorization' : `Bearer ${accesToken}`}
        }
        await axios
        .post(`http://localhost:3002/formule/`, formule, config)
        .then(res => {
            setMessage("")
            console.log("response = ", res.data);
        })
        .catch(err=> {
            console.log(err)
        })
    }

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

    function handleChange(e) {
        e.preventDefault();
        setFormule({            
        nom:e.target.value,
        prix:e.target.value,
        entrée:e.target.value,
        plat: e.target.value,
        dessert:e.target.value
        })
    }



    return (

        <h2>chef-sMenu</h2>,

       <div className="publish-container">
            <h2>Bienvenue sur votre page formule</h2>
            <p>Ici, vous pourrez ajouter, modifier ou supprimer une formule</p>
            <NewFormuleForm
             onSubmit={handleSubmit}
             onChange={handleChange}
        />
        <span style={{color:"#ff0000"}}>{message}</span>

            {[formules.map(
                (table) => (
                    <FormulePreview
                        key={formule._id}
                        formule={formules}
                        onDelete={handleDelete}
                        //onUpdate={displayUpdate}
                    />
                )
            )]}
        </div>
    );
}

export default Formule;
