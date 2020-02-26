// Import Modules
const { Schema, model } = require('mongoose');

// Declare Schema
const PostSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
        required: [true, 'Este campo es obligatorio.']
    },
    description: {
        type: String,
        required: [true, 'Este campo es obligatorio.']
    },
});

// Declare Model
const Post = model('Post', PostSchema);

module.exports = Post;