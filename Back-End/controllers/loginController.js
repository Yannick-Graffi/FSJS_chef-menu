const {mail, password} = req.body;

if (!mail || !password){
    return res
        .status(400)
        .send({success: false, message:"Merci de remplir tous les champs"})
}