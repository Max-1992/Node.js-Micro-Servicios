// Import Modules
const { Router } = require('express');
const router = Router();

// IMPORT MIDDLEWARES
const { verifyToken } = require('../../middlewares/validToken');

// Import Controller
const controller = require('./controller');

// Declare Routes
router.get('/:id', verifyToken, controller.getPost);
router.get('/all/:idUser', verifyToken, controller.AllPost);
router.post('/:idUser', verifyToken, controller.addPost);
router.put('/:id', verifyToken, controller.updatePost);
router.delete('/:id', verifyToken, controller.removePost);

module.exports = router;