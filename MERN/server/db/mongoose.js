const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });

mongoose
    .connect(process.env.DATABASE)
    .catch((e) => console.error('Connection error', e.message));

const db = mongoose.connection;

module.exports = db;
