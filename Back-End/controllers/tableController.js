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
            res.status(201).send({message:"Restaurant correctly created", data:table})
        } catch (err) {
            console.error(err.message);
        }
    },
    updateTable : async(req, res) => {
        try {
            const id = req.params.id
            const updatedTable = await Restaurant.findByIdAndUpdate(id, req.body, {
                new:true,
            })
            res.send({message:'User correctly updated', data:updatedTable})
        } catch (err) {
            console.error(err.message);
        }
    },
    deleteTable : async(req,res) => {
        try {
            const id = req.params.id
            await Table.findByIdAndDelete(id)
            res.status(200).send("Restaurant correctly removed")
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = tableController