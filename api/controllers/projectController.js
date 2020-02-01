'use strict';

//console.log(sql)
var requestHandler = require('../Utilities/requestHandler')

exports.list_all_projects = function (req, res) {
  let sqlQuery = "select * from dbo.[Project]";
  return requestHandler.handle(req, res, sqlQuery)
};

exports.read_a_project = function (req, res) {
  let sqlQuery = `select * from dbo.[Project] where id = ${req.params.projectId}`;
  return requestHandler.handle(req, res, sqlQuery)
};

