// Import Controllers
const routesUser = require('../components/network');

const routes = app => {
    app.use('/api/user', routesUser);
}

module.exports = routes;