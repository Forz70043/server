const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASS, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
    }
);

const modelDefiners = [];

for(let modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize;