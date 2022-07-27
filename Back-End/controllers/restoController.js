const Restaurant = require('../models/Restaurant')

const RestoController = {
    getResto : async (req, res) => {
            const resto = await Restaurant.find({ownerId:req.user._id})
            res.status(200).send(resto)

    },
    getOneResto : async (req, res) => {
        const id = req.params.id
            const resto = await Restaurant.find({_id :id})
            // console.log(resto);
            return res.status(200).send({success:true,message:"Informations récupérées",data:resto})

    },
    postResto : async (req, res) =>{
            const {name, adress, zipCode, city, openingHours, closingHours} = req.body
            const resto = new Restaurant({
                name,
                adress,
                zipCode,
                city,
                openingHours,
                closingHours,
                ownerId:req.user._id
            })
            await resto.save()
            res.status(201).send({message:"Restaurant correctly created", data:resto})
    },
    updateResto : async(req, res) => {
            const id = req.params.id
            const updatedResto = await Restaurant.findOne({id:req.user._id})
            // const updatedResto = await Restaurant.findByIdAndUpdate(id, req.body, {
            //     new:true,
            // })
            res.status(200).send({message:"Restaurant correctly updated", data:updatedResto})
    },
    deleteResto : async(req,res) => {
            const id = req.params.id
            await Restaurant.findByIdAndDelete(id)
            res.status(200).send("Restaurant correctly removed")
    }
}

module.exports = RestoController