'use strict';
module.exports = function (app) {
    var statusController = require('../controllers/statusController');

    //todoList Routes
    app.route('/status')
        .get(statusController.list_all_status);

    app.route('/status/:statusId')
        .get(statusController.read_a_status);
};