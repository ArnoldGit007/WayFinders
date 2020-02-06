'use strict';
module.exports = function (app) {
  var userController = require('../controllers/userController');

  //todoList Routes
  app.route('/users')
    .get(userController.list_all_users)
    .post(userController.create_a_user);

  app.route('/users/:userId')
    .get(userController.read_a_user)
    .put(userController.update_a_user)
    //.delete(userController.delete_a_user)

  app.route('/users/getByRole/:userRole')
    .get(userController.get_user_by_role)

  app.route('/activateUser')
    .post(userController.activate_a_user)

  app.route('/inactivatedUsers')
    .get(userController.get_all_inactivated_user)
};