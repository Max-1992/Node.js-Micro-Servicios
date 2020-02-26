// IMPORT OF MODULES
const db = require('mongoose');
const config = require('../config');

// DATABASE CONNECTION
const connect = async () => {
    try {
        await db.connect(config.mongoServices.database, {
                  useNewUrlParser: true,
                  useCreateIndex: true,
                  useUnifiedTopology: true,
                  useFindAndModify: false
              });
              
              console.log(`Database is connected`);
    } catch (err) {
        console.error(`[Error DB]: ${err}`);
    }
};

module.exports = connect;