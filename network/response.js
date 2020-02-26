// Declara las respuesta de nuestra aplicación.
const success = (req, res, message, status = 200) => {
    res.status(status).send({
        error: false,
        status: status,
        body: message
    });
}

const authSuccess = (req, res, message, token, status = 200 ) => {
    return res.status(status).header( 'Authorization', token).send({
        error: false,
        status: status,
        body: message
    });
};

const error = (req, res, message, status = 500) => {
    res.status(status).send({
        error: false,
        status: status,
        body: message
    });
}

module.exports = {
    success,
    error,
    authSuccess
}