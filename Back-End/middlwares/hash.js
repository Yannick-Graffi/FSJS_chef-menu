const bcrypt = require('bcrypt')

const hash = async (pass) => {
    const saltRounds = 10;
    await bcrypt.hash(pass, saltRounds)
}

module.exports = hash