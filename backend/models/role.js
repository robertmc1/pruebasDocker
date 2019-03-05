const mongoose = require('mongoose');

const RoleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 15,
        trim: true,
        unique: true,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
            message: '{VALUE} is not valid'
        }
    },
    isDemium: {
        type: Boolean,
        required: true
    }
}, { strict: true });

const RoleModel = mongoose.model('role', RoleSchema);

module.exports = RoleModel;