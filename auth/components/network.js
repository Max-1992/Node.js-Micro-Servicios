// Import Modules
const { Router } = require('express');
const router = Router();

// Import Controller
const controller = require('./controller');

router.post('/singUp', controller.singUp);
router.post('/singIn', controller.singIn);

module.exports = router;