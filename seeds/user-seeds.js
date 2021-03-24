const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'testuser1',
    password: 'testuser1'
  },
  {
    username: 'testuser2',
    password: 'testuser2'
  },
  {
    username: 'testuser3',
    password: 'testuser3'
  },
  {
    username: 'testuser4',
    password: 'testuser4'
  },
  {
    username: 'testuser5',
    password: 'testuser5'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;