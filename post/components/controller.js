// Import Modules
const store = require('./store');
const response = require('../../network/response');


// Declare Controllers
const addPost = async (req, res) => {
    try {
        const dataPost = req.body;
        const { idUser } = req.params;
    
        if( !idUser ) {
            const message = `No se recibio ID.`;
            response.error(req, res, message, 400);
        }

        const post = await store.add(dataPost, idUser);

        response.success(req, res, post, 201);

    } catch (error) {
        response.error(req, res, error, 500);
    }
}

const getPost = async (req, res) => {
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

const AllPost = async (req, res) => {
    try {
        const { idUser } = req.params;
        
        if( !idUser ) {
            const message = `No se recibio ID.`;
            response.error(req, res, message, 400);
        }

        const posts = await store.all(idUser);

        if( !posts ) {
            const message = `No se encontraron usuarios.`;
            response.error(req, res, message, 404);
        }

        response.success(req, res, posts, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
}

const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const dataPost = req.body;

        if( !id ) {
            const message = `No se recibio ID.`;
            response.error(req, res, message, 400);
        }

        if( !dataPost ) {
            const message = `No se recibio la data del usuario.`;
            response.error(req, res, message, 400);
        }

        const post = await store.update(id, dataPost);
        
        response.success(req, res, user, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
}

const removePost = async (req, res) => {
    try {
        const { id } = req.params;

        if( !id ) {
            const message = `No se recibio ID.`;
            response.error(req, res, message, 400);
        }

        const post = await store.remove(id);

        response.success(req, res, user, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
}

module.exports = {
    addPost,
    AllPost,
    getPost,
    removePost,
    updatePost
}