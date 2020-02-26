// Import Modules
const { Router } = require('express');
const router = Router();

// IMPORT MIDDLEWARES
const { verifyToken } = require('../../middlewares/validToken');

// Import Controller
const controller = require('./controller');

// Declare Routes
router.get('/:id', verifyToken, controller.getUser);
router.get('/', verifyToken, controller.AllUser);
router.put('/:id', verifyToken, controller.updateUser);
router.delete('/:id', verifyToken, controller.removeUser);

module.exports = router;