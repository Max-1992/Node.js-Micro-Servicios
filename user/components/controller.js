// Import Modules
const store = require('./store');
const response = require('../../network/response');


// Declare Controllers
const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        if( !id ) {
            const message = `No se recibio ID.`;
            response.error(req, res, message, 400);
        }

        const user = await store.get(id);

        if( !user ) {
            const message = `Usuario no encontrado.`;
            response.error(req, res, message, 404);
        }

        response.success(req, res, user, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
   
}

const AllUser = async (req, res) => {
    try {
        const users = await store.all();

        if( !users ) {
            const message = `No se encontraron usuarios.`;
            response.error(req, res, message, 404);
        }

        response.success(req, res, users, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const dataUser = req.body;

        if( !id ) {
            const message = `No se recibio ID.`;
            response.error(req, res, message, 400);
        }

        if( !dataUser ) {
            const message = `No se recibio la data del usuario.`;
            response.error(req, res, message, 400);
        }

        const user = await store.update(id, dataUser);
        
        response.success(req, res, user, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
}

const removeUser = async (req, res) => {
    try {
        const { id } = req.params;

        if( !id ) {
            const message = `No se recibio ID.`;
            response.error(req, res, message, 400);
        }

        const user = await store.remove(id);

        response.success(req, res, user, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
}

module.exports = {
    AllUser,
    getUser,
    removeUser,
    updateUser
}