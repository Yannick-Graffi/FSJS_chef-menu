const Table = require('../models/Table')

const tableController = {
    getTables : async (req, res) => {
        try {
            const table = await Table.find()
            res.status(200).send(table)
        } catch (err) {
            console.error(err.message);
        }
    },
    postTable : async (req, res) =>{
        try {
            const {numero} = req.body
            console.log(req.params);
            const table = new Table({
                numero
            })
            await table.save()
            res.status(201).send({message:"Table correctly created", data:table})
        } catch (err) {
            console.error(err.message);
        }
    },
    updateTable : async(req, res) => {
            const id = req.params.id
            console.log(req.body);
            const updatedTable = await Table.findByIdAndUpdate(id, req.body, {
                new:true,
            })
            res.send({message:'Table correctly updated', data:updatedTable})
    },
    deleteTable : async(req,res) => {
        try {
            const id = req.params.id
            await Table.findByIdAndDelete(id)
            res.status(200).send("Table correctly removed")
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = tableController