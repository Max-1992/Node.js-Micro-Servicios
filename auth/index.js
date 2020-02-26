// Require Modules
const express = require('express');
const config = require('../config');
const logger = require('morgan');
const cors = require('cors');

// Initializations
const app = express();

// DataBase Connect
const db = require('../mongodb/connect');
db();

// Settings
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(cors());

// Import Router
const router = require('./network/router');

// Router Init
router(app);

// Start the Server
app.listen( config.authServices.port, (err) => {
    if(err) {
        console.error(err);
    }
    console.log(`Server is running on port ${config.authServices.port}`);
})