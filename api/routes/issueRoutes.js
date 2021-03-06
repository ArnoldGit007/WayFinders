'use strict';
module.exports = function (app) {
    var issueController = require('../controllers/issueController');

    app.route('/issues')
        .get(issueController.list_all_issues)
        .post(issueController.create_a_issue);

    app.route('/issues/:issueId')
        .get(issueController.read_a_issue)
        .put(issueController.update_a_issue)

    app.route('/issues/getAssignedByUserId/:userId')
        .get(issueController.get_assigned_issues)

    app.route('/issues/getByProjectId/:projectId')
        .get(issueController.get_issues_by_project)
    
};