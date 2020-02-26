// Import Controllers
const routesPost = require('../components/network');

const routes = app => {
    app.use('/api/post', routesPost);
}

module.exports = routes;