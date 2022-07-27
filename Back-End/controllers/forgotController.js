const User = require("../models/User");
const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET;
const nodemailer = require('nodemailer');

const forgotController = {
    postMail : async (req, res) => {
        const mail = req.body.mail
        
        if (!mail) {
            return res
                .status(400)
                .send({success:false, message:"Merci d'indiquer votre adresse mail"})
        }
        return User
            .findOne({mail:mail})
            .then(user =>{
                console.log(user);
                if (!user) {
                    return res
                        .status(400)
                        .send({success:false, message:"Aucun compte existant avec cette adresse mail"})
                } else{
                    jwt.sign(
                        {_id: user._id, reset:true},
                        jwt_secret,
                        { expiresIn: "10m"},
                        (err, token) => {
                            if (err) {
                                console.log(err);
                            }

                            res.status(200).send({
                                token: token,
                                success: true,
                            })
                            const transporter = nodemailer.createTransport({
                                service: "gmail",
                                auth:{
                                    user: `${process.env.MAIL_ADRESS}`,
                                    pass: `${process.env.MAIL_PASSWORD}`
                                },
                            });
        
                            const mailOption = {
                                from:` Chef menu <${process.env.MAIL_ADRESS}>`,
                                to:`${user.mail}`,
                                subject:'Lien de récupération du mot de passe',
                                text:
                                    'Vous recevez ce message car vous (ou quelqu\'un d\'autre) avez demandé la réinitialisation de votre mot de passe. \n \n'
                                    + 'Cliquez sur ce lien, ou collez-le dans votre navigateur. Vous avez 10 minutes pour compléter la procédure : \n \n'
                                    + `http://localhost:3000/reset/${token}\n\n`
                                    + 'Si vous n\'êtes pas à l\'origine de cette demande, merci d\'ignorer ce message, votre mot de passe sera inchangé'
                            };
        
                            console.log("mail envoyé");
        
                            transporter.sendMail(mailOption, (err, response) =>{
                                if (err) {
                                    console.error(err.message);
                                } else {
                                    return res
                                        .status(200)
                                        .send({success:true, message:"mail de récupération envoyé", data:response})
                                }
                            })
                        }
                    )


                }
            })
    }
}

module.exports = forgotController