const Order = require("../models/Order")

const orderController = {
    getOrder : async (req,res) => {
        try {
            const order = await Order.find()
            res.status(200).send(order)
        } catch (err) {
            console.error(err.message);
        }
    },
    postOrder : async (req, res) => {
        try {
            const {tableNumber, products, price} = req.body
            const order = new Order({
                tableNumber,
                products,
                price,
            })
            await order.save()
            res.status(201).send({message:"Order correctly created", data:order})
        } catch (err) {
            console.error(err.message);
        }
    },
    updateOrder : async (req, res) => {
        try {
            const id = req.params.id
            const updatedOrder = await Order.findByIdAndUpdate(id, req.body, {
                new:true
            })
            res.status(200).send({message:"Order correctly updated", data:updatedOrder})
        } catch (err) {
            console.error(err.message);
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const id = req.params.id
            await Order.findByIdAndDelete(id)
            res.status(200).send("Order correctly removed")
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = orderController