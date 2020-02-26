// Import Modules
const User = require('../../user/components/model');


const add = async (dataUser) => {
    try {
        const user = new User(dataUser);
        user.password = await user.encryptPassword(user.password);
        const newUser = await user.save();
        return newUser;
    } catch (error) {
        console.error(`[ERROR signUp]: ${err}`);
        return Promise.reject(error);
    }
}

const login = async (email, password) => {
    try {
        const user = await User.findOne({email: email});

        if( !user ) {
            let err = `The user does not exist in our database, please verify that it is correctly written.`;
            return Promise.reject(err);
        }

        const matchPassword = await user.matchPassword(password);

        if(!matchPassword) {
            let err = `The password is not valid, check again and re-enter it.`;
            return Promise.reject(err);
        }

        return user;

    } catch (error) {
        console.error(`[ERROR signIn]: ${err}`);
        return Promise.reject(err);
    }
}

module.exports = {
    add,
    login
}