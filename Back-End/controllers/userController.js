const User = require("../models/User");

const userController = async (req, res, next) => {
    try {
        const result = await User.find()
      res.status(200).send(result);

    } catch (error) {
      console.error(error.message);
    }
  }

module.exports = userController