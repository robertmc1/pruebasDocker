const mongoose = require('mongoose');
const IdeaSchema = mongoose.Schema({
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
    description: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
        trim: true,
        unique: false,
        validate: {
            isAsync: true,
            validator: () => true,
            message: '{VALUE} is not valid'
        }
    },

    teamId: {
        type: String,
        required: true
    }
}, { strict: true });

const IdeaModel = mongoose.model('user', IdeaSchema);
module.exports = { UserSchema , IdeaModel };