import 'dotenv/config'
import fs from 'fs';
import path from 'path';
import { Sequelize, DataTypes } from 'sequelize';
import CustomConsole from '../utils/customConsole';

const DATABASE_NAME = process.env.DATABASE_NAME || 'elecciones';
const DATABASE_USER = process.env.DATABASE_USER || 'user';
const DATABASE_PASS = process.env.DATABASE_PASS || 'pass';
const DATABASE_HOST = process.env.DATABASE_HOST || '127.0.0.1';
const DATABASE_DIALECT = process.env.DATABASE_DIALECT || 'postgres';

const basename = path.basename(__filename);
const db = {};

let sequelize;

sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASS, {
  host: DATABASE_HOST,
  dialect: DATABASE_DIALECT,
});

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;