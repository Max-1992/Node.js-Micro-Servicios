// Import Controllers
const routesAuth = require('../components/network');


const routes = app => {
    app.use('/api/auth', routesAuth);
}

module.exports = routes;