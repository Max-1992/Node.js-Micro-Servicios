// Require Modules
const express = require('express');
const config = require('../config');
const logger = require('morgan');
const swaggerUI = require('swagger-ui-express');

// Initializations
const app = express();

// Create Document Api
const swaggerDoc = require('./swagger.json');
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));

// Settings
app.use(logger('dev'));
app.use(cors());

// Start the Server
app.listen( config.api.port, (err) => {
    if(err) {
        console.error(err);
    }
    console.log(`Server is running on port ${config.api.port}`);
})