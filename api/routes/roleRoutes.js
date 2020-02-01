'use strict';
module.exports = function (app) {
    var roleController = require('../controllers/roleController');

    //todoList Routes
    app.route('/roles')
        .get(roleController.list_all_roles)

    app.route('/roles/:roleId')
        .get(roleController.read_a_role)
};