const { parse } = require('dotenv');
const Product = require('../models/Product')



const productController = {
    getProducts: async (req, res) => {
        const id = req.params.id
        const product = await Product.find({restaurantId:id})
        res.status(200).send(product)
    },
    postProduct: async (req, res) => {
        const {name, category, HT} = req.body
        const id = req.params.id
        const TVA = 0.1; 
        const TTC = parseFloat(JSON.parse(HT) * (1+ JSON.parse(TVA))).toFixed(1)
        const product = new Product({
            restaurantId:id,
            name,
            category,
            HT,
            TVA,
            TTC,
        })
        await product.save()
        res.status(201).send({message:"Product correctly created", data:product})
    },
    updateProduct: async (req, res) => {
        try {
            const id = req.params.id
            const {name, category, price:{HT, TVA}} = req.body
            const TTC = JSON.parse(HT) * (1+ JSON.parse(TVA))
            const updatedProduct = await Product.findByIdAndUpdate(id, {
                name,
                category,
                price:{
                    HT,
                    TVA,
                    TTC
                }
            }, {
                new:true,
            })
            res.status(200).send({message:"Product correctly updated", data:updatedProduct})
        } catch (err) {
            console.error(err.message);
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const id = req.params.id
            await Product.findByIdAndDelete(id)
            res.status(200).send("Product correctly removed")
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = productController