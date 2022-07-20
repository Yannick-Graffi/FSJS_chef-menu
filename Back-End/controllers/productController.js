const Product = require('../models/Product')

const productController = {
    getProduct: async (req, res) => {
        try {
            const product = await Product.find()
            res.status(200).send(product)
        } catch (err) {
            console.error(err.message);
        }
    },
    postProduct: async (req, res) => {
        try {
            const {name, price:{HT, TVA}} = req.body
            const product = new Product({
                name,
                price:{
                    HT,
                    TVA,
                }
            })
            res.status(201).send({message:"Product correctly created", data:product})
        } catch (err) {
            console.error(err.message);
        }
    },
    updateProduct: async (req, res) => {
        try {
            const id = req.params.id
            const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
                new:true,
            })
            res.status(200), send({message:"Product correctly updated", data:updatedProduct})
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