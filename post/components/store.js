// Import Modules
const Post = require('./model');
const User = require('../../user/components/model');


// Declare Stores
const add = async ( dataPost, idUser) => {
    try {
        // Creamos el post
        const post = new Post(dataPost);
        post.user = idUser;
        const newPost = await post.save();

        // Añadimos el post nuestor usuario
        const user = await User.findById(idUser);
        user.post.push(newPost._id);
        user.save();

        return newPost;
    } catch (error) {
        return Promise.reject(error);
    }
}

const get = async (id) => {
    try {
        const post = await Post.findById(id);
        return post;
    } catch (error) {
        return Promise.reject(error);
    }
}

const all = async (idUser) => {
    try {
        const posts = await Post.find({ "user": idUser })
        return posts;
    } catch (error) {
        return Promise.reject(error);
    }
}

const update = async (id, dataUser) => {
    try {
        const post = await Post.findByIdAndUpdate(id, dataUser, { new: true });
        return post;
    } catch (error) {
        return Promise.reject(error);
    } 
}

const remove = async (id) => {
    try {
        const post = await Post.findByIdAndRemove(id);
        return post;
    } catch (error) {
        return Promise.reject(error);
    } 
}

module.exports = {
    add,
    get,
    all,
    update,
    remove
}