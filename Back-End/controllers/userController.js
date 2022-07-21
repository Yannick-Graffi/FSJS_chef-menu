const User = require("../models/User");
const bcrypt = require('bcrypt')

const userController = {
    getUser : async (req, res) => {
            const user = req.user
        res.status(200).send(user);
    },
    postUser: async (req, res) => {
            const {firstname, lastname, mail, password} = req.body
            const saltRounds = 10;
            let passwordHash = await bcrypt.hash(password, saltRounds)

            const user = new User({
                firstname,
                lastname,
                mail,
                password: passwordHash,
            })

            return User.findOne({mail: mail}).then( async (userMail) =>{
                if (userMail !== null) {
                    return res
                        .status(400)
                        .send("mail already exist")
                }
                await user.save()
                res.status(201).send({message:'User correctly created', data:user})
            })
    },

    updateUser: async (req, res) =>{
            const id = req.params.id
            const {firstname, lastname, mail, password} = req.body
            
            const saltRounds = 10;

            let passwordHash = await bcrypt.hash(password, saltRounds)

            const updatedUser = await User.findByIdAndUpdate(id, {
                firstname,
                lastname,
                mail,
                password: passwordHash,
            }, {
                new:true,
            })
            res.send({message:'User correctly updated', data:updatedUser})
    },
    deleteUser: async (req, res) =>{
            const id=req.params.id
            await User.findByIdAndDelete(id)
            res.status(200).send('User correctly deleted')            
    }
}

module.exports = userController