// Import Modules
const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// Declare Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Este campo es obligatorio.']
    },
    lastName: {
        type: String,
        required: [true, 'Este campo es obligatorio.']
    },
    email: {
        type: String,
        required: [true, 'Este campo es obligatorio.']
    },
    password: {
        type: String,
        required: [true, 'Este campo es obligatorio.']
    },
    post: [
        {
            type: Schema.ObjectId,
            ref: 'Post'

        }
    ]
});

// ENCRYPTION METHOD SETTINGS
UserSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(password, salt);
    return hash;
};

UserSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// DO NOT RETURN PASSWORD
UserSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;

    return userObject;

}

// Declare Model
const User = model('User', UserSchema);

module.exports = User;