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

            if (!firstname || !lastname || !mail || !password) {
                return res
                    .status(400)
                    .send({success:false, message:"Merci de remplir tous les champs"})
            }
            
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
                        .send({message:"Email déjà utilisé"})
                }
                await user.save()
                res.status(201).send({message:'Compte créé', data:user})
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
            res.send({message:'Compte mis à jour', data:updatedUser})
    },
    deleteUser: async (req, res) =>{
            const id=req.params.id
            await User.findByIdAndDelete(id)
            res.status(200).send({message:'Compte supprimé'})            
    }
}

module.exports = userController