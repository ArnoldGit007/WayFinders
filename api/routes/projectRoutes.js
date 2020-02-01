'use strict';
module.exports = function (app) {
    var projectController = require('../controllers/projectController');

    //todoList Routes
    app.route('/projects')
        .get(projectController.list_all_projects);

    app.route('/projects/:projectId')
        .get(projectController.read_a_project);
};