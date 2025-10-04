import { Sequelize } from 'sequelize';
import path from 'path';

const dbPath = process.env.DB_PATH || path.join(__dirname, '../../database.sqlite');

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: process.env.NODE_ENV === 'development' ? console.log : false,
  define: {
    timestamps: true,
    underscored: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  // SQLite specific options
  dialectOptions: {
    // Ensure proper SQLite behavior
    options: {
      // Enable foreign keys
      foreign_keys: 'ON'
    }
  }
});
