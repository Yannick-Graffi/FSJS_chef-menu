var express = require('express');
var router = express.Router();
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
// const userController = require('../controllers/userController')

router.post('/', (req, res) =>{
    const {mail, password} = req.body;
    console.log(req.body);
    if (!mail || !password){
        return res
            .status(400)
            .send({success: false, message:"Merci de remplir tous les champs"})
    }

    return User.findOne({mail: mail}).then((user)=>{
        if (user === null) {
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
        res.send("it's alive !")

        // jwt.sign(

        // )


    })
})

module.exports = router