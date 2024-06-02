const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USERNAME, 
    process.env.DB_PASS, 
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logQueryParameters: true,
    }
);

const modelDefiners = [
    require('./models/user.model')
];

for(const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}

module.exports = sequelize;