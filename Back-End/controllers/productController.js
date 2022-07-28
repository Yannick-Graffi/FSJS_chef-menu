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
        const {name, category, HT} = req.body
        const id = req.params.id
        const TVA = 0.1; 
        const TTC = parseFloat(JSON.parse(HT) * (1+ JSON.parse(TVA))).toFixed(1)
        console.log(TTC);
    
        const updatedProduct = await Product.findByIdAndUpdate(id, {
            name,
            category,
            HT,
            TVA,
            TTC,
        }, {
            new:true
        })
        console.log(updatedProduct);
        res.status(200).send({message:"Product correctly updated"})
    },
    deleteProduct: async (req, res) => {
            const id = req.params.id
            await Product.findByIdAndDelete(id)
            res.status(200).send("Product correctly removed")

    }
}

module.exports = productController