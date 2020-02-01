'use strict';
module.exports = function (app) {
    var severityController = require('../controllers/severityController');

    //todoList Routes
    app.route('/severities')
        .get(severityController.list_all_severities)

    app.route('/severities/:severityId')
        .get(severityController.read_a_severity)
};