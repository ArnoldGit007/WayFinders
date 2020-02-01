'use strict';

var requestHandler = require('../Utilities/requestHandler')


exports.list_all_issues = function (req, res) {
  let sqlQuery = "select * from dbo.[Issue]";
  return requestHandler.handle(req, res, sqlQuery)
};

exports.create_a_issue = function (req, res) {
  let sqlQuery = `INSERT INTO dbo.[Issue] VALUES('${req.body.username}','${req.body.password}')`;
  return requestHandler.handle(req, res, sqlQuery)
};

exports.read_a_issue = function (req, res) {
  let sqlQuery = `select * from dbo.[Issue] where id = ${req.params.issueId}`;
  return requestHandler.handle(req, res, sqlQuery)
};

exports.update_a_issue = function (req, res) {
  let sqlQuery = `UPDATE dbo.[Issue]
  SET password = '${req.body.password}'
  WHERE Id = ${req.params.userId}`;
  return requestHandler.handle(req, res, sqlQuery)
};