'use strict';
module.exports = function (app) {
    var loginController = require('../controllers/loginController');

    //todoList Routes
    app.route('/login')
        .post(loginController.validateUserCredentials);
};