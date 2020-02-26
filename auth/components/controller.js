// Import Modules
const store = require('./store');
const response = require('../../network/response');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const singUp = async (req, res) => {
    try {
        const {
            name,
            lastName,
            email,
            password
        } = req.body;

        const dataUser = {
            name,
            lastName,
            email,
            password
        };

        const user = await store.add(dataUser);

        response.success(req, res, user, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
}

const singIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if( !email || !password ) {
            const message = `Los datos ingresados no son validos`;
            response.error(req, res, message, 400);
        }

        const user = await store.login(email, password);

        // Create token.
        const token = jwt.sign({
            user
        }, config.jwt.SEED_SECRET, { expiresIn: config.jwt.EXPIRES_SECRET });

        response.authSuccess(req, res, user, token, 200);

    } catch (error) {
        response.error(req, res, error, 500);
    }
}

module.exports = {
    singUp,
    singIn
}