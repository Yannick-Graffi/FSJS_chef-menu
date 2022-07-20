const Restaurant = require('../models/Restaurant')

const RestoController = {
    getResto : async (req, res) => {
        try {
            const resto = await Restaurant.find()
            res.status(200).send(resto)
        } catch (err) {
            console.error(err.message);
        }
    },
    postResto : async (req, res) =>{
        try {
            const {name, adress:{adress, postcode, city}, hours:{opening, closing}} = req.body
            const resto = new Restaurant({
                name,
                adress:{
                    adress,
                    postcode,
                    city,
                },
                hours:{
                    opening,
                    closing,
                }
            })
            await resto.save()
            res.status(201).send({message:"Restaurant correctly created", data:resto})
        } catch (err) {
            console.error(err.message);
        }
    },
    updateResto : async(req, res) => {
        try {
            const id = req.params.id
            const updatedResto = await Restaurant.findByIdAndUpdate(id, req.body, {
                new:true,
            })

        } catch (err) {
            console.error(err.message);
        }
    },
    deleteResto : async(req,res) => {
        try {
            const id = req.params.id
            await Restaurant.findByIdAndDelete(id)
            res.status(200).send("Restaurant correctly removed")
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = RestoController