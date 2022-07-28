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
    updateTable : (req, res) => {
            const id = req.params.id
            const {number} = req.body

            if (!number) {
                return res
                    .status(400)
                    .send({success:false, message:"Merci de saisir un numéro de table"})
            }
            Table.findOne({number:number}).then(async tableNumber => {   

                console.log("number = ", number,"tableNumber = ", tableNumber);             
                if (tableNumber !== null){
                    return res 
                        .status(400)
                        .send({
                            success:false,
                            message:"Numéo de table déjà utilisé"
                        })
                }
                await Table.updateOne({_id:id}, {number:req.body.number})
                res.send({message:'Table correctement modifiée'})
            })
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