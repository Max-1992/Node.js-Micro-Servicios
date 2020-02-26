// Import Modules
const User = require('./model');


// Declare Stores
const get = async (id) => {
    try {
        const user = await User.findById(id);
        return user;
    } catch (error) {
        return Promise.reject(error);
    }
}

const all = async () => {
    try {
        const users = await User.find();
        return users;
    } catch (error) {
        return Promise.reject(error);
    }
}

const update = async (id, dataUser) => {
    try {
        const user = await User.findByIdAndUpdate(id, dataUser, { new: true });
        return user;
    } catch (error) {
        return Promise.reject(error);
    } 
}

const remove = async (id) => {
    try {
        const user = await User.findByIdAndRemove(id);
        return user;
    } catch (error) {
        return Promise.reject(error);
    } 
}

module.exports = {
    get,
    all,
    update,
    remove
}