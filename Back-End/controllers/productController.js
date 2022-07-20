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
            const {name, price:{HT, TVA, TTC}} = req.body
            const product = new Product({
                name,
                price:{
                    HT,
                    TTC,
                }
            })
        } catch (err) {
            console.error(err.message);
        }
    },
    updateProduct: async (req, res) => {
        try {
            const id = req.params.id
            const updatedProduct = await Product.
        } catch (err) {
            console.error(err.message);
        }
    },
    deleteProduct:
}