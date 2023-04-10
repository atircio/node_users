const userControllers = require('./controllers/userControllers')


module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: userControllers.listUsers
  },
]