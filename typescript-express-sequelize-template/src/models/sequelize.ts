import { Sequelize } from "sequelize";
require('dotenv').config();

const { DATABASE_URL = "" } = process.env;

// console.log('process.env');
// console.log(process.env);
console.log('DATABASE_URL');
console.log(DATABASE_URL);
const sequelize = new Sequelize(DATABASE_URL);

export default sequelize;
