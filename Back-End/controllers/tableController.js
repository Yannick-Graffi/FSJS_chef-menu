const Table = require('../models/Table')

const tableController = {
    getTables : async (req, res) => {
            const table = await Table.find()
            res.status(200).send(table)
    },
    postTable : async (req, res) => {
        const {number} = req.body

        if (!number) {
            return res
                .status(400)
                .send({success:false, message:"Merci de saisir un numéro de table"})
        }

        return Table.findOne({number : number}).then(async tableNumber => {
            console.log("numero de table saisi = ", number, " // resultat recherche =", tableNumber);
            if (tableNumber !== null){
                return res 
                    .status(400)
                    .send({
                        success:false,
                        message:"Numéo de table déjà utilisé"
                    })
            }
            const table = new Table({
                number
            })

            await table.save()
             return res
                .status(201)
                .send({message:"Table ajoutée avec succès", data:table})
        })
    },
    updateTable : async(req, res) => {
            const id = req.params.id
            console.log(req.body);
            const updatedTable = await Table.findByIdAndUpdate(id, {number:req.body.number}, {
                new:true,
            })
            res.send({message:'Table correctement modifiée', data:updatedTable})
    },
    deleteTable : async(req,res) => {
        try {
            const id = req.params.id
            await Table.findByIdAndDelete(id)
            res.status(200).send("Table correctement supprimée")
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = tableController