'use strict';

var requestHandler = require('../Utilities/requestHandler')
var APIResponse = require('../Utilities/common')

exports.list_all_issues = function (req, res) {
  let sqlQuery = "select * from dbo.[Issue]";
  requestHandler.handle(sqlQuery)
    .then(data => res.send(data))
    .catch(err => res.send(err))
};

exports.create_a_issue = function (req, res) {
  const body = req.body;

  if (body &&
    body.Title &&
    body.Description &&
    body.ProjectId &&
    body.AssignedUserId &&
    body.PriorityId &&
    body.SeverityId &&
    body.StatusId &&
    body.UserId) {

    let sqlQuery = `INSERT INTO dbo.[Issue] (
                          Title, 
                          Description, 
                          ProjectId, 
                          AssignedUserId, 
                          PriorityId,
                          SeverityId,
                          StatusId,
                          CreatedBy,
                          ModifiedBy) 
                    VALUES (
                      '${body.Title}',
                      '${body.Description}',
                       ${body.ProjectId},
                       ${body.AssignedUserId},
                       ${body.PriorityId},
                       ${body.SeverityId},
                       ${body.StatusId},
                       ${body.UserId},
                       ${body.UserId}
                      )`;

    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.read_a_issue = function (req, res) {
  if (req.params.issueId) {
    let sqlQuery = `select * from dbo.[Issue] where id = ${req.params.issueId}`;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};

exports.get_assigned_issues = function (req, res) {
  if (req.params.userId) {
    let sqlQuery = `select * from dbo.[Issue] where AssignedUserId = ${req.params.userId}`;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
}

exports.get_issues_by_project = function (req, res) {
  if (req.params.projectId) {
    let sqlQuery = `select * from dbo.[Issue] where ProjectId = ${req.params.projectId}`;
    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
}

exports.update_a_issue = function (req, res) {
  const body = req.body;

  if (req.params.issueId &&
    body &&
    body.Title &&
    body.Description &&
    body.ProjectId &&
    body.AssignedUserId &&
    body.PriorityId &&
    body.SeverityId &&
    body.StatusId &&
    body.UserId) {

    let sqlQuery = `UPDATE dbo.[Issue] 
                         SET Title = '${body.Title}',
                          Description =  '${body.Description}',
                          Discussion = '${body.Discussion}',
                          ProjectId = ${body.ProjectId},
                          AssignedUserId = ${body.AssignedUserId},
                          PriorityId = ${body.PriorityId},
                          SeverityId = ${body.SeverityId},
                          StatusId = ${body.StatusId},
                          ModifiedBy = ${body.UserId}
                          WHERE Id = ${req.params.issueId} `;

    requestHandler.handle(sqlQuery)
      .then(data => res.send(data))
      .catch(err => res.send(err))
  } else {
    APIResponse.IsSuccess = false
    APIResponse.ErrorMessage = 'Please provide a valid model'
    res.send(APIResponse)
  }
};