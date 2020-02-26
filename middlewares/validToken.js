// IMPORT OF MODULES
const jwt = require('jsonwebtoken');
const config = require('../config');

// RESPONSE
const response = require('../network/response');



const verifyToken = (req, res, next) => {
    try {
        const token = req.header(`Authorization`);
    
        if( !token ) {
            let err = `Access denied. You are not authorized to enter our application`;
            return response.error(req, res, err, 401);
        }
    
        const user = jwt.verify( token, config.jwt.SEED_SECRET );
    
        req.user = user;
    
        next();

    } catch (err) {
        return response.error(req, res, err, 500);
    }
    
};


module.exports = {
    verifyToken
};