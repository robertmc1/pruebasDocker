const mongoose = require('mongoose');
const { UserSchema } = require('./user');
const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
        trim: true,
        unique: true,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
            message: '{VALUE} is not valid'
        }
    },
    cityId: {
        type: String,
        required: true
    },
    users: [UserSchema]
}, { strict: true });


module.exports = mongoose.model('team', TeamSchema);