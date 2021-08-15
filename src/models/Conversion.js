const mongoose = require('mongoose')
// const bcrypt = require('bcryptjs')

const ConversionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    },
    telephone: {
        type: String,
        required: false
    },
    experience: {
        type: String,
        required: true
    },
    opinion: {
        type: String,
        required: false
    }, 
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// UserSchema.pre('save', async function(next) {
//     const hash = await bcrypt.hash(this.password, 10);
//     this.password = hash;
//     next();
// })

module.exports = mongoose.model('Conversion', ConversionSchema);