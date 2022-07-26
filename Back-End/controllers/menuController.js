const Menu = require( "../models/schemas/Menu");

const menuController = {
    getMenu : async (req, res) => {
        const menu = await Menu.find()
        res.status(200).send(menu)
    },
    postMenu : async (req, res) => {
        const {starters, mainCourses, desserts, drinks, price} = req.body

        try {
            const menu = new Menu({
                starters,
                mainCourses,
                desserts,
                drinks,
                price,
            })
            await menu.save()
            res.status(201).send({message:"menu créé",data:menu})            
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = menuController
