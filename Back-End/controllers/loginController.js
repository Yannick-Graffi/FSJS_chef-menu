const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwt_secret = process.env.jWT_SECRET;

const loginController = {
    verifyConnection : async (req, res) => {
        const {mail, password} = req.body;
        console.log(req.body);
        if (!mail || !password){
            return res
                .status(400)
                .send({success: false, message:"Merci de remplir tous les champs"})
        }
    
        return User.findOne({mail: mail}).then((user)=>{
            console.log(user);
            if (!user) {
                return res
                .status(401)
                .send({
                    success:false,
                    message:"mail incorrect"
                })
            }
    
            let passwordsMatch = bcrypt.compareSync(password, user.password);
            if (!passwordsMatch) {
                return res
                    .status(401)
                    .send({
                        success : false,
                        message : "Mot de passe erroné"
                    })
            }
            console.log(user._id);
    
            jwt.sign(
                {_id: user._id},
                jwt_secret,
                { expiresIn: "24h"},
                (err, token) => {
                    if (err) {
                        console.log(err);
                    }
                    res.status(200).send({
                        token: token,
                        success: true,
                        message: "Bienvenue sur Chef's Menu"
                    })
                }
    
            )
    
    
        })
    }
}

module.exports = loginController