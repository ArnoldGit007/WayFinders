'use strict';
module.exports = function (app) {
    var projectController = require('../controllers/projectController');

    //todoList Routes
    app.route('/projects')
        .get(projectController.list_all_projects)
        .post(projectController.create_a_project)

    app.route('/projects/:projectId')
        .get(projectController.read_a_project)
        .put(projectController.update_a_project)

    app.route('/assignDevelopers')
        .post(projectController.assign_developers)

    app.route('/assignTesters')
        .post(projectController.assign_testers)

    app.route('/projects/:projectId/getDevelopers')
        .get(projectController.get_working_developers)

    app.route('/projects/:projectId/getTesters')
        .get(projectController.get_working_testers)
};