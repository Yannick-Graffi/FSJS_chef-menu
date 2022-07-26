const jwt = require('jsonwebtoken');
const userController = require('../controllers/userController');
const User = require("../models/User");
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

const auth = {
    isUser(req, res, next) {
        let token = readToken(req)
        if (token === null) {
            return res
                .status(401)
                .send({message:"vous n'avez pas d'autorisation"})};

        jwt.verify(token, jwt_secret, (err, decodedToken) => {
            if (err) {
                return res
                    .status(401)
                    .send({message:"Token erroné"});

            } else {
                let id = decodedToken._id;

                if (decodedToken.reset === true){
                    return res 
                        .status(401)
                        .send({message:"token erroné"});
                } 

                User.findOne({_id:id})
                .then((response)=>{
                    if (response === null) {
                        return res
                            .status(404)
                            .send({message:"Pas d'utilisateur associé"})
                    } else {
                        req.user = response;
                        req.token = decodedToken._id;
                        next();
                    }
                })
            }
        })
    }
}

module.exports = auth