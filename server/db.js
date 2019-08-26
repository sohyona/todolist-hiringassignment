const Sequelize = require ('sequelize');

const db = new Sequelize ('todolist', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

db
  .authenticate ()
  .then (() => {
    console.log ('Connection has been established successfully.');
  })
  .catch (err => {
    console.error ('Unable to connect to the database:', err);
  });

const users = db.define ('users', {
  username: Sequelize.STRING (31),
  email: Sequelize.STRING (31),
  phone: Sequelize.STRING (31),
  website: Sequelize.STRING (31),
  province: Sequelize.STRING (31),
  city: Sequelize.STRING (31),
  district: Sequelize.STRING (31),
  street: Sequelize.STRING (31),
  zipcode: Sequelize.STRING (31),
});

const todolist = db.define ('todolist', {
  title: Sequelize.STRING (31),
  completed: Boolean,
});

module.exports = {users, todolist};
