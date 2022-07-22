import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from 'axios';
import TablePreview from '../components/TablePreview';
import NewTableForm from '../components/NewTableForm';


function Table() {
    const [tables,setTables] = useState([]);
    const [table, setTable] = useState({
        number
    });




    // const [display, setDisplay] = useState(false);
    // const [formData, setFormData] = useState({
    //     number: "",

    // })

    useEffect( () => {
        async function getTable(){
            const result = await axios.get("http://localhost:3002/tables")
            setTables(result.data)
        }
        getTable()
    }, [])

    async function handleDelete(id){
        await axios.delete(`http://localhost:3002/table/${id}`)


        const filteredTables = tables.filter(table => table._id !== id)

         setTables(filteredTables)
    }




    async function handleSubmit(e) {
        e.preventDefault()
        await axios.post(`http://localhost:3002/tables/`, table)
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
        setTable({
            number:e.target.value
        })
    }



    return (

       <div className="publish-container">
            <h2>Bienvenue sur votre page table</h2>
            <p>Ici, vous pourrez ajouter une table</p>
            <NewTableForm
             onSubmit={handleSubmit}
             onChange={handleChange}
        />

            {[tables.map(
                (table) => (
                    <TablePreview
                        key={table._id}
                        table={tables}
                        onDelete={handleDelete}
                        //onUpdate={displayUpdate}
                    />
                )
            )]}
        </div>
    );
}

export default Table;


