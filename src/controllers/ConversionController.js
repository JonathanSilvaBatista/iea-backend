// index, show, store, update, destroy
const Conversion = require('../models/Conversion')
// const jwt = require('jsonwebtoken')

// const authConfig = require('./../config/auth')

// function generateToken(params = {}){
//     return jwt.sign(params, authConfig.secret, {
//         expiresIn: 86400
//     })
// }

module.exports = {
    async store(req, res){
        //const email = req.body.email;
        // console.log(req.telephone)
        const { name, email, telephone, experience } = req.body
        // let user = await User.findOne({ email });

        // if (!user){
            conversion = await Conversion.create({ name, email, telephone, experience });
        // }

        // user.password = undefined;

        return res.json({
            conversion
            // token: generateToken({ id: user.id })
        });
    }
};
