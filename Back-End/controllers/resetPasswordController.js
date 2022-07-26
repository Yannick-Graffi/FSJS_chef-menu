const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { findByIdAndUpdate } = require('../models/User');
const User = require('../models/User');
// const hash = require('../middlwares/hash')
const jwt_secret = process.env.JWT_SECRET;

const readToken = (req) => {

    let authorization = req.headers.authorization
    if (!authorization) {
         return null
    }
    let splitted = authorization.split(" ")
    let token = splitted[1]
    if (token) {
        return token
    } else {
        return null
    }
}

const ResetPasswordController = {
    postNewPassword: async (req, res) => {
        let token = readToken(req)
        if (token === null) {
            return res
            .status(401)
            .send({message:"vous n'avez pas d'autorisation"});
        }

        jwt.verify(token, jwt_secret, (err, decodedToken) => {
            if (err) {
                
                if (err.message === "jwt expired") {
                    console.log(err.message);
                    return res
                        .status(401)
                        .send({message:"Lien expiré. Merci de renouveller votre demande"})
                } else {
                    return err  
                        .status(401)
                        .send({message:err.message})
                }

            } else {
                let id = decodedToken._id
                return User
                    .findOne({_id: id})
                    .then(async (user) =>{
                        if (user.mail !== req.body.mail) {
                            return res
                                .status(401)
                                .send({success:false, message:"utilisateur inconnu, vérifiez votre adresse mail"})
                        } else {
                            console.log(token);
                            const {newPassword} = req.body

                            const saltRounds = 10;
                            let newPasswordHash = await bcrypt.hash(newPassword, saltRounds)
                            console.log("id = ", id, "password hashed = ", newPasswordHash);
                            await User.findByIdAndUpdate({_id:id}, {
                                password:newPasswordHash,
                            },{
                                new:true
                            })
                            res.send({message:'Mot de passe réinitisalisé'})
                        }
                    })
            }
        })
    }
}

module.exports = ResetPasswordController