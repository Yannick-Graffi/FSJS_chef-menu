import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from 'axios';
import HostPreview from '../components/HostPreview';
import NewTableForm from '../components/NewTableForm';
import UpdateForm from '../components/UpdateForm';

function Table() {
    const [tables,setTables] = useState([]);
    const [table, setTable] = useState({});

    const [number, setNumber] = useState("");
    

    const [display, setDisplay] = useState(false);
    const [formData, setFormData] = useState({
        number: "",
        
    })

    useEffect( () => {
        async function getTable(){
            const result = await axios.get("http://localhost:3002/tables")
            setTables(result.data)
        }
        getTable()
    }, [])

    async function handleDelete(id){
        await axios.delete(`http://localhost:3002/table/${id}`)

 
        const filteredTables = tables.filter(lodge => lodge._id !== id)

         setTables(filteredTables)
    }

    function handleChangeT(e) {
        setNumber(e.target.value)
    }
    

    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post(`http://localhost:3002/tables/`, {
            number,
           
        })
    }

    function displayUpdate(id) {
        if (display) {
            setDisplay(false)
        } else {
            const result = tables.find(table => table._id === id)
            setTable(result) 
            setFormData(result)

            setDisplay(true)
        }
    }
    function handleUpdateChange(e) {
        setFormData(
            prevState => (
                {
                    ...prevState,
                    [e.target.name]:e.target.value
                }
            )
        )    
    }
    async function handleUpdateSubmit(e) {
        e.preventDefault()
        setDisplay(false)
        const result = await axios.put(`http://localhost:3002/restaurants/${formData._id}`, formData)
    }

    return (
        display      
       ?<div>
            <p>Entrez vos modifications :</p>
            <UpdateForm 
                table={table}
                formData={formData}
                onChange={handleUpdateChange}
                onSubmit={handleUpdateSubmit}   
            />   
       </div>
       :<div className="publish-container">
            <h2>Bienvenue sur votre page table</h2>
            <p>Ici, vous pourrez ajouter une table</p>
            <NewTableForm
                onChangeT={handleChangeT}
                onSubmit={handleSubmit}
            />
            
            {[tables.map(
                (table) => (
                    <HostPreview 
                        key={table._id}
                        table={tables}
                        onDelete={handleDelete}
                        onUpdate={displayUpdate}
                    />                    
                )
            )]}
        </div>
    );
}

export default Table;


