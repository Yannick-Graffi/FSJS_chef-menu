const User = require("../models/User");
const bcrypt = require('bcrypt')

const userController = {
    getUser : async (req, res) => {
        try {
            const user = req.user
        res.status(200).send(user);

        } catch (error) {
        console.error(error.message);
        }
    },
    postUser: async (req, res) => {
        try {
            const {firstname, lastname, mail, password} = req.body
            const saltRounds = 10;
            let passwordHash = await bcrypt.hash(password, saltRounds)

            const user = new User({
                firstname,
                lastname,
                mail,
                password: passwordHash,
            })
            await user.save()
            res.status(201).send({message:'User correctly created', data:user})
        } catch (err) {
            console.error(err.message);
        }
    },
    updateUser: async (req, res) =>{

            const id = req.params.id
            console.log(req.body);
            const updatedUser = await User.findByIdAndUpdate(id, req.body, {
                new:true,
            })
            res.send({message:'User correctly updated', data:updatedUser})

    },
    deleteUser: async (req, res) =>{
        try {
            const id=req.params.id
            await User.findByIdAndDelete(id)
            res.status(200).send('User correctly deleted')            
        } catch (err) {
            console.error(err.message);
        }
    }
}

module.exports = userController