const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 15,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
            message: '{VALUE} is not valid'
        }
    },
    surname: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 25,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: (name) => Boolean(name.match(/^[A-Za-z]+[ ]?[A-Za-z]+$/)),
            message: '{VALUE} is not valid'
        }
    },
    telephone: {
        type: String,
        required: true,
        minlength: 9,
        maxlength: 15,
        trim: true,
        unique: true,
        validate: {
            isAsync: true,
            validator: () => true,
            message: '{VALUE} is not valid'
        }
    },
    email: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50,
        trim: true,
        unique: true,
        validate: {
            isAsync: true,
            validator: () => true,
            message: '{VALUE} is not valid'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50,
        trim: false,
        unique: false,
        validate: {
            isAsync: true,
            validator: () => true,
            message: '{VALUE} is not valid'
        }
    },
    roleId: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true
        },
        access: {
            type: String,
            required: true
        }
    }],
}, { strict: true });

UserSchema.methods.generateAuthToken = function () {
    const user = this;

    const access = 'auth';
    const token = jwt.sign({ _id: user._id, access }, 'jwt encrypt pass').toString();

    user.tokens.push({ access, token });

    return user.save().then(() => token);
};
const UserModel = mongoose.model('user', UserSchema);
module.exports = { UserSchema, UserModel };