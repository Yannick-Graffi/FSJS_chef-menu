const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwt_secret = process.env.JWT_SECRET;

const readToken = (req) => {

    let authorization = req.headers.authorization
    if (!authorization) {
         return null
    }
    let splitted = authorization.split(" ")
    let token = splitted[1]
    if (token) {
        console.log(token);
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
                console.log("err");
                return res  
                    .status(401)
                    .send("Token erroné")
            } else {
                console.log("c'est ok");
            }
        })
    }
}

module.exports = ResetPasswordController