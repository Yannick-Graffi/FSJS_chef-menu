const Product = require('../models/Product')

const productController = {
    getProducts: async (req, res) => {
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
            const TTC = JSON.parse(HT) * (1+ JSON.parse(TVA))
            const product = new Product({
                name,
                price:{
                    HT,
                    TVA,
                    TTC
                }
            })
            await product.save()
            res.status(201).send({message:"Product correctly created", data:product})
        } catch (err) {
            console.error(err.message);
        }
    },
    updateProduct: async (req, res) => {
        try {
            const id = req.params.id
            const {name, price:{HT, TVA}} = req.body
            const TTC = JSON.parse(HT) * (1+ JSON.parse(TVA))
            const updatedProduct = await Product.findByIdAndUpdate(id, {
                name,
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